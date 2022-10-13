<template>
    <header>
        <h1>{{ title }}</h1>
        <p>ahdjsk shdjakd shjkhsjs sjsjs sjsjajkhd akhdak</p>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            title: String
        }
    }
</script>

<style scoped>
    header {
        text-align: center;
    }
    
    p {
        margin-bottom: 50px;
    }
</style>