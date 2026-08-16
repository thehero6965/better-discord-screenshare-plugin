import { Patcher } from 'dium';
import deepmerge from 'ts-deepmerge';
import {
  Connection,
  mediaEngineStore,
  utils as discordUtils,
} from '../discord-modules';
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

interface ConnectionOverrideState {
  isApplyingOverride: boolean;
  lastAppliedAt: number;
}

export class Screenshare {
  private static mediaEngineStore = mediaEngineStore;
  private static mediaEngine = this.mediaEngineStore.getMediaEngine();
  private static unpatchFunctions: (() => void)[] = [];
  private static overrideState = new WeakMap<
    Connection,
    ConnectionOverrideState
  >();

  private static applyResolutionOverride(connection: Connection): void {
    const state = this.overrideState.get(connection);
    if (!state) return;

    const { encode, capture, bitrate } = deepmerge(
      defaultScreenshareConfig as any,
      usePluginStore.getState().screenshare as any
    ) as any as DefaultScreenshareConfig & ScreenshareConfig;

    state.isApplyingOverride = true;
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
      state.isApplyingOverride = false;
    }
    state.lastAppliedAt = Date.now();
  }

  // Reasserting resolution/codecs/keyframe interval on a live connection is
  // safe (confirmed extensively live), but re-calling setSoundshareSource on
  // an already-attached connection is not: confirmed live that even calling
  // it again with the exact same pid and loopback value - a total no-op -
  // silently kills working audio (soundshareattached still fires and
  // soundshareActive stays true, so Discord itself doesn't detect a
  // failure). A detach-then-reattach doesn't recover it either. So unlike
  // the rest of the settings, audio source is only ever applied once, on
  // the initial connect - changing it live requires a stream restart.
  private static applyLiveSettings(connection: Connection): void {
    const { getAudioCodec, getKeyframeInterval, getVideoCodec } = deepmerge(
      defaultScreenshareConfig as any,
      usePluginStore.getState().screenshare as any
    ) as any as DefaultScreenshareConfig & ScreenshareConfig;

    connection.setCodecs(getAudioCodec(), getVideoCodec(), 'stream');

    this.applyResolutionOverride(connection);

    const keyframeInterval = getKeyframeInterval();
    if (keyframeInterval) connection.setKeyframeInterval(keyframeInterval);
  }

  private static applyAudioSource(connection: Connection): void {
    const { getAudioSource } = deepmerge(
      defaultScreenshareConfig as any,
      usePluginStore.getState().screenshare as any
    ) as any as DefaultScreenshareConfig & ScreenshareConfig;

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
  }

  /**
   * Pushes the current resolution/codec/bitrate/keyframe settings to every
   * active stream connection immediately, instead of waiting for the next
   * stream start. Deliberately excludes audio source - see
   * applyAudioSource's comment for why that one requires a restart.
   */
  public static applyToActiveConnections(): void {
    for (const connection of this.mediaEngine.connections) {
      if (connection.context !== 'stream') continue;
      if (!this.overrideState.has(connection)) continue;
      this.applyLiveSettings(connection);
    }
  }

  public static patch(): void {
    this.unpatch();

    const unpatchQualityModifer = Emitter.addListener(
      this.mediaEngine.emitter,
      'on',
      'connection',
      (connection) => {
        if (connection.context !== 'stream') return;

        this.overrideState.set(connection, {
          isApplyingOverride: false,
          lastAppliedAt: 0,
        });

        connection.on('connected', () => {
          this.applyLiveSettings(connection);
          this.applyAudioSource(connection);
        });

        const unpatchQualityConstraints = Patcher.after(
          connection,
          'applyQualityConstraints',
          () => {
            const state = this.overrideState.get(connection);
            if (!state || state.isApplyingOverride) return;
            if (Date.now() - state.lastAppliedAt < REAPPLY_THROTTLE_MS)
              return;
            this.applyResolutionOverride(connection);
          },
          { silent: true }
        );

        connection.on('destroy', () => {
          unpatchQualityConstraints();
          this.overrideState.delete(connection);
        });
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
