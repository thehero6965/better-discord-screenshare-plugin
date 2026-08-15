import { Patcher } from 'dium';
import deepmerge from 'ts-deepmerge';
import { mediaEngineStore, utils as discordUtils } from '../discord-modules';
import { Emitter } from '../emitter';
import {
  DefaultScreenshareConfig,
  defaultScreenshareConfig,
  ScreenshareConfig,
  usePluginStore,
} from '../stores';
import { kbitToBit } from '../utils';

// Discord re-runs its own quality negotiation (resetting resolution/framerate
// to its defaults) whenever the shared source changes mid-stream, and also
// periodically as part of its own adaptive-quality loop - not just once on
// 'connected'. Re-applying the resolution/framerate override after every
// applyQualityConstraints call keeps it from getting stomped on.
const REAPPLY_THROTTLE_MS = 250;

export class Screenshare {
  private static mediaEngineStore = mediaEngineStore;
  private static mediaEngine = this.mediaEngineStore.getMediaEngine();
  private static unpatchFunctions: (() => void)[] = [];

  public static patch(): void {
    this.unpatch();

    const unpatchQualityModifer = Emitter.addListener(
      this.mediaEngine.emitter,
      'on',
      'connection',
      (connection) => {
        if (connection.context !== 'stream') return;

        let isApplyingOverride = false;
        let lastAppliedAt = 0;

        const applyResolutionOverride = () => {
          const { encode, capture, bitrate } = deepmerge(
            defaultScreenshareConfig as any,
            usePluginStore.getState().screenshare as any
          ) as any as DefaultScreenshareConfig & ScreenshareConfig;

          isApplyingOverride = true;
          try {
            connection.setDesktopEncodingOptions(
              encode.getWidth(),
              encode.getHeight(),
              encode.getFramerate()
            );

            connection.overwriteQualityForTesting({
              encode: {
                framerate: encode.getFramerate(),
                width: encode.getWidth(),
                height: encode.getHeight(),
              },
              capture: {
                framerate: capture.getFramerate(),
                width: capture.getWidth(),
                height: capture.getHeight(),
              },
              bitrateMax: kbitToBit(bitrate.getMaximum()),
              bitrateMin: kbitToBit(bitrate.getMinimum()),
              bitrateTarget: kbitToBit(bitrate.getTarget()),
            });
          } finally {
            isApplyingOverride = false;
          }
          lastAppliedAt = Date.now();
        };

        const overwriteQuality = () => {
          const { getAudioCodec, getAudioSource, getKeyframeInterval, getVideoCodec } =
            deepmerge(
              defaultScreenshareConfig as any,
              usePluginStore.getState().screenshare as any
            ) as any as DefaultScreenshareConfig & ScreenshareConfig;

          connection.setCodecs(getAudioCodec(), getVideoCodec(), 'stream');

          applyResolutionOverride();

          const audioSource = getAudioSource();
          if (audioSource === 'none') {
            connection.setSoundshareSource(0, false);
          } else if (audioSource && audioSource !== 'default') {
            const pid = discordUtils.getPidFromDesktopSource(audioSource);

            if (pid) {
              connection.setSoundshareSource(
                pid,
                this.mediaEngineStore.getExperimentalSoundshare()
              );
            }
          }

          const keyframeInterval = getKeyframeInterval();
          if (keyframeInterval)
            connection.setKeyframeInterval(keyframeInterval);
        };

        connection.on('connected', overwriteQuality);

        const unpatchQualityConstraints = Patcher.after(
          connection,
          'applyQualityConstraints',
          () => {
            if (isApplyingOverride) return;
            if (Date.now() - lastAppliedAt < REAPPLY_THROTTLE_MS) return;
            applyResolutionOverride();
          },
          { silent: true }
        );

        connection.on('destroy', unpatchQualityConstraints);
        this.unpatchFunctions.push(unpatchQualityConstraints);
      }
    );

    this.unpatchFunctions.push(unpatchQualityModifer);
  }

  public static unpatch(): void {
    this.unpatchFunctions.forEach((fn) => fn());
    this.unpatchFunctions = [];
  }
}
