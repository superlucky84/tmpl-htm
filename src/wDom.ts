import {
  TmplDom,
  TagFunction,
  FragmentFunction,
  Props,
  MiddleStateTmplDomChildren,
  MiddleStateTmplDom,
} from '@/types';

import { wDomToDom } from '@/render';
import {
  checkFragmentFunction,
  checkCustemComponentFunction,
} from '@/utils/predicator';

export const Fragment = (_props: Props, ...children: TmplDom[]) => ({
  type: 'fragment',
  children,
});

let init = false;

export const h = (
  tag: TagFunction | FragmentFunction | string,
  props: Props,
  ...children: MiddleStateTmplDomChildren
) => {
  if (checkCustemComponentFunction(tag) && !init) {
    init = true;
    const dom = wDomToDom(
      makeNode(tag, props || {}, remakeChildren(children)) as TmplDom
    );
    init = false;
    return dom;
  }

  return makeNode(tag, props || {}, remakeChildren(children)) as TmplDom;
};

const makeNode = (
  tag: TagFunction | FragmentFunction | string,
  props: Props,
  children: TmplDom[]
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

const remakeChildren = (children: MiddleStateTmplDomChildren): TmplDom[] =>
  children.map((item: MiddleStateTmplDom) => makeChildrenItem(item));

const makeChildrenItem = (item: MiddleStateTmplDom): TmplDom => {
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
