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

const initialGroceryItems = [
  { id: 0, name: "avocado", checked: false },
  { id: 1, name: "tomato", checked: false },
  { id: 2, name: "grapes", checked: false },
  { id: 3, name: "milk", checked: false },
  { id: 4, name: "cheese", checked: false },
  { id: 5, name: "bread", checked: false },
]

const store = new Vuex.Store({
  state: {
    count: 0,
    groceryItems: [],
  },
  getters: {
    checkedGroceryItems: state => state.groceryItems.filter(g => g.checked),
    uncheckedGroceryItems: state => state.groceryItems.filter(g => !g.checked)
  },
  mutations: {
    initializeGroceryItems(state, items) {
      state.groceryItems = items;
    },
    addGroceryItem(state, name) {
      if (!name) return;
      state.groceryItems.push({ id: state.groceryItems.length, name, checked: false });
    },
    toggleGroceryItem(state, item) {
      const targetItem = state.groceryItems.find(i => i.id === item.id);
      targetItem.checked = !targetItem.checked;
    },
    increment(state) {
      state.count++
    }
  },
  actions: {
    fetchGroceryItems(context) {
      setTimeout(() => {
        context.commit('initializeGroceryItems', initialGroceryItems)
      }, 1000)

    },
  },
})

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
