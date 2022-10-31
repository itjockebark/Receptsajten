<template>
    <div class="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input class="search-bar" type="text" :placeholder="`Sök bland ${$route.path === '/' ? 'alla recept' : $route.params.name === undefined ? '' : $route.params.name.toLowerCase()}...`" v-model="input"
            @input="filterRecipes">
    </div>
</template>

<script>
const baseUrl = 'https://jau21-grupp3-z5h3yg8ogjvb.sprinto.se';
export default {
    name: 'SearchBar',
    data() {
        return {
            input: '',

        }
    },
    methods: {
        filterRecipes() {
            let url = this.$route.path === '/' ? `${baseUrl}/recipes?query=${this.input}` : `${baseUrl}/categories/${this.$route.params.name}/recipes?query=${this.input}`;

            fetch(url)
                .then(response => response.json())
                .then(data => this.$emit('searched-recipes', data));
        }
    },
    watch: {
        '$route.path': function () {
            this.input = '';
        }
    },
    emits: [
        'searched-recipes'
    ]
}
</script>

<style scoped>
.search {
    width: 100%;
    display: flex;
    border: 5px solid #f4f4f4;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

.search-bar {
    width: 100%;
    border: none;
    outline: none;
    height: 20px;
    font-size: 18px;
}

.fa-magnifying-glass {
    color: #8e8e8e;
    margin-right: 5px;
    position: relative;
    top: 1px;
}

@media screen and (max-width: 992px) {
    .search {
        width: 500px;
    }
}

@media screen and (max-width: 768px) {
    .search {
        width: 350px;
    }
}
</style>
