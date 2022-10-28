<template>
    <div v-show="!clicked" @mouseleave="starOnHover = 0" class="stars-rating" @click="clicked = true">
        <i @mouseover="starHover(1)" @click="starClick(1)"
            :class="[showStar(1) ? 'fa-solid' : 'fa-regular', 'fa-star fa-2xl']"></i>
        <i @mouseover="starHover(2)" @click="starClick(2)"
            :class="[showStar(1.5) ? 'fa-solid' : 'fa-regular', 'fa-star fa-2xl']"></i>
        <i @mouseover="starHover(3)" @click="starClick(3)"
            :class="[showStar(2.5) ? 'fa-solid' : 'fa-regular', 'fa-star fa-2xl']"></i>
        <i @mouseover="starHover(4)" @click="starClick(4)"
            :class="[showStar(3.5) ? 'fa-solid' : 'fa-regular', 'fa-star fa-2xl']"></i>
        <i @mouseover="starHover(5)" @click="starClick(5)"
            :class="[showStar(4.5) ? 'fa-solid' : 'fa-regular', 'fa-star fa-2xl']"></i>
    </div>
    <p class="thank-you-rating-text" v-show="clicked">Tack för ditt betyg!</p>
</template>

<script>
const baseUrl = 'https://jau21-grupp3-z5h3yg8ogjvb.sprinto.se';

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
        starClick(number) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ rating: number })
            };

            fetch(`${baseUrl}/recipes/${this.recipe._id}/ratings`, requestOptions)
                .then(response => response)
                .then(data => {
                    this.$emit('star-click');
                });
        },
        starHover(number) {
            this.starOnHover = number;
        },
        // checks if star should be filled
        showStar(number) {
            //return (this.recipe.avgRating >= number && this.starOnHover >= number) || this.starOnHover >= number;
            return this.starOnHover >= number;
        }
    },
}
</script>

<style scoped>
.stars-rating {
    cursor: pointer;
    width: 180px;
    margin: 30px auto 5px auto;
}

.fa-star {
    color: #fca003;
}

.rating-number {
    margin-left: 5px;
}

.thank-you-rating-text {
    margin: 30px 0 0 0;
    font-size: 20px;
}
</style>