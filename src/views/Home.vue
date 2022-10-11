<template>
  <Recipes @star-click="starClick" :recipes="recipes" />
</template>

<script>
import Recipes from '../components/Recipes.vue';

const baseUrl = 'https://jau21-grupp3-z5h3yg8ogjvb.sprinto.se';

export default {
  name: 'Home',
  components: {
    Recipes
  },
  data() {
    return {
      recipes: []
    }
  },
  async created() {
    this.recipes = await this.fetchRecipes();
  },
  components: {
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
      
      return data.sort((a, b) => a.title.localeCompare(b.title));
    }
  }
}
</script>