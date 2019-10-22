import Vue from 'vue';
import Vuex from 'vuex';
import firebaseManager from '@/Util/firebaseManager';
import moment from 'moment';

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
      // 配列初期化する
      state.conversationList.splice(0);

      const conversationList = [];
      conversations.forEach((conversation) => {
        conversationList.push(
          getConversationItem(conversation.data())
        );
      });

      conversationList.sort((conversationA, conversationB) => {
        const dateA = moment(conversationA.date.seconds * 1000);
        const dateB = moment(conversationB.date.seconds * 1000);
        if (dateA.isAfter(dateB)) {
          return 1;
        } else {
          return -1;
        }
      }).forEach((conversation) => {
        state.conversationList.push(
          conversation
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
