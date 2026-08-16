import { getMeta } from 'dium';
import { StreamQualitySection } from '../components';

const BUTTON_ID = 'better-screenshare-floating-button';
const POPOUT_ID = 'better-screenshare-floating-popout';
const BUTTON_POSITION_DATA_KEY = 'floatingButtonPosition';
const POPOUT_POSITION_DATA_KEY = 'floatingPopoutPosition';
const DRAG_THRESHOLD_PX = 5;
const BUTTON_SIZE = 40;
const POPOUT_WIDTH = 320;

interface Position {
  top: number;
  left: number;
}

interface Size {
  width: number;
  height: number;
}

interface ReactRoot {
  render: (element: unknown) => void;
  unmount: () => void;
}

const clampToViewport = (
  { top, left }: Position,
  { width, height }: Size
): Position => ({
  left: Math.min(Math.max(left, 0), Math.max(window.innerWidth - width, 0)),
  top: Math.min(Math.max(top, 0), Math.max(window.innerHeight - height, 0)),
});

// Makes `el` draggable via mousedown+move on `handle` (defaults to `el`
// itself). A drag that never crosses DRAG_THRESHOLD_PX calls `onClick`
// instead of moving anything, so this doubles as a click handler.
const makeDraggable = (
  el: HTMLElement,
  size: Size,
  onDragEnd: (pos: Position) => void,
  onClick: () => void,
  handle: HTMLElement = el
): void => {
  let moved = false;
  let startX = 0;
  let startY = 0;
  let originTop = 0;
  let originLeft = 0;

  const onMouseMove = (e: MouseEvent) => {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (!moved && Math.hypot(dx, dy) > DRAG_THRESHOLD_PX) {
      moved = true;
      handle.style.cursor = 'grabbing';
    }
    if (moved) {
      const next = clampToViewport(
        { top: originTop + dy, left: originLeft + dx },
        size
      );
      el.style.transform = '';
      el.style.top = `${next.top}px`;
      el.style.left = `${next.left}px`;
      el.style.bottom = '';
    }
  };

  const onMouseUp = () => {
    handle.style.cursor = 'grab';
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (moved) {
      const rect = el.getBoundingClientRect();
      onDragEnd({ top: rect.top, left: rect.left });
    } else {
      onClick();
    }
  };

  handle.addEventListener('mousedown', (e: MouseEvent) => {
    moved = false;
    startX = e.clientX;
    startY = e.clientY;
    const rect = el.getBoundingClientRect();
    originTop = rect.top;
    originLeft = rect.left;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
};

// Discord's own tray proved unreliable to inject into: BD's ContextMenu API
// doesn't reach every menu (confirmed live), and the component tree we
// patched didn't match what actually renders on screen across several
// attempts. This is a plain DOM button appended directly to the page
// instead - no dependency on Discord's internal structure at all.
//
// The popout content is mounted via BdApi.ReactDOM.createRoot rather than
// BdApi.ContextMenu's buildItem/buildMenu helpers: buildItem's "custom"
// type isn't actually handled specially in BD's real implementation (only
// separator/submenu/toggle/radio/control are) - it always falls through to
// a plain label-based menu item and throws trying to read a label we never
// provided. createRoot works around that entirely by mounting our own
// content into our own container.
export class FloatingButton {
  private static button: HTMLDivElement | undefined;
  private static popout: HTMLDivElement | undefined;
  private static content: HTMLDivElement | undefined;
  private static reactRoot: ReactRoot | undefined;
  private static outsideClickHandler: ((e: MouseEvent) => void) | undefined;

  public static mount(): void {
    this.unmount();

    const savedButtonPosition = BdApi.Data.load(
      getMeta().name,
      BUTTON_POSITION_DATA_KEY
    ) as Position | undefined;
    const buttonPosition = clampToViewport(
      savedButtonPosition ?? {
        top: window.innerHeight - BUTTON_SIZE - 16,
        left: window.innerWidth - BUTTON_SIZE - 16,
      },
      { width: BUTTON_SIZE, height: BUTTON_SIZE }
    );

    const button = document.createElement('div');
    button.id = BUTTON_ID;
    button.title = 'BetterScreenshare quality settings (drag to move)';
    button.textContent = '⚙';
    button.style.cssText = `
      position: fixed;
      top: ${buttonPosition.top}px;
      left: ${buttonPosition.left}px;
      width: ${BUTTON_SIZE}px;
      height: ${BUTTON_SIZE}px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #5865f2;
      color: #fff;
      font-size: 18px;
      cursor: grab;
      z-index: 9999;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
      user-select: none;
    `;

    const popout = document.createElement('div');
    popout.id = POPOUT_ID;
    popout.style.cssText = `
      position: fixed;
      display: none;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: ${POPOUT_WIDTH}px;
      max-height: 70vh;
      overflow-y: auto;
      background: #2b2d31;
      color: #dcddde;
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
      z-index: 9999;
      padding: 12px;
      box-sizing: border-box;
    `;

    const header = document.createElement('div');
    header.style.cssText =
      'display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-weight: 600; cursor: grab; user-select: none;';

    const title = document.createElement('span');
    title.textContent = 'BetterScreenshare Quality';

    const closeButton = document.createElement('span');
    closeButton.textContent = '✕';
    closeButton.style.cssText = 'cursor: pointer; opacity: 0.7;';
    closeButton.addEventListener('mousedown', (e) => e.stopPropagation());
    closeButton.addEventListener('click', () => this.hidePopout());

    header.appendChild(title);
    header.appendChild(closeButton);

    const content = document.createElement('div');

    popout.appendChild(header);
    popout.appendChild(content);

    document.body.appendChild(button);
    document.body.appendChild(popout);

    this.button = button;
    this.popout = popout;
    this.content = content;

    makeDraggable(
      button,
      { width: BUTTON_SIZE, height: BUTTON_SIZE },
      (pos) => BdApi.Data.save(getMeta().name, BUTTON_POSITION_DATA_KEY, pos),
      () => this.togglePopout()
    );

    makeDraggable(
      popout,
      { width: popout.offsetWidth || POPOUT_WIDTH, height: popout.offsetHeight || 400 },
      (pos) => BdApi.Data.save(getMeta().name, POPOUT_POSITION_DATA_KEY, pos),
      () => {},
      header
    );

    this.outsideClickHandler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        this.popout?.style.display !== 'none' &&
        !this.popout?.contains(target) &&
        !this.button?.contains(target)
      ) {
        this.hidePopout();
      }
    };
    document.addEventListener('mousedown', this.outsideClickHandler);
  }

  private static togglePopout(): void {
    if (!this.popout) return;
    if (this.popout.style.display === 'none') {
      // Deferred until first open rather than mounted eagerly at start() -
      // Discord's native form components (Dropdown, TextInput) log a
      // "useManaContext must be used within a ManaContext.Provider"
      // warning on every render since this tree is disconnected from
      // Discord's own React tree; mounting eagerly meant that warning fired
      // continuously in the background (the window-preview poll re-renders
      // every 4s) even while the popout was never opened.
      if (!this.reactRoot && this.content) {
        this.reactRoot = (BdApi.ReactDOM as any).createRoot(this.content);
        this.reactRoot!.render(BdApi.React.createElement(StreamQualitySection));
      }

      const savedPopoutPosition = BdApi.Data.load(
        getMeta().name,
        POPOUT_POSITION_DATA_KEY
      ) as Position | undefined;

      if (savedPopoutPosition) {
        const clamped = clampToViewport(savedPopoutPosition, {
          width: POPOUT_WIDTH,
          height: this.popout.offsetHeight || 400,
        });
        this.popout.style.transform = '';
        this.popout.style.top = `${clamped.top}px`;
        this.popout.style.left = `${clamped.left}px`;
      } else {
        this.popout.style.transform = 'translate(-50%, -50%)';
        this.popout.style.top = '50%';
        this.popout.style.left = '50%';
      }

      this.popout.style.display = 'block';
    } else {
      this.hidePopout();
    }
  }

  private static hidePopout(): void {
    if (this.popout) this.popout.style.display = 'none';
  }

  public static unmount(): void {
    if (this.outsideClickHandler) {
      document.removeEventListener('mousedown', this.outsideClickHandler);
      this.outsideClickHandler = undefined;
    }

    this.reactRoot?.unmount();
    this.reactRoot = undefined;

    this.button?.remove();
    this.button = undefined;
    this.popout?.remove();
    this.popout = undefined;
    this.content = undefined;

    // Defensive: clean up stray leftovers from an earlier session/reload.
    document.getElementById(BUTTON_ID)?.remove();
    document.getElementById(POPOUT_ID)?.remove();
  }
}
