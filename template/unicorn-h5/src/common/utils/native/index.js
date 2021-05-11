import * as env from '../env';
import WXAppNative from './WXAppNative'
import WechatNative from './WechatNative'
import TSXSAppNative from './TSXSAppNative'

const { inWechat, inWXApp, inTSXSApp } = env
console.log('{ inWechat, inWXApp, inTSXSApp }', { inWechat, inWXApp, inTSXSApp })
const envMap = [
  { tag: WXAppNative, isEnv: inWXApp },
  { tag: WechatNative, isEnv: inWechat },
  { tag: TSXSAppNative, isEnv: inTSXSApp },
]

console.log('envMap', envMap)
console.log('userAgent', navigator.userAgent)

const currentEnv = envMap.find((item) => item.isEnv) || { tag() {} }
console.log('currentEnv', currentEnv)
// eslint-disable-next-line new-cap
console.log('envMap', new currentEnv.tag())

// eslint-disable-next-line new-cap
export default new currentEnv.tag()
