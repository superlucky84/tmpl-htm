export const appendAll = (
  el: HTMLElement,
  wrap: HTMLElement | HTMLElement[] | NodeListOf<Element>
) => {
  // @ts-ignore
  if (!wrap[Symbol.iterator]) {
    // @ts-ignore
    wrap = [wrap];
  }
  // @ts-ignore
  Array.from(wrap).forEach(item => {
    const cloneNode = el.cloneNode(true);
    item.appendChild(cloneNode);
  });
};

export const append = (el: HTMLElement, wrap: HTMLElement) => {
  wrap.appendChild(el);
};

export const prependAll = (
  el: HTMLElement,
  wrap: HTMLElement | HTMLElement[] | NodeListOf<Element>
) => {
  // @ts-ignore
  if (!wrap[Symbol.iterator]) {
    // @ts-ignore
    wrap = [wrap];
  }
  // @ts-ignore
  Array.from(wrap).forEach(item => {
    const cloneNode = el.cloneNode(true);
    item.insertBefore(cloneNode, item.firstElementChild);
  });
};

export const prepend = (el: HTMLElement, wrap: HTMLElement) => {
  wrap.insertBefore(el, wrap.firstElementChild);
};

export const replaceAll = (
  el: HTMLElement,
  targetEl: HTMLElement | HTMLElement[] | NodeListOf<Element>
) => {
  // @ts-ignore
  if (!targetEl[Symbol.iterator]) {
    // @ts-ignore
    targetEl = [targetEl];
  }
  // @ts-ignore
  Array.from(targetEl).forEach(item => {
    const cloneNode = el.cloneNode(true);
    (item.parentElement as HTMLElement).replaceChild(cloneNode, item);
  });
};

export const replace = (el: HTMLElement, targetEl: HTMLElement) => {
  (targetEl.parentElement as HTMLElement).replaceChild(el, targetEl);
};

export const insertBeforeAll = (
  el: HTMLElement,
  targetEl: HTMLElement | HTMLElement[] | NodeListOf<Element>
) => {
  // @ts-ignore
  if (!targetEl[Symbol.iterator]) {
    // @ts-ignore
    targetEl = [targetEl];
  }
  // @ts-ignore
  Array.from(targetEl).forEach(item => {
    const cloneNode = el.cloneNode(true);
    (item.parentElement as HTMLElement).insertBefore(cloneNode, item);
  });
};

export const insertBefore = (el: HTMLElement, targetEl: HTMLElement) => {
  (targetEl.parentElement as HTMLElement).insertBefore(el, targetEl);
};
