<template>
  <div>
    <div v-if="hasComment">
      <comment
        v-for="(comment, index) in conversationList"
        :key="index"
        :comment="comment.comment"
        :author="comment.author"
      ></comment>
    </div>
    <div v-else>会話はありません</div>
    <chat-form></chat-form>
  </div>
</template>

<script>
import ChatForm from '@/components/ChatForm';
import Comment from '@/components/Comment';

export default {
  components: {
    ChatForm,
    Comment
  },
  computed: {
    conversationList () {
      return this.$store.getters.getConversationList;
    },
    hasComment () {
      return this.$store.getters.getConversationList.length > 0;
    }
  },
  mounted () {
    this.$store.dispatch('fetchAllConersations');
  }
};
</script>
