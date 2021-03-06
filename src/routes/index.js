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
      path: '/search/:title',
      component: () => import('@/views/PostSearchPage.vue'),
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
      path: '/category/activity',
      component: () => import('@/views/ActivityPage.vue'),
    },
    {
      path: '/category/study',
      component: () => import('@/views/StudyPage.vue'),
    },
    {
      path: '/category/life',
      component: () => import('@/views/LifePage.vue'),
    },
    {
      path: '/category/issue',
      component: () => import('@/views/IssuePage.vue'),
    },
    {
      path: '/category/Today',
      component: () => import('@/views/TodayPage.vue'),
    },
    {
      path: '/category/:categoryName/:categoryId',
      component: () => import('@/views/CategorySubPage.vue'),
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostPage.vue'),
    },
    {
      path: '/post/:categoryId/add',
      component: () => import('@/views/PostAddPage.vue'),
      meta: {
        auth: true,
      },
    },
    {
      path: '/post/edit/:id',
      component: () => import('@/views/PostEditPage.vue'),
      meta: {
        auth: true,
      },
    },
    {
      path: '/user/category/add',
      component: () => import('@/views/UserCategoryAddPage.vue'),
      meta: {
        auth: true,
      },
    },
    {
      path: '/user-info',
      component: () => import('@/views/UserInfoPage.vue'),
      meta: {
        auth: true,
      },
    },
    {
      path: '/introdution',
      component: () => import('@/views/Introdution.vue'),
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
