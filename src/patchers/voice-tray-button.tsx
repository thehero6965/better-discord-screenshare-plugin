import { Patcher } from 'dium';
import { Location } from '../discord-modules';

// TEMPORARY: diagnostic only. This is the same Location analytics wrapper
// used (and abandoned) for the old Go Live modal injection, but it's
// confirmed to reliably fire with props.section === 'Voice Control Tray'
// when rendering the mute/deafen/screen-share icon row - a much steadier
// target than chasing raw webpack modules for a specific context menu.
// Logs the render result shape before attempting to inject a button, so
// we don't repeat guessing at an array shape that turns out to be wrong.
export class VoiceTrayButton {
  private static unpatchFunctions: (() => void)[] = [];
  private static logged = false;

  public static patch(): void {
    this.unpatch();

    const unpatchRender = Patcher.after(Location.prototype, 'render', (data) => {
      const props = data.context?.props as { section?: string } | undefined;
      if (props?.section !== 'Voice Control Tray') return;
      if (this.logged) return;
      this.logged = true;

      console.log(
        '[BetterScreenshare debug] Voice Control Tray render result =',
        data.result
      );
      console.log(
        '[BetterScreenshare debug] Voice Control Tray children =',
        (data.result as any)?.props?.children,
        'isArray =',
        Array.isArray((data.result as any)?.props?.children)
      );
    });

    this.unpatchFunctions.push(unpatchRender);
  }

  public static unpatch(): void {
    this.logged = false;
    this.unpatchFunctions.forEach((fn) => fn());
    this.unpatchFunctions = [];
  }
}
