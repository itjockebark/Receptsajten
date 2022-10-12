<template>
  <div class="recipe">
      <div class="image-and-text">
          <div class="recipe-img"></div>
          <div class="title-and-description">
              <div class="title"></div>
              <div class="description"></div>
          </div>
      </div>
      <div class="under-text"></div>
  </div>
</template>

<script>
  //import StarRating from './StarRating.vue';
  export default {
      name: 'LoadingRecipe',
      components: {
          //StarRating
      },
  }
</script>

<style scoped>
  .recipe {
      background: #f4f4f4;
      margin: 5px 0;
      padding: 20px 20px;
      cursor: pointer;
      width: 750px;
      border-radius: 5px;
      box-sizing: border-box;
  }

  .image-and-text {
      display: flex;
  }

  .title-and-description {
      display: flex;
      flex-direction: column;
      width: 100%;
  }

  .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #e9e9e9;
      width: 300px;
      height: 20px;
  }

  .title h3 {
      margin: 0;
      width: 300px;
  }

  .recipe-img {
      padding: 6px;
      width: 150px;
      height: 150px;
      background-color: #e9e9e9;
      margin-right: 25px;
      aspect-ratio: 1;
  }

  .description {
      margin-top: 10px;
      background-color: #e9e9e9;
      width: 500px;
      height: 40px;
  }

  .under-text {
      color: #555;
      margin-top: 15px;
      background-color: #e9e9e9;
      width: 275px;
      height: 20px;
  }
</style>