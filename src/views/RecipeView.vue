<template>
  <LoadingRecipeView v-if="loading" />
  <div class="container" v-if="!loading">
    <i class="fa-solid fa-chevron-left fa-2xl" @click="$router.back()"></i>
    <h1 class="header font-effect-fire-animation">{{recipe.title}}</h1>
    <div class="container-2">
      <div class="description-and-img">
        <img class="recipe-img" :src="recipe.imageUrl" :alt="recipe.title">
        <div class="description">
          <RecipeDescription :recipe="recipe" />
        </div>
      </div>
      <div class="ingredients-and-instructions">
        <div class="ingredients">
          <Ingredients :ingredients="recipe.ingredients" />
        </div>
        <div class="instructions">
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
  font-size: 60px;
}

.fa-chevron-left {
  cursor: pointer;
  margin-top: 30px;
  left: 0;
  position: absolute;
  color: #aaa
}
.description {
  width: 100%;
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
  max-width: 37%;
  max-height: 37%;
  object-fit: cover;
  box-sizing: border-box;
  aspect-ratio: 1;
}

.description-and-img {
  display: flex;
  flex-direction: row-reverse;
}

.ingredients-and-instructions {
  display: flex;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #aaa;
}

.ingredients {
  width: 50%;
  margin-right: 10px;
}

.instructions {
  width: 100%;
}

.rating {
  text-align: center;
}

.rating-info-text {
  color: #333;
}

.comment-container {
  width: 100%;
}

@media screen and (max-width: 768px) {
  .description-and-img {
    flex-direction: column;
  }

  .recipe-img {
    margin: auto;
  }

  .container {
    width: 500px;
  }
}
</style>