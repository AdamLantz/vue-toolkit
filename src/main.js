import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import App from './App.vue';
import store from './store';
import Birthdays from './components/routes/Birthdays';
import Groceries from './components/routes/Groceries';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.productionTip = false;

const routes = [
  { path: '/birthdays', component: Birthdays },
  { path: '/groceries', component: Groceries }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
