<template>
  <h2>Ingredienser</h2>
  <div class="ingredients-list">
    <ul>
      <li v-for="ingredient in ingredients">{{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Ingredients',
  props: {
    ingredients: {
      type: Array,
      default: []
    }
  }
}
</script>
<style scoped>
  .ingredients-list {
  background-color: #f4f4f4;
  font-size: 15px;
  border-radius: 5px;
}

.ingredients-list ul {
  margin: 0;
  padding: 0;
}

.ingredients-list li {
  list-style: none;
  margin: 0;
  padding: 5px 10px;
}
</style>