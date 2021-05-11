
import Vue from 'vue';
import getClient from './getUploadInfo';

let uploadImg;

const vueUploadImg = {
  name: 'vueUploadImg',
  mixins: [getClient],
  data() {
    return {};
  },
  mounted() {
    this.body = document.querySelector('body');
  },
  methods: {
    uoLoad() {
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
        this.$refs.inputRef.click()
      })
    },
    change() {
      this.getClient().then(client => {
        const { inputRef } = this.$refs
        let filesList = Array.from(inputRef.files);
        (filesList.length > this.maxlength) && (filesList.length = this.maxlength)
        const methodsList = filesList.map(file => {
          return () => { return client.multipartUpload(this.getImgName(), file) }
        })
        Promise.all(methodsList.map(method => method())).then(res => {
          inputRef.value = ''
          const imgList = res.map(item => {
            return item.res.requestUrls[0]
          })
          this.resolve(imgList)
        }).catch(err => this.reject(err))
      }).catch(err => this.reject(err))
    }
  },
  props: {
    maxlength: { // 最大可选择几个文件
      type: Number,
      default: 1
    },
    accept: { // 上传的文件类型
      type: String,
      default: 'image/*'
    },
  },
  render(h) {
    return h('input', {
      on: { change: this.change },
      ref: 'inputRef',
      attrs: { 
        maxlength: '',
        multiple: this.maxlength > 1,
        accept: this.accept,
        type : 'file' 
      }
    });
  },
};
function createInstance() {
  uploadImg = new (Vue.extend(vueUploadImg))({
    el: document.createElement('div'),
  });
  return uploadImg;
}

function UploadImg(options) {
  Object.assign(uploadImg, options);
  return uploadImg.uoLoad();
}

UploadImg.install = () => {
  Vue.component('uploadImg', createInstance());
};

Vue.prototype.$uploadImg = UploadImg;

export default UploadImg;
