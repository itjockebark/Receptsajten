<template>
    <header>
        <h1 class="font-effect-neon">{{ title }}</h1>
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

    h1 {
        font-size: 60px;
    }
    
    p {
        margin-bottom: 50px;
    }
</style>