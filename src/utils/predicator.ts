import { Fragment } from '@/wDom';
import {
  WDom,
  TagFunction,
  TagFunctionResolver,
  FragmentFunction,
} from '@/types';

type WDomParam =
  | string
  | WDom
  | TagFunction
  | TagFunctionResolver
  | FragmentFunction;

/**
 * Predicator
 */

export const checkVirtualType = (type: string | null) =>
  type && ['fragment', 'loop'].includes(type);

export const checkCustemComponentFunction = (
  target: WDomParam
): target is TagFunction | TagFunctionResolver =>
  typeof target === 'function' && !checkFragmentFunction(target);

export const checkFragmentFunction = (
  target: unknown
): target is FragmentFunction =>
  typeof target === 'function' && target === Fragment;

export const checkExisty = (value: unknown) =>
  value !== null && value !== undefined;

export const checkStyleData = (
  dataKey: string,
  dataValue: unknown
): dataValue is Record<string, string> =>
  dataKey === 'style' && typeof dataValue === 'object';

export const checkRefData = (
  dataKey: string,
  dataValue: unknown
): dataValue is {
  value: HTMLElement | Element | DocumentFragment | Text | undefined;
} => dataKey === 'ref' && typeof dataValue === 'object';

export const checkOptionElement = (element: any): element is HTMLElement =>
  element.nodeType === 1 && element.tagName === 'OPTION';

export const checkTextareaElement = (element: any): element is HTMLElement =>
  element.nodeType === 1 && element.tagName === 'TEXTAREA';

export const checkCheckableElement = (element: any): element is HTMLElement =>
  element.nodeType === 1 && ['radio', 'checkbox'].includes(element.type);
