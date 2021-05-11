import * as env from '@/common/utils/env';

export default {
  data() {
    return {
      inIOS: env.inIOS,
      inAndroid: env.inAndroid,
      inIphoneX: env.inIphoneX,
      inWechat: env.inWechat,
      inTSXSApp: env.inTSXSApp
    };
  },
};
