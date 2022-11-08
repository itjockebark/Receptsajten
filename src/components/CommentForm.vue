<template>
  <form @submit.prevent="onSubmit" v-if="!commented">
    <p v-if="!commented">Tecken kvar: {{ commentWarning }}</p>
    <div class="comment-field">
      <textarea class="comment-field-textarea" type="text" placeholder="Skriv din kommentar" required v-model="comment"
        @input="charsLeft" :maxlength="commentLimit" :disabled="commented"></textarea>
    </div>
    <div class="name-input-and-button">
      <div class="name-input">
        <input class="name-input-field" type="text" placeholder="Ditt namn" maxlength="32" required v-model="name"
          :disabled="commented">
      </div>
      <button class="name-input-button" type="submit" :disabled="commented">Skicka</button>
    </div>
  </form>
  <p class="thank-you-text" v-if="commented">Tack för din kommentar!</p>
</template>
<script>
const baseUrl = 'https://jau21-grupp3-z5h3yg8ogjvb.sprinto.se';

export default {
  name: 'CommentForm',
  data() {
    return {
      commented: false,
      commentWarning: '',
      comment: '',
      commentLimit: 280,
      name: '',
    }
  },
  created() {
    this.commentWarning = this.commentLimit.toString();
  },
  emits: [
    'commentSubmit'
  ],
  methods: {
    onSubmit() {
      const toSend = {
        comment: this.comment,
        name: this.name
      };

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(toSend)
      };

      fetch(`${baseUrl}/recipes/${this.$route.params.recipeId}/comments`, requestOptions)
        .then(response => response.json())
        .then(data => {
          this.commented = true;
          this.comment = '';
          this.name = '';
          this.commentWarning = this.commentWarning.toString();
          this.$emit('commentSubmit');
        });
    },
    charsLeft() {
      this.commentWarning = this.commentLimit - this.comment.length;
    }
  }
}
</script>
<style scoped>
.comment-field {
  width: 100%;
  display: flex;
  border: 5px solid #f4f4f4;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.comment-field-textarea {
  width: 716px;
  height: 100px;
  box-sizing: border-box;
  margin-bottom: 30px;
  font-size: 25px;
  resize: none;
  border: none;
  outline: none;
  font-family: Poppins, monospace;
}

.name-input-and-button {
  display: flex;
  align-items: center;
}

.name-input {
  width: 100%;
  display: flex;
  border: 5px solid #f4f4f4;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
}

.name-input-field {
  width: 100%;
  border: none;
  outline: none;
  height: 20px;
  font-size: 18px;
  font-family: Poppins, monospace;
}

.name-input-button {
  width: 200px;
  height: 40px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  margin-left: 10px;
  color: #555;
  cursor: pointer;
  font-family: Poppins, monospace;
}

.name-input-button:hover {
  background: #e9e9e9;
}

.thank-you-text {
  font-size: 20px;
  margin: 20px 0;
  text-align: center;
}
</style>