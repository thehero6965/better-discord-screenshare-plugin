import { StreamQualitySection } from '../components';

export class StreamContextMenu {
  private static unpatchFunctions: (() => void)[] = [];

  public static patch(): void {
    this.unpatch();

    const unpatchMenu = BdApi.ContextMenu.patch('manage-streams', (tree) => {
      const children = tree?.props?.children;
      if (!Array.isArray(children)) return tree;

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

      return tree;
    });

    this.unpatchFunctions.push(unpatchMenu);
  }

  public static unpatch(): void {
    this.unpatchFunctions.forEach((fn) => fn());
    this.unpatchFunctions = [];
  }
}
