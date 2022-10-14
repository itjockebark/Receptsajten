<template>
  <div class="container">
    <h1 class="header">{{recipe.title}}</h1>
    <div>
      <div class="description-and-img">
        <div class="description">
          <p>{{recipe.description}}</p>
          <div class="recipe-info">
            <p class="recipe-info-text">***** | {{recipe.ingredients.length}} INGREDIENSER | {{recipe.timeInMins}}
              MINUTER</p>
          </div>
        </div>
        <img class="recipe-img" :src="recipe.imageUrl" :alt="recipe.title">
      </div>
    </div>
  </div>
  <!-- <p v-for="ingredient in recipe.ingredients">{{ingredient.name}}</p> -->
</template>

<script>
const baseUrl = 'https://jau21-grupp3-z5h3yg8ogjvb.sprinto.se';

export default {
  name: 'RecipeView',
  components: {

  },
  data() {
    return {
      recipe: {},
    }
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await fetch(`${baseUrl}/recipes/${this.$route.params.recipeId}`);
      const data = await response.json();
      this.recipe = data;
    }
  }
}
</script>

<style scoped>
.header {
  margin: 20px 0;
}

.description {
  width: 300px;
  text-align: center;
  margin: 0 30px 0 0;
  font-size: 20px;
}

.recipe-info {
  display: flex;
  width: 300px;
  height: 35px;
  background-color: #f4f4f4;
  font-size: 15px;
}

.recipe-info-text {
  margin: 0;
}

.recipe-img {
  border: 2px solid #ddd;
  border-style: outset;
  padding: 6px;
  width: 150px;
  height: 150px;
  margin-right: 25px;
  object-fit: cover;
  aspect-ratio: 1;
}

.description-and-img {
  display: flex;
}
</style>