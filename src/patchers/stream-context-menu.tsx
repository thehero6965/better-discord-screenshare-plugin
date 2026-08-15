import { Patcher } from 'dium';
import { StreamQualitySection } from '../components';

export class StreamContextMenu {
  private static unpatchFunctions: (() => void)[] = [];
  private static stopped = false;

  public static async patch(): Promise<void> {
    this.unpatch();
    this.stopped = false;

    // BdApi.ContextMenu.patch('manage-streams', ...) registers without
    // error but its callback never fires - confirmed live, even patched
    // directly from the console with no plugin code involved. This menu
    // appears to bypass whatever BD's ContextMenu API hooks into, so
    // patch the component that builds it directly instead.
    const filter = BdApi.Webpack.Filters.bySource('manage-streams');

    // The module that builds this menu is lazily loaded (only required
    // the first time the menu is actually opened), so a plain getWithKey
    // at plugin start finds nothing - wait for it to load first. Resolves
    // immediately if it's already loaded.
    await BdApi.Webpack.waitForModule(filter, { searchExports: true });
    if (this.stopped) return;

    // getWithKey does its own manual export search internally (find the
    // module, then find which of its keys matches) - passing
    // searchExports here makes the underlying module lookup apply our
    // filter per-entry too, breaking that internal logic. Confirmed via
    // BD's own source: this must be called without it.
    const [menuModule, menuKey] = BdApi.Webpack.getWithKey(filter);

    if (!menuModule || !menuKey) {
      console.error(
        '[BetterScreenshare debug] manage-streams module loaded but getWithKey still found nothing'
      );
      return;
    }

    console.log(
      '[BetterScreenshare debug] manage-streams module/key found:',
      menuModule,
      menuKey
    );

    const unpatchMenu = Patcher.after(menuModule, menuKey, (data) => {
      console.log(
        '[BetterScreenshare debug] manage-streams patched fn result =',
        data.result
      );

      const children = (data.result as any)?.props?.children;
      console.log(
        '[BetterScreenshare debug] result.props.children =',
        children,
        'isArray =',
        Array.isArray(children)
      );

      if (!Array.isArray(children)) return;

      children.push(
        BdApi.ContextMenu.buildItem({
          type: 'submenu',
          label: 'BetterScreenshare',
          items: [
            {
              type: 'custom',
              render: () => <StreamQualitySection />,
            },
          ],
        })
      );
    });

    this.unpatchFunctions.push(unpatchMenu);
  }

  public static unpatch(): void {
    this.stopped = true;
    this.unpatchFunctions.forEach((fn) => fn());
    this.unpatchFunctions = [];
  }
}
