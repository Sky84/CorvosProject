import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './components/HomePage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/contact',
      name: 'contact'
    },
  ],
});
