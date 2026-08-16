import * as Filters from './filters';
import type { Filter } from './filters';

export interface FindOptions {
  /** Whether to resolve the matching export or return the whole exports object. */
  resolve?: boolean;

  /** Whether to check all export entries. */
  entries?: boolean;
}

/** Finds a module using a set of filter functions. */
export const find = (filter: Filter, { resolve = true, entries = false }: FindOptions = {}): any =>
  BdApi.Webpack.getModule(filter, {
    defaultExport: resolve,
    searchExports: entries,
  });

/** Finds a module using property names of its export. */
export const byKeys = (keys: string[], options?: FindOptions): any =>
  find(Filters.byKeys(...keys), options);

/** Finds a module using source code contents of its export entries. */
export const bySource = (contents: Filters.TypeOrPredicate<string>[], options?: FindOptions): any =>
  find(Filters.bySource(...contents), options);
