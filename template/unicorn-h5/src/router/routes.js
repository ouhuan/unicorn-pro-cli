// This file is auto gererated by build/build-routes.js

export default [
  {
    path: '/',
    name: 'demo',
    redirect: '/demo',
  },
  {
    path: '/demo',
    name: 'Demo',
    meta: {},
    component: () => import('@/views/demo/index'),
  },
  {
    path: '*',
    name: '404',
    meta: { title: '404' },
    component: () => import('@/views/404.vue'),
  },
];
