import {
  WDom,
  TagFunction,
  FragmentFunction,
  Props,
  MiddleStateWDomChildren,
  MiddleStateWDom,
} from '@/types';

import { wDomToDom } from '@/render';
import {
  checkFragmentFunction,
  checkCustemComponentFunction,
} from '@/utils/predicator';

export const Fragment = (_props: Props, ...children: WDom[]) => ({
  type: 'fragment',
  children,
});

let init = false;

export const h = (
  tag: TagFunction | FragmentFunction | string,
  props: Props,
  ...children: MiddleStateWDomChildren
) => {
  if (checkCustemComponentFunction(tag) && !init) {
    init = true;
    const dom = wDomToDom(
      makeNode(tag, props || {}, remakeChildren(children)) as WDom
    );
    init = false;
    return dom;
  }

  return makeNode(tag, props || {}, remakeChildren(children)) as WDom;
};

const makeNode = (
  tag: TagFunction | FragmentFunction | string,
  props: Props,
  children: WDom[]
) => {
  if (checkFragmentFunction(tag)) {
    return Fragment(props, ...children);
  } else if (checkCustemComponentFunction(tag)) {
    return tag(props, children);
  }

  return {
    type: 'element',
    tag,
    props,
    children,
  };
};

const remakeChildren = (children: MiddleStateWDomChildren): WDom[] =>
  children.map((item: MiddleStateWDom) => makeChildrenItem(item));

const makeChildrenItem = (item: MiddleStateWDom): WDom => {
  if (item === null || item === undefined || item === false) {
    return { type: null };
  } else if (Array.isArray(item)) {
    const children = remakeChildren(item);
    const node = {
      type: 'loop',
      children,
    };

    return node;
  } else if (typeof item === 'string' || typeof item === 'number') {
    return { type: 'text', text: item };
  }

  return item;
};
