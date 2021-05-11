import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((route) => {
  const { meta = {}, path } = route;
  if (meta.title) {
    document.title = route.meta.title;
  }
});

export default router;
