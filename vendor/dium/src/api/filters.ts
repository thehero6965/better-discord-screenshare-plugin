export type Filter = (data: any) => boolean;

export type TypeOrPredicate<T> = T | ((data: T) => boolean);

/** Creates a filter searching by export property names. */
export const byKeys = (...keys: string[]): Filter => {
  return (target) => target instanceof Object && keys.every((key) => key in target);
};

/**
 * Creates a filter searching by function source fragments.
 *
 * Also searches a potential `render()` function on the prototype in order to handle React class components.
 * For ForwardRef or Memo exotic components the wrapped component is checked.
 */
export const bySource = (...fragments: TypeOrPredicate<string>[]): Filter => {
  return (target) => {
    // handle exotic components
    while (target instanceof Object && '$$typeof' in target) {
      target = target.render ?? target.type;
    }

    if (target instanceof Function) {
      const source = target.toString();
      const renderSource = (target.prototype as React.Component)?.render?.toString();

      return fragments.every((fragment) =>
        typeof fragment === 'string'
          ? source.includes(fragment) || renderSource?.includes(fragment)
          : fragment(source) || (renderSource && fragment(renderSource))
      );
    } else {
      return false;
    }
  };
};
