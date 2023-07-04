export const getAttrKey = (keyName: string) =>
  keyName === 'className' ? 'class' : keyName;

export const xmlnsRef: { value: string } = { value: '' };
export const entries = Object.entries;
export const keys = Object.keys;
export const assign = Object.assign;
export const ref = <T>(initValue: T) => ({ value: initValue });
