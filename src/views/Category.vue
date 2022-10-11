<template>
  <Recipes :recipes=recipes />
</template>

<script>
import Recipes from '../components/Recipes.vue'

const baseUrl = 'https://jau21-grupp3-z5h3yg8ogjvb.sprinto.se';

export default {
  components: {
    Recipes
  },
  data() {
    return {
      recipes: []
    }
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      { immediate: true }
    )
  },
  methods: {
    async fetchData() {
      console.log(this.$route.params.name)
      const response = await fetch(`${baseUrl}/categories/${this.$route.params.name}/recipes`)
      const data = await response.json();
      this.recipes = data.sort((a, b) => a.title.localeCompare(b.title));

    },
  }
}
</script>
