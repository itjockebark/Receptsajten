<template>
    <div v-show="!clicked" @mouseleave="starOnHover = 0" class="stars-rating" @click="clicked = true">
        <i @mouseover="starHover(1)" @click="starClick(recipe._id, 1)"
            :class="[showStar(1) ? 'fa-solid' : 'fa-regular', 'fa-star fa-2xl']"></i>
        <i @mouseover="starHover(2)" @click="starClick(recipe._id, 2)"
            :class="[showStar(1.5) ? 'fa-solid' : 'fa-regular', 'fa-star fa-2xl']"></i>
        <i @mouseover="starHover(3)" @click="starClick(recipe._id, 3)"
            :class="[showStar(2.5) ? 'fa-solid' : 'fa-regular', 'fa-star fa-2xl']"></i>
        <i @mouseover="starHover(4)" @click="starClick(recipe._id, 4)"
            :class="[showStar(3.5) ? 'fa-solid' : 'fa-regular', 'fa-star fa-2xl']"></i>
        <i @mouseover="starHover(5)" @click="starClick(recipe._id, 5)"
            :class="[showStar(4.5) ? 'fa-solid' : 'fa-regular', 'fa-star fa-2xl']"></i>
    </div>
    <p class="thank-you-rating-text" v-show="clicked">Tack för ditt betyg!</p>
</template>

<script>
export default {
    name: 'StarRating',
    data() {
        return {
            starOnHover: 0,
            clicked: false
        }
    },
    props: {
        recipe: Object
    },
    emits: [
        'star-click'
    ],
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
}
</script>

<style scoped>
.stars-rating {
    cursor: pointer;
    margin-top: 30px;
}

.fa-star {
    color: #fca003;
}

.rating-number {
    margin-left: 5px;
}

.thank-you-rating-text {
    margin-top: 30px;
}
</style>