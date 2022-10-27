<template>
  <LoadingRecipeView v-if="loading" />
  <div class="container" v-if="!loading">
    <i class="fa-solid fa-square-xmark fa-2xl" @click="$router.push('/')"></i>
    <h1 class="header">{{recipe.title}}</h1>
    <div class="container-2">
      <div class="description-and-img">
        <div class="description">
          <RecipeDescription :recipe="recipe" />
        </div>
        <img class="recipe-img" :src="recipe.imageUrl" :alt="recipe.title">
      </div>
      <div class="ingredients-and-instructions">
        <div class="ingredients">
          <Ingredients :ingredients="recipe.ingredients" />
        </div>
        <div>
          <Instructions :instructions="recipe.instructions" />
        </div>
      </div>
      <div class="rating">
        <h2>Vad tyckte du om receptet?</h2>
        <p class="rating-info-text">Klicka på en stjärna för att ge ditt betyg!</p>
        <StarRating @star-click="starClick" :recipe="recipe" />
      </div>
    </div>
    <div class="comment-container">
      <h2>Kommentarer</h2>
      <CommentForm @commentSubmit="fetchComments()" />
      <RecipeComments :comments="comments" />
    </div>
  </div>
</template>

<script>
import LoadingRecipeView from '../components/LoadingRecipeView.vue';
import StarRating from '../components/StarRating.vue';
import Instructions from '../components/Instructions.vue';
import Ingredients from '../components/Ingredients.vue';
import RecipeDescription from '../components/RecipeDescription.vue';
import CommentForm from '../components/CommentForm.vue';
import RecipeComments from '../components/RecipeComments.vue';

const baseUrl = 'https://jau21-grupp3-z5h3yg8ogjvb.sprinto.se';

export default {
  name: 'RecipeView',
  components: {
    LoadingRecipeView,
    StarRating,
    Instructions,
    Ingredients,
    RecipeDescription,
    CommentForm,
    RecipeComments
  },
  data() {
    return {
      recipe: Object,
      loading: true,
      comments: [],
      updateCounter: 0
    }
  },
  props: [
    'searchRecipes'
  ],
  created() {
    this.fetchRecipe();
    this.fetchComments();
  },
  methods: {
    fetchRecipe() {
      fetch(`${baseUrl}/recipes/${this.$route.params.recipeId}`)
        .then(response => response.json())
        .then(data => {
          this.recipe = data;
          this.loading = false;
        });
    },
    starClick() {
      this.fetchRecipe();
    },
    fetchComments() {
      fetch(`${baseUrl}/recipes/${this.$route.params.recipeId}/comments`)
        .then(response => response.json())
        .then(data => this.comments = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    },
  },
}
</script>

<style scoped>
.container {
  width: 716px;
  display: flex;
  position: relative;
}

.container-2 {
  padding-bottom: 30px;
  border-bottom: 1px solid #aaa;
}

.header {
  margin: 50px 0 30px 0;
  text-align: center;
}

.fa-square-xmark {
  cursor: pointer;
  margin-top: 40px;
  right: 0;
  position: absolute;
  color: #8c0000;
}
.description {
  width: 400px;
  text-align: center;
  margin-right: 50px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
}

.recipe-img {
  border: 2px solid #ddd;
  border-style: outset;
  padding: 6px;
  width: 250px;
  height: 250px;
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

.rating {
  text-align: center;
}

.rating-info-text {
  color: #333;
}

.comment-container {
  width: 716px;
}
</style>