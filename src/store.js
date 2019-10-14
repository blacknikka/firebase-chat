import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    conversationList: [
      { comment: 'hello', author: 'Tom' },
      { comment: 'hi', author: 'Ken' },
      { comment: 'how are you doing?', author: 'Tom' },
      { comment: 'great!', author: 'Ken' },
    ],
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getConversationList: (state, getters) => {
      return state.conversationList;
    },
  },
  plugins: [
  ],
});

export default store;
