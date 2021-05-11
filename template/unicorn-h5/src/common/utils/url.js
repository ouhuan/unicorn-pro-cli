/* eslint-disable no-unused-expressions */
import urliteExtra from 'urlite/extra';

/**
 * 获取序列字符串
 * @param {*} obj
 */
export function params2qs(obj) {
  const s = [];
  const add = (key, value) => {
    s.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  };
  // eslint-disable-next-line
  for (let i in obj) {
    obj[i] && add(i, obj[i]);
  }
  return s.join('&');
}

/**
 * 获取地址栏参数对象
 * @param {*} url
 * @param {*} key
 */
export function getUrlParams(key, url = window.location.href) {
  const parsed = urliteExtra.parse(url);
  const o = parsed.search || {};
  for (const k in o) { // eslint-disable-line
    o[k] = window.decodeURIComponent(o[k]);
  }
  return key !== undefined ? o[key] : o;
}

/**
 * 为链接注入query参数
 * @param {String} url 地址
 * @param {Object} obj 对象
 */
export function injectObj2Url(url = window.location.href, obj = {}) {
  const parsed = urliteExtra.parse(url);
  parsed.search = {
    ...parsed.search,
    ...obj,
  };
  parsed.search = `?${params2qs(parsed.search)}`;
  return urliteExtra.format(parsed);
}

/**
 * 获取URL指定某个参数
 */
export function getQueryString(name) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const w = window.location.search.split('?');
  const r = w.length === 2 && w[1] || '';
  let reStr = '';
  const urlArr = [];
  w.length === 2 && w[1].replace('?', '') && w[1].split('&').forEach((v) => {
    const i = v.split('=');
    // eslint-disable-next-line prefer-destructuring
    urlArr[i[0]] = i[1];
  });
  if (name) {
    reStr = r.match(reg) !== null ? r.match(reg)[2] : false;
    return reStr;
  }
  return urlArr;
}

export function getParams() {
  let name = ''; let value = ''; const
    searchObj = {};
  let str = window.location.href; // 取得整个地址栏
  const questionMark = str.indexOf('?');
  const hashMark = str.indexOf('#');
  // eslint-disable-next-line max-len
  str = questionMark > hashMark ? str.substring(questionMark + 1) : str = str.substring(questionMark + 1, hashMark);
  const arr = str.split('&'); // 各个参数放到数组里
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i].indexOf('=');
    if (num > 0) {
      name = arr[i].substring(0, num);
      value = arr[i].substr(num + 1);
      searchObj[name] = value;
    }
  }
  return searchObj;
}

export function transformData(data) {
  let ret = '';
  Object.keys(data).forEach((item) => {
    ret += `${encodeURIComponent(item)}=${encodeURIComponent(data[item])}&`;
  });
  return ret;
}

/**
 * 全路径转换成相对路径
 * @param {String} path
 */
export function tarsfromPath(path) {
  return path ? path.replace(/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?/i, '').split('?')[0] : '';
}
