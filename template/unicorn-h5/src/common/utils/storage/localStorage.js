/**
 * localStorage简单封装
 */
export function setItem(k, v) {
  return window.localStorage.setItem(k, typeof v === 'object' ? JSON.stringify(v) : v);
}
export function getItem(k) {
  return window.localStorage.getItem(k);
}
export function getItemObject(k) {
  let v = window.localStorage.getItem(k);
  try {
    v = JSON.parse(v);
  } catch (e) {
    v = null;
  }
  return v;
}
export function removeItem(k) {
  return window.localStorage.removeItem(k);
}
