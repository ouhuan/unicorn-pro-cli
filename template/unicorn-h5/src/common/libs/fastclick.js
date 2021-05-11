import FastClick from 'fastclick';

// 引入fastclick 做相关处理
// eslint-disable-next-line no-underscore-dangle
const _focus = FastClick.prototype.focus;
FastClick.prototype.focus = function (targetElement) {
  _focus.call(this, targetElement);
  // 修复bug，iOS11.3以上不弹出键盘，这里加上focus
  targetElement.focus();
};

FastClick.attach(document.body);
