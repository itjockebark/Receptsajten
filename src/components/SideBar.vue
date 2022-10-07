<template>
    <div class="container">
        <p class="categories">Kategorier</p>
        <ul class="categories-list">
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'SideBar'
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
        cursor: pointer;
    }

    .categories-list li:hover {
        text-decoration: underline;
    }
</style>