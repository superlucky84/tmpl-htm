import { h, Fragment } from '@/wDom';
import { ref } from '@/utils';

export type {
  WDom,
  TagFunction,
  TagFunctionResolver,
  FragmentFunction,
  ComponentSubKey,
  ComponentRef,
  Props,
  MiddleStateWDomChildren,
  MiddleStateWDom,
  NodePointer,
} from '@/types';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [name: string]: any;
    }
  }
}

export { h, Fragment, ref };
