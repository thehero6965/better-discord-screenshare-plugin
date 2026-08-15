import { Patcher } from 'dium';
import { StreamQualitySection } from '../components';

interface RawModule {
  id: number;
  loaded: boolean;
  exports: Record<string, unknown>;
}

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

    // waitForModule (with searchExports) resolves - the module and its
    // matching export genuinely exist and are already loaded. But
    // getWithKey, called right after with the exact same filter, still
    // found nothing. Reading BD's source (webpack/utilities.ts) shows why:
    // getWithKey does `Object.values(exports).some(filter)` in one shot to
    // find the module, and BD wraps every filter in a try/catch that
    // treats a thrown exception as "no match" - so if this module has even
    // one export that throws on access (common with circular ESM interop
    // in Discord's bundle), Object.values() throws while evaluating it and
    // the *entire* module silently fails to match. searchExports's actual
    // per-key loop (used successfully by waitForModule) doesn't have this
    // problem, since it tests one export at a time and can skip a bad one
    // without losing the rest.
    //
    // So: get the raw module via the same searchExports path that already
    // works, then find the specific key ourselves, one at a time, with our
    // own try/catch per key instead of one that evaluates everything at
    // once.
    const rawModule = await BdApi.Webpack.waitForModule<RawModule>(filter, {
      searchExports: true,
      raw: true,
    });
    if (this.stopped) return;

    if (!rawModule?.exports) {
      console.error(
        '[BetterScreenshare debug] manage-streams: waitForModule (raw) found nothing'
      );
      return;
    }

    let menuKey: string | undefined;
    for (const key of Object.keys(rawModule.exports)) {
      try {
        if (filter(rawModule.exports[key] as any)) {
          menuKey = key;
          break;
        }
      } catch {
        // Skip exports that throw on access instead of failing the whole
        // search, same as BD's own internal per-key matching does.
      }
    }

    if (!menuKey) {
      console.error(
        '[BetterScreenshare debug] manage-streams: module found but no key in it matched',
        rawModule
      );
      return;
    }

    console.log(
      '[BetterScreenshare debug] manage-streams module/key found:',
      rawModule,
      menuKey
    );

    const unpatchMenu = Patcher.after(
      rawModule.exports,
      menuKey,
      (data) => {
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
      }
    );

    this.unpatchFunctions.push(unpatchMenu);
  }

  public static unpatch(): void {
    this.stopped = true;
    this.unpatchFunctions.forEach((fn) => fn());
    this.unpatchFunctions = [];
  }
}
