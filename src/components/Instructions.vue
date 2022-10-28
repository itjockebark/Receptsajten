<template>
  <h2>Gör så här</h2>
  <div class="instructions-list" v-for="instruction in instructions">{{ instruction }}</div>
</template>

<script>
export default {
  name: 'Instructions',
  props: {
    instructions: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.instructions-list {
  background-color: #f4f4f4;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
}
</style>