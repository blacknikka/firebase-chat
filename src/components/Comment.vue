<template>
  <div class="comment-container">
    <div class="comment-content">
      {{comment}}
    </div>
    <div class="author-name">
      {{author}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
  }
};
</script>

<style scoped>
.comment-container {
  width: 100%;
  background-color: lavender;
}
</style>
