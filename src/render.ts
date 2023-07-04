import { TmplDom, Props } from '@/types';
import {
  checkStyleData,
  checkRefData,
  checkExisty,
  checkOptionElement,
  checkTextareaElement,
  checkCheckableElement,
  checkVirtualType,
} from '@/utils/predicator';

import { xmlnsRef, getAttrKey, entries, keys } from '@/utils';

const updateProps = (
  props?: Props,
  element?: HTMLElement | Element | DocumentFragment | Text,
  oldProps?: Props
) => {
  const originalProps = { ...oldProps };

  entries(props || {}).forEach(([dataKey, dataValue]: [string, unknown]) => {
    let chkRemoveProp = true;

    if (dataKey === 'innerHTML' && typeof dataValue === 'string') {
      (element as HTMLElement).innerHTML = dataValue;
    } else if (checkStyleData(dataKey, dataValue)) {
      updateStyle(
        dataValue,
        checkStyleData(dataKey, originalProps.style) ? originalProps.style : {},
        element
      );
    } else if (checkRefData(dataKey, dataValue)) {
      dataValue.value = element;
    } else if (checkCheckableElement(element) && dataKey === 'checked') {
      (element as HTMLInputElement).checked = !!dataValue;
    } else if (checkTextareaElement(element) && dataKey === 'value') {
      (element as HTMLInputElement).value = dataValue as string;
    } else if (checkOptionElement(element) && dataKey === 'selected') {
      (element as HTMLOptionElement).selected = !!dataValue;
    } else if (dataKey) {
      [chkRemoveProp, dataValue] = makeAttrDataValue(dataValue);

      if (chkRemoveProp) {
        if (xmlnsRef.value && dataKey !== 'xmlns') {
          (element as HTMLElement).setAttributeNS(
            null,
            getAttrKey(dataKey),
            <string>dataValue
          );
        } else {
          (element as HTMLElement).setAttribute(
            getAttrKey(dataKey),
            <string>dataValue
          );
        }
      }
    }

    if (chkRemoveProp) {
      delete originalProps[dataKey];
    }
  });

  keys(originalProps).forEach(dataKey =>
    (element as HTMLElement).removeAttribute(dataKey)
  );
};

const makeAttrDataValue = (dataValue: unknown): [boolean, string] => {
  let allowSetAttr = true;
  if (typeof dataValue === 'boolean') {
    if (!dataValue) {
      allowSetAttr = false;
    }

    dataValue = '';
  }

  return [allowSetAttr, String(dataValue)];
};

export const wDomToDom = (wDom: TmplDom) => {
  let element;
  const { type, tag, text, props, children = [] } = wDom;
  const isVirtualType = checkVirtualType(type);

  if (tag === 'svg') {
    xmlnsRef.value = String(props?.xmlns);
  }

  if (isVirtualType) {
    element = new DocumentFragment();
  } else if (type === 'element' && tag) {
    element = xmlnsRef.value
      ? document.createElementNS(xmlnsRef.value, tag)
      : document.createElement(tag);
  } else if (type === 'text' && checkExisty(text)) {
    element = document.createTextNode(String(text));
  } else {
    element = document.createElement('e');
  }

  wDomChildrenToDom(children, element);
  updateProps(props, element);

  wDom.el = element as HTMLElement;

  if (tag === 'svg') {
    xmlnsRef.value = '';
  }

  return element;
};

const wDomChildrenToDom = (
  children: TmplDom[],
  parentElement?: HTMLElement | Element | DocumentFragment | Text
) => {
  const elementChildren = children.reduce(
    (acc: DocumentFragment, childItem: TmplDom) => {
      if (childItem.type) {
        acc.appendChild(wDomToDom(childItem));
      }

      return acc;
    },
    new DocumentFragment()
  );

  if (parentElement && elementChildren.hasChildNodes()) {
    parentElement.appendChild(elementChildren);
  }
};

const updateStyle = (
  style: Record<string, string>,
  oldStyle: Record<string, string>,
  element?: HTMLElement | Element | DocumentFragment | Text
) => {
  const originalStyle = { ...oldStyle };
  const elementStyle = (element as HTMLElement)?.style;

  if (elementStyle) {
    entries(style).forEach(([styleKey, dataValue]) => {
      (elementStyle as any)[styleKey] = dataValue;
      delete originalStyle[styleKey];
    });

    entries(originalStyle).forEach(
      ([styleKey]) => ((elementStyle as any)[styleKey] = '')
    );
  }
};
