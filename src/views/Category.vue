<template>
  <LoadingRecipes v-if="loading" />
  <Recipes v-if="!loading" :recipes=recipes />
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
        loading: true,
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
    created() {
      this.$watch(
        () => this.$route.params,
        () => {
          this.loading = true;
          this.fetchData();
        },
        { immediate: true }
      )
    },
    methods: {
      fetchData() {
        fetch(`${baseUrl}/categories/${this.$route.params.name}/recipes`)
          .then(response => response.json())
          .then(data => {
            this.recipes = data.sort((a, b) => b.avgRating - a.avgRating);
            this.loading = false;
          });
      }
    }
  }
</script>
