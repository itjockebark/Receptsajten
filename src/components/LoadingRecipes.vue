<template>
  <div class="loading-recipes">
      <LoadingRecipe v-for="i in 5" :key="i" />
  </div>
</template>

<script>
  import LoadingRecipe from './LoadingRecipe.vue';
  
  export default {
      name: 'LoadingRecipes',
      components: {
          LoadingRecipe
      }
  }
</script>

<style scoped>
  .loading-recipes {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
  }
</style>
