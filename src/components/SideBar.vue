<template>
    <div class="container">
        <p class="categories">Kategorier</p>
        <ul class="categories-list">
            <li><router-link to="/">Alla recept ({{numOfRecipes}})</router-link></li>
            <li v-for="category in categories" :key="category.name" :title="category.name"><router-link :to="{ name: 'Category', params: { name: category.name } }" >{{ category.name }} ({{ category.count }})</router-link></li>
            <!-- <li v-for="category in categories" :key="category.name" :title="category.name" @click="router.push(`/category/${category.name}`)">{{ category.name }} ({{ category.count }})</li> -->
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
        created() {
            this.fetchCategories();
            this.getRecipeCount();
        },
        methods: {
            fetchCategories() {
                fetch(`${baseUrl}/categories`)
                    .then(response => response.json())
                    .then(data => this.categories = data);
            },
            getRecipeCount() {
                fetch(`${baseUrl}/recipes`)
                    .then(response => response.json())
                    .then(data => this.numOfRecipes = data.length);
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
        color: #000;
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