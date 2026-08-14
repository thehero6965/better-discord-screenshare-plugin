export interface Meta {
  name: string;
  version?: string;
  [key: string]: unknown;
}

let meta: Meta;

/**
 * Returns the plugin meta.
 *
 * Throws when accessed before the plugin was initialized.
 */
export const getMeta = (): Meta => {
  if (meta) {
    return meta;
  } else {
    throw Error('Accessing meta before initialization');
  }
};

/** Updates the plugin meta. */
export const setMeta = (newMeta: Meta): void => {
  meta = newMeta;
};
