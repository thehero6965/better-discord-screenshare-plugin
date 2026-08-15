import { getMeta } from 'dium';

const STYLE_ID = `${getMeta().name}-dropdown-fix`;

// Discord's native dropdown popout (portaled as position: fixed) renders
// behind BD's own settings modal chrome when opened from inside our
// getSettingsPanel() - confirmed live via the popout's own outerHTML, which
// showed legitimate viewport coordinates rather than being confined to a
// small container, pointing to a stacking-order issue rather than true
// overflow clipping. The class name carries a CSS-modules hash suffix that
// changes across Discord builds (e.g. selectDropdown__0edde), so this
// matches on the stable stem instead of the full class.
const css = `
[class^="selectDropdown_"] {
  z-index: 999999 !important;
}
`;

export class DropdownFix {
  public static patch(): void {
    BdApi.DOM.addStyle(STYLE_ID, css);
  }

  public static unpatch(): void {
    BdApi.DOM.removeStyle(STYLE_ID);
  }
}
