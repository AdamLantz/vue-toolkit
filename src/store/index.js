import Vue from 'vue';
import Vuex from 'vuex';
import groceries from './modules/groceries';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        groceries
    }
});

export default store;