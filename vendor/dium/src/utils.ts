import type { ReactElement, ReactNode } from 'react';

export type Predicate<Arg> = (arg: Arg) => boolean;

export type ReactTree = ReactNode | ReactNode[] | Promise<ReactNode>;

/**
 * Searches a React element tree for the first element matching the predicate.
 *
 * This uses a breadth first search (BFS).
 */
export const queryTree = (node: ReactTree, predicate: Predicate<any>): any | null => {
  const worklist = [node].flat();

  while (worklist.length !== 0) {
    const current = worklist.shift();
    if (BdApi.React.isValidElement(current)) {
      if (predicate(current)) {
        return current;
      }

      const children = (current as ReactElement<any>)?.props?.children;
      if (children) {
        worklist.push(...[children].flat());
      }
    }
  }

  return null;
};
