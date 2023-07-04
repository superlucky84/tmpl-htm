export { h, Fragment } from '@/wDom';
export { ref } from '@/utils';
export {
  append,
  appendAll,
  prepend,
  prependAll,
  replace,
  replaceAll,
  insertBeforeAll,
} from '@/utils/helper';

export type { WDom, TagFunction, FragmentFunction, Props } from '@/types';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [name: string]: any;
    }
  }
}
