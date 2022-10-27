<template>
  <div class="stars">
    <i :class="[showStar(1) ? 'fa-solid' : 'fa-regular', 'fa-star']"></i>
    <i :class="[showStar(1.5) ? 'fa-solid' : 'fa-regular', 'fa-star']"></i>
    <i :class="[showStar(2.5) ? 'fa-solid' : 'fa-regular', 'fa-star']"></i>
    <i :class="[showStar(3.5) ? 'fa-solid' : 'fa-regular', 'fa-star']"></i>
    <i :class="[showStar(4.5) ? 'fa-solid' : 'fa-regular', 'fa-star']"></i>
  </div>
</template>

<script>
export default {
  name: 'Stars',
  props: {
    avgRating: 0
  },
  methods: {
    showStar(number) {
      return this.avgRating >= number;
    }
  }
}
</script>

<style scoped>
.fa-star {
  color: #fca003;
}
</style>