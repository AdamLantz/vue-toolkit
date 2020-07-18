import Vue from 'vue';
import mockData from '../../../mock_data/birthdays';

export const mutations = {
    INIT_SUMMARY: "INIT_SUMMARY",
    START_LOAD_DETAILS: "START_LOAD_DETAILS",
    FAIL_LOAD_DETAILS: "FAIL_LOAD_DETAILS",
    INIT_DETAILS: "INIT_DETAILS",
};

export const actions = {
    FETCH_SUMMARY: "FETCH_SUMMARY",
    FETCH_DETAILS: "FETCH_DETAILS"
};

export const getters = {
    getBirthdaySummary: "getBirthdaySummary",
    getBirthdayDetails: "getBirthdayDetails"
};

const birthdays = {
    state: {
        people: [],
        peopleInitialized: false,
        details: {}
    },
    getters: {
        [getters.getBirthdaySummary]: state => state.people,
        [getters.getBirthdayDetails]: state => id => state.details[id],
    },
    mutations: {
        [mutations.INIT_SUMMARY](state, people) {
            state.people = people;
            state.peopleInitialized = true;
        },
        [mutations.START_LOAD_DETAILS](state, id) {
            Vue.set(state.details, id, { loaded: false });
        },
        [mutations.FAIL_LOAD_DETAILS](state, id) {
            Vue.set(state.details, id, { loaded: true, error: true });
        },
        [mutations.INIT_DETAILS](state, person) {
            Vue.set(state.details, person.id, { ...person, loaded: true, error: false });
        },
    },
    actions: {
        [actions.FETCH_SUMMARY](context) {
            setTimeout(() => {
                context.commit(mutations.INIT_SUMMARY, mockData.people)
            }, 1000)
        },
        [actions.FETCH_DETAILS](context, id) {
            if(context.state.details[id]) return;
            context.commit(mutations.START_LOAD_DETAILS, id);
            setTimeout(() => {
                if (mockData.details[id]) {
                    context.commit(mutations.INIT_DETAILS, mockData.details[id]);
                } else {
                    context.commit(mutations.FAIL_LOAD_DETAILS, id);
                }
            }, 2000)
        },
    },
}

export default birthdays;
