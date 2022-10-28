<template>
  <div>
    <Header title="Receptsajten" v-show="onNotRecipeRoute"></Header>
    <div class="container">
      <div class="sidebar-and-searchbar">
        <SideBar v-show="onNotRecipeRoute" />
        <div>
          <SearchBar v-show="onNotRecipeRoute" @searched-recipes="searchedRecipes" />
          <RouterView :searchRecipes="searchResult" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import SearchBar from './components/SearchBar.vue';
import SideBar from './components/SideBar.vue';

export default {
  name: 'App',
  components: {
    Header,
    SearchBar,
    SideBar
  },
  data() {
    return {
      searchResult: [],
      onNotRecipeRoute: true
    }
  },
  methods: {
    searchedRecipes(data) {
      this.searchResult = data;
    }
  },
  watch: {
    '$route.path': function () {
      this.$route.name === 'Recipe' ? this.onNotRecipeRoute = false : this.onNotRecipeRoute = true;
    }
  }
}
</script>

<style>
body {
  margin: 0 0 100px 0;
  font-family: Poppins, monospace;
}

h1 {
  text-transform: uppercase;
}

.hidden {
  display: none;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}

.sidebar-and-searchbar {
  display: flex;
}
</style>
