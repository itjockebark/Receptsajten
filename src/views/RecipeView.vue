<template>
  <LoadingRecipeView v-if="loading" />
  <div class="container" v-if="!loading">
    <h1 class="header">{{recipe.title}}</h1>
    <div class="container-2">
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
              <p class="ingredients-text">| &nbsp; {{recipe.ingredients.length}}
                INGREDIENSER</p>
              <p class="recipe-minutes-text">| &nbsp; {{recipe.timeInMins}} MINUTER</p>
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
        <p class="rating-info-text">Klicka på en stjärna för att ge ditt betyg!</p>
        <StarRating @star-click="starClick" :recipe="recipe" />
      </div>
    </div>
    <div class="comment-container">
      <h2>Kommentarer</h2>
      <p v-if="!commented">Tecken kvar: {{commentWarning}}</p>
      <form @submit.prevent="onSubmit" v-if="!commented">
        <div class="comment-field">
          <textarea class="comment-field-textarea" type="text" placeholder="Skriv din kommentar" required v-model="comment"
            @input="charsLeft" maxlength="200" :disabled="commented"></textarea>
        </div>
        <div class="name-input-and-button">
          <div class="name-input">
            <input class="name-input-field" type="text" placeholder="Ditt namn" maxlength="32" required v-model="name" :disabled="commented">
          </div>
          <button class="name-input-button" type="submit" :disabled="commented">Skicka</button>
        </div>
      </form>
      <p class="thank-you-text" v-if="commented">Tack för din kommentar!</p>
      <div class="comment" v-for="cmt in comments">
        <div class="name-and-date">
          <p class="name">{{cmt.name}}</p>
          <p class="date">datum</p>
        </div>
        <p class="comment-text">{{cmt.comment}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingRecipeView from '../components/LoadingRecipeView.vue';
import StarRating from '../components/StarRating.vue';

const baseUrl = 'https://jau21-grupp3-z5h3yg8ogjvb.sprinto.se';

export default {
  name: 'RecipeView',
  components: {
    LoadingRecipeView,
    StarRating
  },
  data() {
    return {
      recipe: Object,
      loading: true,
      comment: '',
      commentWarning: '200',
      name: '',
      comments: [],
      commented: false,
      updateCounter: 0
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
      await this.fetchComments();
      this.loading = false;
    },
    async fetchComments() {
      const response = await fetch(`${baseUrl}/recipes/${this.$route.params.recipeId}/comments`);
      const data = await response.json();
      this.comments = data;
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
    },
    charsLeft() {
      this.commentWarning = 200 - this.comment.length;
    },
    async onSubmit() {
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
        .then(response => response)
        .then(data => data);

      this.commented = true;
      this.comment = '';
      this.name = '';
      this.commentWarning = '200';
    }
  },
  async updated() {
    if (this.commented && this.updateCounter < 20) {
      await this.fetchComments();
      this.updateCounter++;
    }
  }
}
</script>

<style scoped>
p {
  margin: 0;
}
.container {
  width: 1000px;
  margin-bottom: 100px;
}

.container-2 {
  padding-bottom: 30px;
  border-bottom: 1px solid #aaa;
}

.header {
  margin-bottom: 40px;
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

.instructions-list {
  background-color: #f4f4f4;
  margin: 5px 0;
  padding: 10px;
  width: 475px;
  border-radius: 5px;
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
}

.name-input-and-button {
  display: flex;
  align-items: center;
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
}

.name-input-button:hover {
  background: #e9e9e9;
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

.date {
}

.comment-text {
  margin-top: 10px;
}

.thank-you-text {
  font-size: 20px;
  margin: 20px 0;
  text-align: center;
}
</style>