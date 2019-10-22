import Vue from 'vue';
import Vuex from 'vuex';
import firebaseManager from '@/Util/firebaseManager';

Vue.use(Vuex);

const getConversationItem = conversation => {
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
    listenMessages ({ state }) {
      const query = firebaseManager.fetchFromFirebase();

      query.onSnapshot(snapshot => {
        // 受信した新しい会話内容を一旦配列に入れる
        const newConversationList = [];
        snapshot.docChanges().forEach(change => {
          if (change.type === 'removed') {
            console.log('message was removed.');
          } else {
            // 最新の会話が降順にならんでいるのでunshift
            newConversationList.unshift(getConversationItem(change.doc.data()));
          }
        });

        // それぞれの会話をstateにpushする
        newConversationList.forEach(conversation => {
          state.conversationList.push(conversation);
        });
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
    },
  },
  getters: {
    getConversationList: (state, getters) => {
      return state.conversationList;
    },
  },
  plugins: [],
});

export default store;
