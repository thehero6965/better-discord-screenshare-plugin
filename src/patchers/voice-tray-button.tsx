import { Patcher } from 'dium';
import { Location } from '../discord-modules';

// TEMPORARY: diagnostic only. This is the same Location analytics wrapper
// used (and abandoned) for the old Go Live modal injection, but it's
// confirmed to reliably fire with props.section === 'Voice Control Tray'
// when rendering the mute/deafen/screen-share icon row - a much steadier
// target than chasing raw webpack modules for a specific context menu.
//
// Its rendered children is a render-prop function (confirmed live), so
// wrap it, call through to the original every time (tray still renders
// normally), and log what it actually produces once so the real button
// injection can be built against real data instead of another guess.
export class VoiceTrayButton {
  private static unpatchFunctions: (() => void)[] = [];
  private static logged = false;

  public static patch(): void {
    this.unpatch();

    const unpatchRender = Patcher.after(
      Location.prototype,
      'render',
      (data) => {
        const props = data.context?.props as { section?: string } | undefined;
        if (props?.section !== 'Voice Control Tray') return;

        const result = data.result as any;
        const oldChildren = result?.props?.children;
        if (typeof oldChildren !== 'function') return;

        result.props.children = (...args: any[]) => {
          const rendered = oldChildren(...args);

          if (!this.logged) {
            this.logged = true;
            console.log(
              '[BetterScreenshare debug] Voice Control Tray rendered content =',
              rendered
            );
          }

          return rendered;
        };
      }
    );

    this.unpatchFunctions.push(unpatchRender);
  }

  public static unpatch(): void {
    this.logged = false;
    this.unpatchFunctions.forEach((fn) => fn());
    this.unpatchFunctions = [];
  }
}
