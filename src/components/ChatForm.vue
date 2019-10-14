<template>
  <div class="chat-form-container">
    <form @submit="submitComment">
      <div class="text-input-container">
        <textarea
          class="text-input"
          v-model="message"
          placeholder="chat"
          rows=5
           />
      </div>
      <div>
        <input v-model="name" placeholder="your name" />
      </div>

      <div class=submit-button-container>
        <input type="submit" value="投稿" />
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      name: '',
    };
  },
  methods: {
    submitComment () {
      console.log(`message: ${this.message}`);
      console.log(`name: ${this.name}`);
      console.log('ここでaxiosとかで登録');
    }
  },
};
</script>

<style scoped>
.chat-form-container {
  width: 50%;
  float: right;
  text-align: right;
}

.text-input-container {
  width: 100%;
}

.text-input {
  width: 100%;
}

.submit-button-container {
  margin: 0 0 0 auto;
  text-align: right;
}
</style>
