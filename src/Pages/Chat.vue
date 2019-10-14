<template>
  <div>
    <chat-form></chat-form>
    <comment></comment>
  </div>
</template>

<script>
import ChatForm from '@/components/ChatForm';
import Comment from '@/components/Comment';
export default {
  components: {
    ChatForm,
    Comment
  }
};
</script>
