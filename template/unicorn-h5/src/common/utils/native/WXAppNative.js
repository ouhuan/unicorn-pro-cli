/* eslint-disable class-methods-use-this */
import wx from 'weixin-js-sdk'

class WXAppNative { // 微信小程序
  constructor() {
    console.log(1)
  }

  goFoodDetail(data = {}) {
    const url = data.itemType === 'GOODS' ? `/subpacksShop/product/product-detail/index?goodsId=${data.id}` : `/subpacks/food-pages/food-detail/index?foodId=${data.id}`
    wx.miniProgram.navigateTo({ url })
  }

  postShareInfo(data = {}) {
    wx.miniProgram.postMessage({
      data: {
        title: data.title,
        desc: data.desc,
        path: data.path,
        imageUrl: data.imageUrl
      },
    });
  }
}

export default WXAppNative
