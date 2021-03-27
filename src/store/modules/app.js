const state = {
    appId: '1'
};

const mutations = {
    CHANGE_APPID: (state, appId) => {
        state.appId = appId;
    }
};

const actions = {
    changeAppId({ commit }, appId) {
        commit('CHANGE_APPID', appId);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
