export default {
  namespaced: true,
  state: {
    num: 17,
  },
  getters: {
    num: (state) => state.num
  },
  mutations: {
    ADD_ONE: (state) => state.num++,
  },
  actions: {
    addOne({ commit}) {
      commit("ADD_ONE");
    },
  },
};
