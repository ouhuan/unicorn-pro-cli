/* eslint-disable */
import axios from 'axios'
import wx from 'weixin-js-sdk'

/**
 * 微信网页jssdk分享配置（二次分享）
 * 注意：
 * link为当前地址，不能改。
 * 首次进入的页面必须分享设置，不然后续的页面在iOS无法设置成功
 * 测试环境可使用代理方式使用android进行测试
 * @param {*} obj
 */
export function wxShare(obj = {}) {
  const action = () => {
    obj = Object.assign({}, {
      title: 'title',
      desc: 'desc',
      imgUrl: 'https://www.baidu.com/favicon.ico',
      shareUrl: window.location.href,
      link: window.location.href
    }, obj)
    let wxReady = false
    let wxConfigParam = {
      debug: false,
      jsApiList: ['updateAppMessageShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
    }
    return axios({
      url: `api-url`,
      method: 'get'
    }).then(function(res) {
      if (res.status === 200 && res.data) {
        return res.data
      } else {
        return Promise.reject()
      }
    }).then(function (res) {
      if (res.code === 0) {
        wxConfigParam.timestamp = res.data.timestamp
        wxConfigParam.nonceStr = res.data.nonceStr
        wxConfigParam.signature = res.data.signature
        wx.config(wxConfigParam)
        if (wx && !wxReady) {
          wx.ready(function () {
            let commonShareData = {
              title: obj.title, // 分享标题
              link: obj.shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              desc: obj.desc, // 分享描述
              imgUrl: obj.imgUrl, // 分享图标
              success: function () {
                wxReady = true
                obj.cb && obj.cb()
              }
            }
            wx.updateAppMessageShareData(commonShareData) // “分享给朋友”
            wx.onMenuShareTimeline(commonShareData) //  “分享到朋友圈”
            wx.onMenuShareAppMessage(commonShareData) // “分享给朋友”
            wx.onMenuShareWeibo(commonShareData) // “分享到腾讯微博”
            wx.onMenuShareQQ(commonShareData) // “分享到QQ”
            wx.onMenuShareQZone(commonShareData) // “分享到QQ空间”
          })
        }
      }
    }).catch(e => {
      // throw e;
    })
  }

  if (typeof window.WeixinJSBridge === 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', action, false);
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', action);
      document.attachEvent('onWeixinJSBridgeReady', action);
    }
  } else {
    action();
  }
}
