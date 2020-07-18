import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import App from './App.vue'
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

const store = new Vuex.Store({
  state: {
    count: 0,
    groceryItems: [{ id: 0, name: "avocado", checked: false }],
  },
  getters: {
    checkedGroceryItems: state => state.groceryItems.filter(g => g.checked),
    uncheckedGroceryItems: state => state.groceryItems.filter(g => !g.checked)
  },
  mutations: {
    addGroceryItem(state, name) {
      if(!name) return;
      state.groceryItems.push({ id: state.groceryItems.length, name, checked: false });
    },
    toggleGroceryItem(state, item) {
      const targetItem = state.groceryItems.find(i => i.id === item.id);
      targetItem.checked = !targetItem.checked;
    },
    increment(state) {
      state.count++
    }
  }
})

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
