import { Finder } from 'dium';
import { Text } from './types/classes';
import { Dropdown, TextInput } from './types/components';
import { Dispatcher, Utils } from './types/modules';
import { MediaEngineStore, StreamStore } from './types/stores';

export const DiscordStoreModule = {
  get MediaEngineStore(): MediaEngineStore {
    return Finder.byKeys(['getAttenuateWhileSpeakingOthers']);
  },
  get StreamStore(): StreamStore {
    return Finder.byKeys(['getAllActiveStreams', 'getStreamForUser']);
  },
} as const;

export const DiscordModule = {
  get Utils(): Utils {
    return Finder.byKeys(['getPidFromDesktopSource']);
  },
  get Dispatcher(): Dispatcher {
    return Finder.byKeys(['isDispatching', 'subscribe']);
  },
} as const;

export const DiscordComponentModule = {
  get Dropdown(): Dropdown {
    return Finder.bySource(['value', 'onChange', 'serialize', 'isSelected'], {
      entries: true,
    });
  },
  get TextInput(): TextInput {
    return Finder.bySource(['placeholder', 'maxLength', 'clearable'], {
      entries: true,
    });
  },
} as const;

export const DiscordClassModule = {
  get Text(): Text {
    return Finder.byKeys(['h5']);
  },
} as const;
