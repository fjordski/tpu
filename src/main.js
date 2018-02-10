// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select } from 'element-ui';
import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase';
import App from './App';

import router from './router';
import store from './user';

Vue.config.productionTip = false;
Vue.use(VueFire);
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
