<template>
    <div class="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input class="search-bar" type="text" placeholder="Sök bland recepten">
    </div>
</template>

<script>
    export default {
        name: 'SearchBar'
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