import OSS from 'ali-oss';

let client

export default {
  methods: {
    getClient() {
      return new Promise((resolve, reject) => {
        if (client) {return resolve(client)}
        const requestUrl = `/aliyun/oss/get/sts`;
        this.$http.get(requestUrl).then(res => {
          if ( res.code !== 0) {
            reject(res.msg)
            return
          }
          client = new OSS({
            region: 'oss-cn-shenzhen',
            accessKeyId: res.data.accessKeyId,
            accessKeySecret: res.data.accessKeySecret,
            stsToken: res.data.securityToken,
            bucket: 'kmjs-mxh',
            secure: true
          });
          resolve(client)
        }).catch(err => {
          reject(err)
        })
      })
    },
    getImgName() {
      return '1' +  Math.random().toString().substr(2) + '.png'
    }
  }
}