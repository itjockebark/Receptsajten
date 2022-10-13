<template>
  <LoadingRecipes v-if="loading" />
  <Recipes :recipes=recipes />
</template>

<script>
  import LoadingRecipes from '../components/LoadingRecipes.vue';
  import Recipes from '../components/Recipes.vue';

  const baseUrl = 'https://jau21-grupp3-z5h3yg8ogjvb.sprinto.se';

  export default {
    components: {
      Recipes,
      LoadingRecipes
    },
    data() {
      return {
        loading: false,
        recipes: []
      }
    },
    props: [
      'searchRecipes'
    ],
    created() {
      this.loading = true;
      this.$watch(
        () => this.$route.params,
        () => {
          this.fetchData();
        },
        { immediate: true }
      )
    },
    methods: {
      async fetchData() {
        const response = await fetch(`${baseUrl}/categories/${this.$route.params.name}/recipes`);
        const data = await response.json();
        this.loading = false;
        this.recipes = data.sort((a, b) => b.avgRating - a.avgRating);
      }
    }
  }
</script>
