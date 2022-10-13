<template>
    <div @mouseleave="starOnHover = recipe.avgRating">
        <i @mouseover="starHover(1)" @click="starClick(recipe._id, 1)" :class="[showStar(1) ? 'fa-solid' : 'fa-regular', 'fa-star']"></i>
        <i @mouseover="starHover(2)" @click="starClick(recipe._id, 2)" :class="[showStar(1.5) ? 'fa-solid' : 'fa-regular', 'fa-star']"></i>
        <i @mouseover="starHover(3)" @click="starClick(recipe._id, 3)" :class="[showStar(2.5) ? 'fa-solid' : 'fa-regular', 'fa-star']"></i>
        <i @mouseover="starHover(4)" @click="starClick(recipe._id, 4)" :class="[showStar(3.5) ? 'fa-solid' : 'fa-regular', 'fa-star']"></i>
        <i @mouseover="starHover(5)" @click="starClick(recipe._id, 5)" :class="[showStar(4.5) ? 'fa-solid' : 'fa-regular', 'fa-star']"></i>
    </div>
</template>

<script>
    export default {
        name: 'StarRating',
        data() {
            return {
                starOnHover: this.recipe.avgRating
            }
        },
        props: {
            recipe: Object
        },
        methods: {
            async starClick(id, number) {
                this.$emit('star-click', id, number);
            },
            starHover(number) {
                this.starOnHover = number;
            },
            // checks if star should be filled
            showStar(number) {
                return (this.recipe.avgRating >= number && this.starOnHover >= number) || this.starOnHover >= number;
            }
        },
        updated() {
            this.starOnHover = this.recipe.avgRating;
        }
    }
</script>

<style scoped>
    .fa-star {
        color: #fca003;
    }

    .rating-number {
        margin-left: 5px;
    }
</style>