export type UseDataStoreValue = { [key: string | symbol]: unknown };

export type Props = { [key: string]: unknown };

export type TagFunction = (
  prop: Props,
  children: WDom[]
) => (prop: Props, children: WDom[]) => (props: Props) => WDom;

export type Component<T> = (props: T, childen: WDom[]) => (props: T) => WDom;

export type TagFunctionResolver = {
  tagName: string;
  ctor: Function;
  props: Props;
  children: WDom[];
  resolve: (compKey?: Props) => WDom;
};

export type FragmentFunction = (props: Props, children: WDom[]) => WDom;

export type NodePointer = { value: WDom | undefined };

export type MiddleStateWDom =
  | WDom
  | number
  | string
  | false
  | null
  | MiddleStateWDomChildren;

export type MiddleStateWDomChildren = MiddleStateWDom[];

export interface WDom {
  type: string | null;
  tag?: string;
  props?: Props;
  tagName?: string;
  ctor?: Function;
  children?: WDom[];
  oldChildren?: WDom[];
  text?: string | number;
  compKey?: Props;
  compProps?: Props;
  compChild?: WDom[];
  wrapElement?: HTMLElement;
  afterElement?: HTMLElement;
  el?: HTMLElement | DocumentFragment | Text;
}

declare namespace JSX {
  interface IntrinsicElements {
    [name: string]: any;
  }
}
