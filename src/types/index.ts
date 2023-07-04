export type UseDataStoreValue = { [key: string | symbol]: unknown };

export type Props = { [key: string]: unknown };

export type TagFunction = (
  prop: Props,
  children: TmplDom[]
) => (prop: Props, children: TmplDom[]) => (props: Props) => TmplDom;

export type Component<T> = (props: T, childen: TmplDom[]) => (props: T) => TmplDom;

export type TagFunctionResolver = {
  tagName: string;
  ctor: Function;
  props: Props;
  children: TmplDom[];
  resolve: (compKey?: Props) => TmplDom;
};

export type FragmentFunction = (props: Props, children: TmplDom[]) => TmplDom;

export type NodePointer = { value: TmplDom | undefined };

export type MiddleStateTmplDom =
  | TmplDom
  | number
  | string
  | false
  | null
  | MiddleStateTmplDomChildren;

export type MiddleStateTmplDomChildren = MiddleStateTmplDom[];

export interface TmplDom {
  type: string | null;
  tag?: string;
  props?: Props;
  tagName?: string;
  ctor?: Function;
  children?: TmplDom[];
  oldChildren?: TmplDom[];
  text?: string | number;
  compKey?: Props;
  compProps?: Props;
  compChild?: TmplDom[];
  wrapElement?: HTMLElement;
  afterElement?: HTMLElement;
  el?: HTMLElement | DocumentFragment | Text;
}

declare namespace JSX {
  interface IntrinsicElements {
    [name: string]: any;
  }
}
