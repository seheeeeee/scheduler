import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/homeView.vue'
import AddView from '../views/addView.vue'
import ListView from '../views/listView.vue'
import addCategoryView from '../views/addCategoryView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        //홈 화면을 바로 home 페이지로 리다이렉트
        path: '/',
        redirect: '/home',
      },
      {
        // path: url 이름(주소)
        path: '/home',
        name: 'home',
        // component: url 주소로 갔을 때 표시될 컴포넌트
        component: HomeView,
      },
      {
        path: '/addItem',
        name: 'add',
        component: AddView,
      },
      {
        path: '/list/:category',
        name: 'list',
        component: ListView,
      },
      {
        path: '/addCategory',
        component: addCategoryView,
      }
    ]
  });
