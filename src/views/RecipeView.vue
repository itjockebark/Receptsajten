<template>
  <div class="container">
    <h1 class="header">{{recipe.title}}</h1>
    <div class="description-and-img">
      <div class="description">
        <p>{{recipe.description}}</p>
        <div class="recipe-info">
          <div class="recipe-info-text">
            <div class="stars">
              <i :class="[showStar(1) ? 'fa-solid' : 'fa-regular', 'fa-star']"></i>
              <i :class="[showStar(1.5) ? 'fa-solid' : 'fa-regular', 'fa-star']"></i>
              <i :class="[showStar(2.5) ? 'fa-solid' : 'fa-regular', 'fa-star']"></i>
              <i :class="[showStar(3.5) ? 'fa-solid' : 'fa-regular', 'fa-star']"></i>
              <i :class="[showStar(4.5) ? 'fa-solid' : 'fa-regular', 'fa-star']"></i>
            </div>
            <p class="ingredients-text">{{recipe.ingredients.length}}
              INGREDIENSER</p>
            <p class="recipe-minutes-text">{{recipe.timeInMins}} MINUTER</p>
          </div>
        </div>
      </div>
      <img class="recipe-img" :src="recipe.imageUrl" :alt="recipe.title">
    </div>
    <div class="ingredients-and-instructions">
      <div class="ingredients">
        <h2>Ingredienser</h2>
        <div class="ingredients-list">
          <ul>
            <li v-for="ingredient in recipe.ingredients">{{ingredient.amount}} {{ingredient.unit}} {{ingredient.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="instructions">
        <h2>Gör så här</h2>
        <div class="instructions-list" v-for="instruction in recipe.instructions">{{instruction}}</div>
      </div>
    </div>
    <div class="rating">
      <h2>Vad tyckte du om receptet?</h2>
      <p>Klicka på en stjärna för att ge ditt betyg!</p>
      <StarRating @star-click="starClick" :recipe="recipe" />
    </div>
  </div>
</template>

<script>
import StarRating from '../components/StarRating.vue';
const baseUrl = 'https://jau21-grupp3-z5h3yg8ogjvb.sprinto.se';

export default {
  name: 'RecipeView',
  components: {
    StarRating
  },
  data() {
    return {
      recipe: {},
    }
  },
  props: [
    'searchRecipes'
  ],
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await fetch(`${baseUrl}/recipes/${this.$route.params.recipeId}`);
      const data = await response.json();
      this.recipe = data;
    },
    showStar(number) {
      return this.recipe.avgRating >= number;
    },
    async starClick(id, number) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating: number })
      };

      fetch(`${baseUrl}/recipes/${id}/ratings`, requestOptions)
        .then(response => response)
        .then(data => data);
    }
  }
}
</script>

<style scoped>
.container {
  width: 1000px;
}

p {
  margin: 0;
}

.header {
  margin-bottom: 50px;
}

.description {
  width: 400px;
  text-align: center;
  margin: 0 30px 0 0;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recipe-info {
  display: flex;
  height: 35px;
  width: 400px;
  background-color: #f4f4f4;
  font-size: 15px;
  justify-content: center;
  margin-top: 20px;
}

.fa-star {
  color: #fca003;
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

.recipe-info-text {
  display: flex;
  align-items: center;

}

.recipe-img {
  border: 2px solid #ddd;
  border-style: outset;
  padding: 6px;
  width: 200px;
  height: 200px;
  margin-right: 25px;
  object-fit: cover;
  aspect-ratio: 1;
}

.description-and-img {
  display: flex;
}

.ingredients-and-instructions {
  display: flex;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #aaa;
}

.ingredients {
  margin-right: 20px;
  width: 200px;
}

.ingredients-list {
  background-color: #f4f4f4;
  font-size: 15px;
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

.instructions-list {
  background-color: #f4f4f4;
  margin: 5px 0;
  padding: 10px;
  width: 475px;
}

.rating {
  text-align: center;
}
</style>