import Vue from 'vue';
import '@/common';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/components';

Vue.config.productionTip = false;

window.setTimeout(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
}, 0);
