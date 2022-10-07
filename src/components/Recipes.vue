<template>
    <div class="recipes">
        <Recipe @star-click="starClick" v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>
</template>

<script>
    import Recipe from './Recipe.vue';
    
    export default {
        name: 'Recipes',
        props: {
            recipes: Array
        },
        components: {
            Recipe
        },
        methods: {
            starClick(id, number) {
                this.$emit('star-click', id, number);
            }
        }
    }
</script>

<style scoped>
    .recipes {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
</style>
