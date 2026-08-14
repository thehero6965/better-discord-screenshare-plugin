import { Patcher, setMeta } from 'dium';
import type React from 'react';
import { betterDiscordConfig } from '../betterdiscord.config';
import { Plugin } from './bd';
import { StreamQualitySection } from './components';
import { Emitter } from './emitter';
import { Debug, Screenshare, StreamContextMenu } from './patchers';

module.exports = class extends Plugin {
  constructor() {
    super();
    setMeta(betterDiscordConfig);
  }

  protected async start(): Promise<void> {
    Screenshare.patch();
    StreamContextMenu.patch();
  }

  protected stop(): void {
    Patcher.unpatchAll();
    Debug.unpatch();
    Screenshare.unpatch();
    StreamContextMenu.unpatch();
    Emitter.removeAllListeners();
  }

  protected getSettingsPanel(): React.ReactElement {
    return BdApi.React.createElement(StreamQualitySection);
  }
};
