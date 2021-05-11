export const inBrowser = typeof window !== 'undefined';
export const UA = inBrowser && window.navigator.userAgent.toLowerCase();
export const inIE = UA && /msie|trident/.test(UA);
export const inIE9 = UA && UA.indexOf('msie 9.0') > 0;
export const inEdge = UA && UA.indexOf('edge/') > 0;
export const inAndroid = (UA && UA.indexOf('android') > 0);
export const inIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
export const inIphoneX = UA && inIOS && (window.screen.height === 812 && window.screen.width === 375);
export const inChrome = UA && /chrome\/\d+/.test(UA) && !inEdge;
export const inWechat = UA && UA.match(/MicroMessenger/i) === 'micromessenger' && UA.indexOf('miniprogram') === -1;
export const inWXApp = inWechat && UA.indexOf('miniprogram') !== -1; // 是否微信小程序环境
export const inTSXSApp = UA && UA.indexOf('tsxs') !== -1; // 是否摊上小市
