/**
 * sessionStorage简单封装
 */
export function setItem(k, v) {
  return window.sessionStorage.setItem(k, typeof v === 'object' ? JSON.stringify(v) : v);
}
export function getItem(k) {
  return window.sessionStorage.getItem(k);
}
export function getItemObject(k) {
  let v = window.sessionStorage.getItem(k);
  try {
    v = JSON.parse(v);
  } catch (e) {
    v = null;
  }
  return v;
}
export function removeItem(k) {
  return window.sessionStorage.removeItem(k);
}
