class TSXSAppNative { // 摊上小市app
  constructor() {
    window.WVJBCallbacks = [() => {}];
    const WVJBIframe = document.createElement('iframe'); // 创建一个 iframe 元素
    WVJBIframe.style.display = 'none'; // 不显示
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'; // 设置 iframe 的 src 属性
    document.documentElement.appendChild(WVJBIframe); // 把 iframe 添加到当前文导航上。
    setTimeout(() => { document.documentElement.removeChild(WVJBIframe) }, 0)
  }

  // eslint-disable-next-line no-underscore-dangle
  static __call(method = '', params = {}, timeout = 2000) { // 请求分发
    return new Promise((resolve, reject) => { // eslint-disable-line
      if (timeout) {
        setTimeout(() => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject(`Timeout to call native method ${method}`);
        }, timeout);
      }
      console.log('call tsxs', JSON.stringify({ method, params }))
      window.WebViewJavascriptBridge.callHandler(method, params, (data) => {
        console.log('naivecall', data)
        data && resolve(JSON.parse(data))
      })
    });
  }

  getFoodDetail(data = {}) {
    return this.constructor.__call('foodDetail', data);
  }

  getUserInfo(data = {}) {
    return this.constructor.__call('getUserInfo', data);
  }
}
export default TSXSAppNative
