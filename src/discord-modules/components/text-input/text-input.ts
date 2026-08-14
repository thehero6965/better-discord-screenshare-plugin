import { DiscordComponentModule } from '../../discord-modules';
import { TextInputSizes } from '../../types/components';

export const TextInput = DiscordComponentModule.TextInput;

// Discord no longer exposes a `Sizes` static on the TextInput component,
// so these are hardcoded to match its current internal size values.
export const textInputSizes: TextInputSizes = {
  DEFAULT: 'default',
  MINI: 'mini',
};
