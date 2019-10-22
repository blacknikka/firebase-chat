<template>
  <div class="comment-container">
    <div class="author-name">
      {{ author }}
    </div>
    <div class="date-content">
      {{ date | toDateFormat }}
    </div>
    <div class="comment-content">
      {{ comment }}
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  filters: {
    toDateFormat (date) {
      return moment(date).format('MM/DD hh:mm:ss');
    },
  },
};
</script>

<style scoped>
.comment-container {
  width: 100%;
  background-color: rgb(252, 247, 236);
  border: solid 1px;
  margin: 2px;
}
.author-name {
  float: left;
  font-size: 0.7em;
  margin-left: 5px;
}
.date-content {
  float: right;
  font-size: 0.7em;
  margin-right: 5px;
}

.comment-content {
  clear: both;
  margin-top: 2px;
  margin-left: 10px;
  font-size: 1.2em;
}
</style>
