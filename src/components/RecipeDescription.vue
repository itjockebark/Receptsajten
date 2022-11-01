<template>
  <p>{{ recipe.description }}</p>
  <div class="recipe-info">
    <div class="recipe-info-text">
      <Stars class="stars" :avgRating="recipe.avgRating" />
      <p class="ingredients-text">| &nbsp; {{ recipe.ingredients.length }}
        INGREDIENSER</p>
      <p class="recipe-minutes-text">| &nbsp; {{ recipe.timeInMins }} MINUTER</p>
    </div>
  </div>
</template>
<script>
import Stars from '../components/Stars.vue';

export default {
  name: 'RecipeDescription',
  components: {
    Stars
  },
  props: {
    recipe: Object
  }
}
</script>
<style scoped>
p {
  margin: 0;
}
.recipe-info {
  display: flex;
  height: 35px;
  width: 400px;
  background-color: #f4f4f4;
  font-size: 15px;
  justify-content: center;
  margin-top: 20px;
  color: #555;
  border-radius: 5px;
}

.recipe-info-text {
  display: flex;
  align-items: center;
}

.stars {
  margin: 0 15px;
}

.ingredients-text {
  margin-right: 15px
}

.recipe-minutes-text {
  margin-right: 15px;
}

@media screen and (max-width: 768px) {
  p {
    margin: 20px 0;
  }
  .recipe-info {
    margin: 0;
  }
}
</style>