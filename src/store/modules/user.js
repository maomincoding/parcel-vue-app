import { useLogin } from "../../request/api.js";

const getDefaultState = () => {
  return {
    userName: "admin"
  };
};

const state = getDefaultState();

const mutations = {
  SET_NAME: (state, userName) => {
    state.userName = userName;
  },
};

const actions = {
  // get user info
  login({ commit }) {
    return new Promise((resolve, reject) => {
      useLogin()
        .then((response) => {
            const { data } = response;
            const { userName } = data;
            commit("SET_NAME", userName);
            resolve(data);
        })
        .catch((err) => {
          console.log(err)
          // reject();
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
