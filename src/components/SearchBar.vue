<template>
    <div class="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input class="search-bar" type="text" v-model="input" placeholder="Sök bland recepten...">

    </div>
    <p> {{ input }}</p>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            input: "",
            recipes: []
        }
    },
    computed: {
        filteredList() {
            return this.recipes.filter((recipe) =>
                recipe.toLowerCase().includes(input.value.toLowerCase())
            );
        },
        handleSearch() {
            this.$emit()
        }

    },
    method: {
        async fetchRecipes() {
            const response = await fetch(`${baseUrl}/recipes`);
            const data = await response.json();

            return data.sort((a, b) => a.title.localeCompare(b.title));
        }

    },
    async created() {
        this.recipes = await this.fetchRecipes()
    }
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
</style>