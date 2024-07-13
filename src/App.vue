<script setup>
import startScreen from "./components/start-screen.vue"
import carasoul from "./components/carasoul.vue";
</script>

<template>
<h1>Jawayriya is the best</h1>
<!-- <startScreen @values="handleStart($event)"></startScreen> -->
<carasoul></carasoul>
</template>

<script>
export default {
    methods: {
        handleStart(e) {
            console.log(e)
        }
    }
}
</script>

<style scoped>
</style>

