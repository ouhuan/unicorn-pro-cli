/**
 * 元素描边，用于查看元素布局边界
 */
/* eslint-disable */
var getRandomColor = function () {
  var r = Math.round(Math.random() * 255), g = Math.round(Math.random() * 255), b = Math.round(Math.random() * 255);
  var color = r << 16 | g << 8 | b;
  return "#" + color.toString(16)
}
var setOutline = function(el) {
  el.style.outline = `${getRandomColor()} solid 1px`
}
var setChildren = function(el) {
  Array.prototype.slice.call(el.children || [], 0).forEach((el) => {
    setOutline(el)
    setChildren(el)
  })
}
window.setTimeout(() => {
  setChildren(document.body)
}, 1000)
