import { h, Fragment } from '@/wDom';
import htm from 'htm';
export { ref } from '@/utils';
export {
  append,
  appendAll,
  prepend,
  prependAll,
  replace,
  replaceAll,
  insertBefore,
  insertBeforeAll,
} from '@/utils/helper';

const tmplTag = htm.bind(h);

export type { TmplDom, Props } from '@/types';

export { h, Fragment, tmplTag, htm };

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [name: string]: any;
    }
  }
}
