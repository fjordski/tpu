import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import VueResource from 'vue-resource';
import FrontPage from '@/components/FrontPage';
import About from '@/components/About';
import Signup from '@/components/SignUp';
import Roster from '@/components/Roster';
import Login from '@/components/Login';
import Profile from '@/components/Profile';
import Schedule from '@/components/Schedule';

Vue.use(Router);
Vue.use(VueResource);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'FrontPage',
      component: FrontPage,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/roster',
      name: 'Roster',
      component: Roster,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: Signup,
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next();
  else next();
});

export default router;
