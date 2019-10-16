import Vue from 'vue';
import Vuex from 'vuex';
import firebaseManager from '@/Util/firebaseManager';

Vue.use(Vuex);

const getConversationItem = (conversation) => {
  return {
    comment: conversation.comment,
    author: conversation.author,
    date: conversation.date,
  };
};

const store = new Vuex.Store({
  state: {
    conversationList: [],
  },
  actions: {
    /**
     * 全会話を取得する
     * @param {Object} state
     */
    async fetchAllConersations ({state}) {
      const conversations = await firebaseManager.fetchFromFirebase();
      conversations.forEach((conversation) => {
        state.conversationList.push(
          getConversationItem(conversation.data())
        );
      });
    },
  },
  mutations: {
    /**
     * 会話を１つコミットする（firebaseに入れる）
     * @param {Object} state
     * @param {Object} conversationInf
     */
    commitOneConversation (state, conversationInf) {
      firebaseManager.commitToFirebase(conversationInf);
      state.conversationList.push(
        getConversationItem(conversationInf)
      );
    },
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
