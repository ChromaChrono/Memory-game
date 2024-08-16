<script setup>
import BaseCarousel from "./BaseCarousel.vue";
</script>

<template>
    <div class="container">
        <div class="carousel-container">
            <BaseCarousel
                :wordList="wordList"
                @guessedWords="saveGuessedWords($event)"
            ></BaseCarousel>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        wordList: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            guessedWordsList: [],
        };
    },
    methods: {
        handleContinue() {
            if (this.isDisplayingWords === true) {
                this.guessedWordsList = [];
                this.isDisplayingWords = false;
            } else {
                this.$emit("guesses", this.guessedWordsList);
            }
        },
        saveGuessedWords(guessedWordsArray) {
            this.guessedWordsList = guessedWordsArray;
            this.handleContinue();
        },
    },
};
</script>

<style scoped>
.container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.carousel-container {
    max-width: 100vw;
    width: 100%;
}
.carousel {
    position: relative;
    top: 100%;
}
.button {
    margin-top: 3rem;
    margin-bottom: 3rem;
}
</style>
