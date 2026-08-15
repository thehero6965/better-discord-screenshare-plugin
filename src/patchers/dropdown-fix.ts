import { getMeta } from 'dium';

// Discord's native dropdown popout (portaled as position: fixed) renders
// behind BD's own settings modal chrome when opened from inside our
// getSettingsPanel() - confirmed live via the popout's own outerHTML, which
// showed legitimate viewport coordinates rather than being confined to a
// small container, pointing to a stacking-order issue rather than true
// overflow clipping. The class name carries a CSS-modules hash suffix that
// changes across Discord builds (e.g. selectDropdown__0edde), so this
// matches on the stable stem instead of the full class.
//
// Bumping the dropdown's own z-index isn't enough on its own though: BD's
// modal wrapper (.bd-modal-root) carries an identity transform
// (matrix(1,0,0,1,0,0), presumably left over from its open/close animation
// or applied for layer promotion) which - despite being visually a no-op -
// still establishes a new stacking context per spec. That traps the
// dropdown's fixed-position z-index inside the modal's local stacking
// order instead of the page's, where it was still losing to
// .bd-modal-footer (a flex item, and z-index applies to flex items
// regardless of position) - confirmed live by walking the dropdown's
// ancestor chain for transform/filter/will-change/contain/perspective.
const css = `
[class^="selectDropdown_"] {
  z-index: 999999 !important;
}

.bd-modal-footer {
  z-index: -1 !important;
}
`;

export class DropdownFix {
  private static styleId(): string {
    return `${getMeta().name}-dropdown-fix`;
  }

  public static patch(): void {
    BdApi.DOM.addStyle(this.styleId(), css);
  }

  public static unpatch(): void {
    BdApi.DOM.removeStyle(this.styleId());
  }
}
