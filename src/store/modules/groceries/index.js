import mockData from '../../../mock_data/groceries';

export const mutations = {
    INITIALIZE: "INITIALIZE",
    ADD_ITEM: "ADD_ITEM",
    CHECK_ITEM: "CHECK_ITEM"
};

export const actions = {
    FETCH: "FETCH",
    ADD_ITEM: "ADD_ITEM",
}

export const getters = {
    checkedItems: "checkedItems",
    uncheckedItems: "uncheckedItems",
}

const groceries = {
    state: {
        initialized: false,
        items: [],
        preInitItems : [],
    },
    getters: {
        [getters.checkedItems]: state => state.items.filter(g => g.checked),
        [getters.uncheckedItems]: state => state.items.filter(g => !g.checked)
    },
    mutations: {
        [mutations.INITIALIZE](state, items) {
            state.items = [...items, ...state.preInitItems];
            state.preInitItems = [];
            state.initialized = true;
        },
        [mutations.ADD_ITEM](state, name) {
            if (!name) return;
            if (!state.initialized){
                state.preInitItems.push({ id: `p${state.preInitItems.length}`, name, checked: false});
            } else {
                state.items.push({ id: state.items.length, name, checked: false });
            }
        },
        [mutations.CHECK_ITEM](state, item) {
            const targetItem = state.items.find(i => i.id === item.id);
            targetItem.checked = !targetItem.checked;
        },
    },
    actions: {
        [actions.FETCH](context) {
            setTimeout(() => {
                context.commit(mutations.INITIALIZE, mockData)
            }, 2000)
        },
    },
}

export default groceries;