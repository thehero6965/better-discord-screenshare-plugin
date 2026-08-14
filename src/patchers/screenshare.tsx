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

        const overwriteQuality = () => {
          const {
            getAudioCodec,
            getAudioSource,
            getKeyframeInterval,
            getVideoCodec,
            encode,
            capture,
            bitrate,
          } = deepmerge(
            defaultScreenshareConfig as any,
            usePluginStore.getState().screenshare as any
          ) as any as DefaultScreenshareConfig & ScreenshareConfig;

          connection.setCodecs(getAudioCodec(), getVideoCodec(), 'stream');

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

          const audioSource = getAudioSource();
          if (audioSource === 'none') {
            connection.setSoundshareSource(0, false);
          } else if (audioSource && audioSource !== 'default') {
            const pid = discordUtils.getPidFromDesktopSource(audioSource);

            if (pid) {
              connection.setSoundshareSource(
                pid,
                // this.mediaEngineStore.getExperimentalSoundshare()
                true
              );
            }
          }

          const keyframeInterval = getKeyframeInterval();
          if (keyframeInterval)
            connection.setKeyframeInterval(keyframeInterval);
        };

        connection.on('connected', overwriteQuality);
      }
    );

    this.unpatchFunctions.push(unpatchQualityModifer);
  }

  public static unpatch(): void {
    this.unpatchFunctions.forEach((fn) => fn());
    this.unpatchFunctions = [];
  }
}
