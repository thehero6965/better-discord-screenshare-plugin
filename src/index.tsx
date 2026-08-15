import { Patcher, setMeta } from 'dium';
import type React from 'react';
import { betterDiscordConfig } from '../betterdiscord.config';
import { Plugin } from './bd';
import { StreamQualitySection } from './components';
import { Emitter } from './emitter';
import { Debug, DropdownFix, FloatingButton, Screenshare } from './patchers';

module.exports = class extends Plugin {
  constructor() {
    super();
    setMeta(betterDiscordConfig);
  }

  protected async start(): Promise<void> {
    // Each patcher is independent - one throwing shouldn't stop the rest
    // from being attempted.
    try {
      Screenshare.patch();
    } catch (e) {
      console.error('[BetterScreenshare debug] Screenshare.patch() failed', e);
    }

    try {
      FloatingButton.mount();
    } catch (e) {
      console.error(
        '[BetterScreenshare debug] FloatingButton.mount() failed',
        e
      );
    }

    try {
      DropdownFix.patch();
    } catch (e) {
      console.error('[BetterScreenshare debug] DropdownFix.patch() failed', e);
    }
  }

  protected stop(): void {
    Patcher.unpatchAll();
    Debug.unpatch();
    Screenshare.unpatch();
    FloatingButton.unmount();
    DropdownFix.unpatch();
    Emitter.removeAllListeners();
  }

  protected getSettingsPanel(): React.ReactElement {
    return BdApi.React.createElement(StreamQualitySection);
  }
};
