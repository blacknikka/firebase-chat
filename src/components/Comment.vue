<template>
  <div class="comment-container">
    <div class="author-name">
      {{author}}
    </div>
    <div class="comment-content">
      {{comment}}
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
  border: solid 1px;
  margin: 2px;
}
.author-name {
  font-size: 0.7em;
  margin-left: 5px;
}

.comment-content {
  margin-top: 2px;
  margin-left: 10px;
}
</style>
