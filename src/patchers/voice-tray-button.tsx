import { Patcher } from 'dium';
import { VoiceTrayQualityButton } from '../components';
import { Location } from '../discord-modules';

// This is the same Location analytics wrapper used (and abandoned) for the
// old Go Live modal injection, but it's confirmed live to fire reliably
// with props.section === 'Voice Control Tray' when rendering the mute/
// deafen/screen-share icon row.
//
// Structure confirmed live, three levels deep:
// Location.render() -> Consumer whose children is a render-prop function ->
// calling it produces a Context.Provider whose children is
// [eventPromptsContainer (unrelated notification banners), wrapper] ->
// wrapper's own children is [buttonSection, buttonSection, memo'd user/
// disconnect panel] -> the second buttonSection (5 items, one conditionally
// false) is the mic/deafen/gear icon cluster - push our button there.
export class VoiceTrayButton {
  private static unpatchFunctions: (() => void)[] = [];

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

          const wrapper = rendered?.props?.children?.[1];
          const buttonCluster = wrapper?.props?.children?.[1];
          const items = buttonCluster?.props?.children;

          if (
            Array.isArray(items) &&
            !items.some(
              (item: any) => item?.key === 'better-screenshare-button'
            )
          ) {
            items.push(
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
    this.unpatchFunctions.forEach((fn) => fn());
    this.unpatchFunctions = [];
  }
}
