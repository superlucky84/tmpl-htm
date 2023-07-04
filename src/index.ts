import { h, Fragment } from '@/wDom';
import { ref } from '@/utils';

export type { WDom, TagFunction, FragmentFunction, Props } from '@/types';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [name: string]: any;
    }
  }
}

export { h, Fragment, ref };
