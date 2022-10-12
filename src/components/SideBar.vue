<template>
    <div class="container">
        <p class="categories">Kategorier</p>
        <ul class="categories-list">
            <li><router-link to="/">Alla recept ({{numOfRecipes}})</router-link></li>
            <li v-for="category in categories" :key="category.name" :title="category.name"><router-link :to="{ name: 'Category', params: { name: category.name } }" >{{ category.name }} ({{ category.count }})</router-link></li>
        </ul>
    </div>
</template>

<script>
    const baseUrl = 'https://jau21-grupp3-z5h3yg8ogjvb.sprinto.se';

    export default {
        name: 'SideBar',
        data() {
            return {
                categories: [],
                numOfRecipes: 0
            }
        },
        async created() {
            this.categories = await this.fetchCategories();
            this.numOfRecipes = await this.getRecipeCount();
        },
        methods: {
            async fetchCategories() {
                const response = await fetch(`${baseUrl}/categories`);
                const data = await response.json();
                return data;
            },
            async getRecipeCount() {
                const response = await fetch(`${baseUrl}/recipes`);
                const data = await response.json();

                return data.length;
            }
        }
    }
</script>

<style scoped>
    .container {
        height: 500px;
        width: 200px;
        margin: 0 15px 0 0;
        background-color: #f4f4f4;
        text-align: left;
        align-items: flex-start;
        border-radius: 5px;
        box-sizing: border-box;
    }

    .categories {
        margin: 15px 0 10px 15px;
        font-size: 20px;
    }

    .categories-list {
        padding: 0;
        margin: 0 0 0 15px;
        list-style: none;
    }

    .categories-list li {
        margin: 5px 0;
    }

    .categories-list li a {
        text-decoration: none;
    }

    .categories-list li a:hover {
        text-decoration: underline;
    }

    .categories-list li a:visited {
        color: #000
    }
    
    .router-link-active {
        font-weight: bold;
    }
</style>