import { Patcher } from 'dium';
import { StreamQualitySection } from '../components';

export class StreamContextMenu {
  private static unpatchFunctions: (() => void)[] = [];

  public static patch(): void {
    this.unpatch();

    // BdApi.ContextMenu.patch('manage-streams', ...) registers without
    // error but its callback never fires - confirmed live, even patched
    // directly from the console with no plugin code involved. This menu
    // appears to bypass whatever BD's ContextMenu API hooks into, so
    // patch the component that builds it directly instead.
    const [menuModule, menuKey] = BdApi.Webpack.getWithKey(
      BdApi.Webpack.Filters.bySource('manage-streams'),
      { searchExports: true }
    );

    if (!menuModule || !menuKey) {
      console.error(
        '[BetterScreenshare debug] Could not find a module matching "manage-streams" in its source'
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
    this.unpatchFunctions.forEach((fn) => fn());
    this.unpatchFunctions = [];
  }
}
