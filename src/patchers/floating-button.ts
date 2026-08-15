import { StreamQualitySection } from '../components';

const BUTTON_ID = 'better-screenshare-floating-button';

const openQualityMenu = (event: MouseEvent): void => {
  const menu = BdApi.ContextMenu.buildMenu([
    {
      type: 'custom',
      render: () => BdApi.React.createElement(StreamQualitySection),
    },
  ]);

  BdApi.ContextMenu.open(event, menu);
};

// Discord's own tray proved unreliable to inject into: BD's ContextMenu API
// doesn't reach every menu (confirmed live), and the component tree we
// patched didn't match what actually renders on screen across several
// attempts. A plain DOM element appended directly to the page sidesteps all
// of that - no dependency on Discord's internal structure at all.
export class FloatingButton {
  private static button: HTMLDivElement | undefined;

  public static mount(): void {
    this.unmount();

    const button = document.createElement('div');
    button.id = BUTTON_ID;
    button.title = 'BetterScreenshare quality settings';
    button.textContent = '⚙';
    button.style.cssText = `
      position: fixed;
      bottom: 16px;
      right: 16px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #5865f2;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
      z-index: 9999;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
      user-select: none;
    `;

    button.addEventListener('click', openQualityMenu);

    document.body.appendChild(button);
    this.button = button;
  }

  public static unmount(): void {
    this.button?.remove();
    this.button = undefined;
    // Defensive: clean up a stray leftover from an earlier session/reload.
    document.getElementById(BUTTON_ID)?.remove();
  }
}
