import Vue from 'vue';
import * as App from '@/common/utils';
import '@/common/libs';
import '@/common/styles/index.scss';
import mixins from '@/common/mixins';
import filters from '@/common/filters';
import directives from '@/common/directives';
import native from '@/common/utils/native'

const { NODE_ENV } = process.env;

if (NODE_ENV !== 'production') {
  // eslint-disable-next-line no-unused-expressions
  document.body && document.body.setAttribute('class', 'select-text');
}

// filters
for (const k in filters) {
  Vue.filter(k, filters[k]);
}

// mixin
for (const k in mixins) {
  Vue.mixin(mixins[k]);
}

// directive
for (const k in directives) {
  Vue.directive(k, directives[k]);
}

window.App = App;
Vue.prototype.$app = App;
Vue.prototype.$native = native;

window.App.inWechat && window.App.wxShare(); // 初次进入页面必须设置分享，要不然后续ios无法设置成功

// ios11.3以上 下收起键盘页面未回弹处理
if (window.App.inIOS) {
  const inputChangeConf = {
    INPUT: ['tel', 'number', 'text'],
    TEXTAREA: ['textarea']
  }
  // eslint-disable-next-line consistent-return
  window.addEventListener('focusout', (event) => {
    const { nodeName, type } = event.target
    if (!inputChangeConf[nodeName]) return false;
    if (!inputChangeConf[nodeName].includes(type)) return false;
    window.App.resetScroll()
  }, false)
}
