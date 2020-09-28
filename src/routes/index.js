import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index.js';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'), // 코드 스플릿트
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/category/major',
      component: () => import('@/views/MajorPage.vue'),
    },
    {
      path: '/category/employment',
      component: () => import('@/views/EmploymentPage.vue'),
    },
    {
      path: '/category/:categoryName/:categoryId',
      component: () => import('@/views/CategorySubPage.vue'),
    },
    {
      path: '/post/add',
      component: () => import('@/views/PostAddPage.vue'),
      //   meta: {
      //     auth: true,
      //   },
    },
    {
      path: '/post/edit/:id',
      component: () => import('@/views/PostEditPage.vue'),
      meta: {
        auth: true,
      },
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log('인증이 필요합니다.');
    next('/login');
    return;
  }
  next();
});

export default router;
