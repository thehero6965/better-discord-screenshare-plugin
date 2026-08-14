export class StreamContextMenu {
  private static unpatchFunctions: (() => void)[] = [];

  public static patch(): void {
    this.unpatch();

    // TEMPORARY: diagnostic only. The previous attempt to push a built
    // item onto tree.props.children silently no-op'd (children wasn't a
    // plain array), so log the actual shape before guessing again.
    const unpatchMenu = BdApi.ContextMenu.patch('manage-streams', (tree) => {
      console.log('[BetterScreenshare debug] manage-streams tree =', tree);
      console.log(
        '[BetterScreenshare debug] tree.props.children =',
        tree?.props?.children,
        'isArray =',
        Array.isArray(tree?.props?.children)
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
