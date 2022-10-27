<template>
  <div class="comment" v-for="cmt in comments">
    <div class="name-and-date">
      <p class="name">{{ cmt.name }}</p>
      <p>{{ new Date(cmt.createdAt).toLocaleDateString() }}</p>
    </div>
    <p class="comment-text">{{ cmt.comment }}</p>
  </div>
</template>

<script>
export default {
  name: 'RecipeComment',
  props: {
    comments: {
      type: Array,
      default: []
    }
  },
}
</script>

<style scoped>
p {
  margin: 0;
}
.comment {
  background: #f4f4f4;
  margin: 20px 0;
  padding: 20px;
  border-radius: 5px;
}

.name-and-date {
  display: flex;
  justify-content: space-between;
}

.name {
  font-size: 25px;
}

.comment-text {
  margin-top: 10px;
}
</style>