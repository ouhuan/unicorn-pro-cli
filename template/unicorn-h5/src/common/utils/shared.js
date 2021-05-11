/**
 * 空执行函数
 * @method noop
 */
export const noop = function noop() {};

/**
 * 是否为数组对象
 */
export function isArray(o) {
  return Object.prototype.toString.apply(o) === '[object Array]';
}

/**
 * 是否为对象
 */
export function isObject(o) {
  return Object.prototype.toString.apply(o) === '[object Object]';
}

/**
 * 是否为字符串
 */
export function isString(o) {
  return Object.prototype.toString.apply(o) === '[object String]';
}

/**
 * 是否为方法
 */
export function isFunction(o) {
  return Object.prototype.toString.apply(o) === '[object Function]';
}

/**
 * 是否为NaN
 */
export function isNaN(o) {
  if (Number.isNaN) {
    return Number.isNaN(o);
  }
  // eslint-disable-next-line no-self-compare
  return o !== o;
}

/**
 * isEmpty
 * @method isEmpty
 * @return {Boolean}
 */
export function isEmpty(value) {
  if (isObject(value)) {
    return Object.getOwnPropertyNames(value).length <= 0;
  }
  // eslint-disable-next-line
  return value === null || value === undefined || value === 'null' || value === 'undefined' || value.toString().trim().length <= 0;
}

/**
 * 将数字或者数字字符串格式化 formatCurrency
 * @param {String | Number} num
 * @return {String} NumberFormatResult
 * */
export function formatCurrency(num) {
  const DIGIT_PATTERN = /(^|\s)\d+(?=\.?\d*($|\s))/g;
  const MILI_PATTERN = /(?=(?!\b)(\d{3})+\.?\b)/g;
  return num && num.toString().replace(DIGIT_PATTERN, (m) => m.replace(MILI_PATTERN, ','));
}

export function emptyReplace(value, placeholder) {
  if (value !== undefined && value !== null) {
    return value;
  } if (placeholder !== undefined && placeholder !== null) {
    return placeholder;
  }
  return '-';
}

export function singleNumber2CH(value) {
  const map = {
    0: '零',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    7: '七',
    8: '八',
    9: '九',
    10: '十',
  };
  return map[value];
}

export function ellipsis(value = '', len = 10) {
  return value.substring(0, 10) + (value.length > len ? '...' : '');
}

/**
 * 千分数处理
 * @param {number} num
 */
export function thousandBitSeparator(num) {
  const DIGIT_PATTERN = /(^|\s)\d+(?=\.?\d*($|\s))/g;
  const MILI_PATTERN = /(?=(?!\b)(\d{3})+\.?\b)/g;
  return num && num.toString().replace(DIGIT_PATTERN, (m) => m.replace(MILI_PATTERN, ','));
}

/**
 * getScrollTop
 * @param {ScrollElement} el
 * return number
 */
export function getScrollTop(el) {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset;
  // iOS scroll bounce cause minus scrollTop
  return Math.max(top, 0);
}

/**
 * setScrollTop
 * @param {ScrollElement} el
 * @param {number} value
 * return void(0)
 */
export function setScrollTop(el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}

/**
 * padZero 前面补充0
 * @param {number | string} num
 * @param {number} targetLength
 * return string
 */
export function padZero(num, targetLength = 2) {
  let str = String(num);
  while (str.length < targetLength) {
    str = `0${str}`;
  }
  return str;
}

/**
 * setRootScrollTop
 * @param {number} value
 */
export function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
}

/**
 * getRootScrollTop
 * return number
 */
export function getRootScrollTop() {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

/**
 * 用于ios11.3软键盘收起后页面未回到原位置
 * resetScroll
 */
export function resetScroll() {
  setRootScrollTop(getRootScrollTop());
}

/**
 * toFixed
 * @param {number | string} val
 * @param {number} len
 */
export function toFixed(val, len = 2) {
  return Number(val).toFixed(len)
}
