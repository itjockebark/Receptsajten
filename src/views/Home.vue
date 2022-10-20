<template>
  <LoadingRecipes v-if="loading" />
  <Recipes v-if="!loading" @star-click="starClick" :recipes="recipes" />
</template>

<script>
  import Recipes from '../components/Recipes.vue';
  import LoadingRecipes from '../components/LoadingRecipes.vue';

  const baseUrl = 'https://jau21-grupp3-z5h3yg8ogjvb.sprinto.se';

  export default {
    name: 'Home',
    data() {
      return {
        loading: false,
        recipes: []
      }
    },
    props: [
      'searchRecipes'
    ],
    watch: {
      searchRecipes: function(searchResult) {
        this.recipes = searchResult.sort((a, b) => b.avgRating - a.avgRating);
      }
    },
    async created() {
      this.loading = true;
      this.recipes = await this.fetchRecipes();
    },
    components: {
      LoadingRecipes,
      Recipes
    },
    methods: {
      async starClick(id, number) {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ rating: number })
        };

      fetch(`${baseUrl}/recipes/${id}/ratings`, requestOptions)
        .then(response => response)
        .then(data => data);
        this.recipes = await this.fetchRecipes();
      },
      async fetchRecipes() {
        const response = await fetch(`${baseUrl}/recipes`);
        const data = await response.json();
        this.loading = false;
        return data.sort((a, b) => b.avgRating - a.avgRating);
      }
    }
  }
</script>