import Vue from 'vue';
import Vuex from 'vuex';
import groceries from './modules/groceries';
import birthdays from './modules/birthdays';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        groceries,
        birthdays,
    }
});

export default store;