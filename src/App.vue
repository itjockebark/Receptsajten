<template>
  <div>
    <Header title="Receptsajten" />
    <div class="container">
      <div class="sidebar-and-searchbar">
        <SideBar />
        <div>
          <SearchBar @searched-recipes="searchedRecipes" />
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
        searchResult: []
      }
    },
    methods: {
      searchedRecipes(data) {
        this.searchResult = data;
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
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
