<template>
  <div>
    <comment
      v-for="(comment, index) in conversationList"
      :key="index"
      :comment="comment.comment"
      :author="comment.author"
    ></comment>
    <chat-form></chat-form>
  </div>
</template>

<script>
import ChatForm from '@/components/ChatForm';
import Comment from '@/components/Comment';
import firebaseManager from '@/Util/firebaseManager';

export default {
  components: {
    ChatForm,
    Comment
  },
  computed: {
    conversationList () {
      return this.$store.getters.getConversationList;
    }
  },
  mounted () {
    firebaseManager.fetchFromFirebase();
  }
};
</script>
