<template>
  <div class="container">
    <div class="header"></div>
    <div class="description-and-img">
      <div class="recipe-img"></div>
      <div class="description">
        <div class="replace-description"></div>
        <div class="recipe-info"></div>
      </div>
    </div>
    <div class="ingredients-and-instructions">
      <div class="ingredients">
        <div class="replace-h2"></div>
        <div class="ingredients-list"></div>
      </div>
      <div class="instructions">
        <div class="replace-h2"></div>
        <div class="instructions-list"></div>
      </div>
    </div>
    <div class="rating">
      <div class="replace-rating-text-h2"></div>
      <div class="replace-rating-text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeView',
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
  margin-top: 20px;
  margin-bottom: 50px;
  width: 400px;
  height: 40px;
  background: #f4f4f4;
}

.description {
  width: 400px;
  text-align: center;
  margin-right: 50px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.replace-description {
  width: 100%;
  height: 60px;
  background: #f4f4f4;
}

.replace-h2 {
  width: 200px;
  height: 30px;
  background: #f4f4f4;
  margin: 20px 20px 20px 0;
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
  padding: 6px;
  width: 175px;
  height: 175px;
  background: #f4f4f4;
}

.description-and-img {
  display: flex;
  flex-direction: row-reverse;
}

.ingredients-and-instructions {
  display: flex;
  margin-top: 20px;
  padding-bottom: 20px;
}

.ingredients {
  margin-right: 20px;
  width: 200px;
}

.ingredients-list {
  background-color: #f4f4f4;
  font-size: 15px;
  width: 200px;
  height: 120px;
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
  height: 100px;
}

.rating {
  text-align: center;
}

.replace-rating-text-h2 {
  width: 300px;
  height: 30px;
  background: #f4f4f4;
  margin: 20px 0;
}

.replace-rating-text {
  width: 300px;
  height: 20px;
  background: #f4f4f4;
  margin: 20px 0;
}

@media screen and (max-width: 768px) {
  .description-and-img {
    flex-direction: column;
  }

  .description {
    margin: 0;
  }

  .recipe-img {
    margin: 0 auto 30px auto;
  }

  .container {
    width: 500px;
  }

  .instructions-list {
    width: 250px;
  }
}
</style>