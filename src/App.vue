<script setup>
import startScreen from "./components/start-screen.vue"
import carasoul from "./components/carasoul.vue";
import fetchWords from "./assets/js/fetchWords";
</script>

<template>
<!-- <startScreen @values="handleStart($event)"></startScreen> -->
<carasoul :words="words"></carasoul>
</template>

<script>
export default {
    data(){
        return {
            words: []
      }
    },
    methods: {
        handleStart(e) {
            console.log(e)
        }
    },
    created() {
        this.words = fetchWords(10)
    }
}
</script>

<style scoped>
</style>

