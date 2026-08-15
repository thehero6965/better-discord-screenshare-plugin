import { Patcher } from 'dium';
import { VoiceTrayQualityButton } from '../components';
import { Location } from '../discord-modules';

// This is the same Location analytics wrapper used (and abandoned) for the
// old Go Live modal injection, but it's confirmed live to fire reliably
// with props.section === 'Voice Control Tray' when rendering the mute/
// deafen/screen-share icon row. Its render() returns a Consumer whose
// children is a render-prop function; calling that produces a Context
// Provider whose own children is the array of tray sections we can inject
// into directly.
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
        if (typeof oldChildren !== 'function') {
          if (!this.logged) {
            this.logged = true;
            console.log(
              '[BetterScreenshare debug] voice tray: section matched but children is not a function:',
              oldChildren
            );
          }
          return;
        }

        result.props.children = (...args: any[]) => {
          const rendered = oldChildren(...args);
          const children = rendered?.props?.children;
          const isArray = Array.isArray(children);

          if (!this.logged) {
            this.logged = true;
            console.log(
              '[BetterScreenshare debug] voice tray: rendered =',
              rendered
            );
            console.log(
              '[BetterScreenshare debug] voice tray: children =',
              children,
              'isArray =',
              isArray,
              'length =',
              isArray ? children.length : undefined
            );
          }

          if (
            isArray &&
            !children.some(
              (child: any) => child?.key === 'better-screenshare-button'
            )
          ) {
            children.push(
              BdApi.React.createElement(VoiceTrayQualityButton, {
                key: 'better-screenshare-button',
              })
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
