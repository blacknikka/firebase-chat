<template>
  <div>
    <div v-if="hasComment">
      <comment
        v-for="(comment, index) in conversationList"
        :key="index"
        :comment="comment.comment"
        :author="comment.author"
        :date="comment.date | dateFromMoment"
      ></comment>
    </div>
    <div v-else>会話はありません</div>
    <chat-form></chat-form>
  </div>
</template>

<script>
import ChatForm from '@/components/ChatForm';
import Comment from '@/components/Comment';

let intervalId = 0;

export default {
  components: {
    ChatForm,
    Comment,
  },
  computed: {
    conversationList () {
      return this.$store.getters.getConversationList;
    },
    hasComment () {
      return this.$store.getters.getConversationList.length > 0;
    },
  },
  filters: {
    dateFromMoment (moment) {
      return moment.toDate();
    },
  },
  mounted () {
    this.$store.dispatch('listenMessages');
  },
  destroyed () {
    if (intervalId > 0) {
      clearInterval(intervalId);
    }
  },
};
</script>
