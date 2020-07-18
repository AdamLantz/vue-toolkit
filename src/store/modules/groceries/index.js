import mockData from '../../../mock_data/groceries';

export const mutations = {
    INITIALIZE: "INITIALIZE",
    ADD_ITEM: "ADD_ITEM",
    CHECK_ITEM: "CHECK_ITEM"
};

export const actions = {
    FETCH: "FETCH",
}

export const getters = {
    checkedItems: "checkedItems",
    uncheckedItems: "uncheckedItems",
}

const groceries = {
    state: {
        initialized: false,
        items: [],
    },
    getters: {
        [getters.checkedItems]: state => state.items.filter(g => g.checked),
        [getters.uncheckedItems]: state => state.items.filter(g => !g.checked)
    },
    mutations: {
        [mutations.INITIALIZE](state, items) {
            state.items = items;
            state.initialized = true;
        },
        [mutations.ADD_ITEM](state, name) {
            if (!name) return;
            state.items.push({ id: state.items.length, name, checked: false });
        },
        [mutations.CHECK_ITEM](state, item) {
            const targetItem = state.items.find(i => i.id === item.id);
            targetItem.checked = !targetItem.checked;
        },
    },
    actions: {
        [actions.FETCH](context) {
            setTimeout(() => {
                console.log(mockData);
                context.commit(mutations.INITIALIZE, mockData)
            }, 1500)
        },
    },
}

export default groceries;