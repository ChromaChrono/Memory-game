<script setup>
import startScreen from "./components/BaseStartScreen.vue";
import carousel from "./components/BaseCarousel.vue";
import fetchWords from "./assets/js/fetchWords";
import EndScreen from "./components/BaseEndScreen.vue";
</script>

<template>
    <startScreen
        v-if="gameState === 'starting'"
        @values="handleStart($event)"
    ></startScreen>
    <carousel
        v-if="gameState === 'started'"
        :words="wordTable"
        @guessedWords="handleGuesses($event)"
    ></carousel>
    <EndScreen
        v-if="gameState === 'ended'"
        :words="wordTable"
        :totalWords="totalWords"
        :correctGuesses="correctGuesses"
        @restart="handleRestart"
    ></EndScreen>
</template>

<script>
export default {
    data() {
        return {
            gameState: "starting",
            wordTable: {},
            guessedWords: [],
            correctGuesses: 0,
            totalWords: 0,
        };
    },
    methods: {
        async handleStart(e) {
            const words = await fetchWords(e.wordCount);
            this.arrayToWordTable(words);
            this.gameState = "started";
        },
        handleRestart() {
            (this.gameState = "starting"),
                (this.wordTable = {}),
                (this.guessedWords = []),
                (this.correctGuesses = 0),
                (this.totalWords = 0);
        },
        handleGuesses(wordsArray) {
            wordsArray.forEach((e) => {
                if (this.wordTable[e]) {
                    this.wordTable[e].correct = true;
                    this.correctGuesses++;
                }
            });
            this.guessedWords.forEach((e) => {
                if (this.wordTable[e]) {
                    this.correctGuesses++;
                }
            });
            this.gameState = "ended";
        },
        arrayToWordTable(wordArray) {
            this.totalWords = wordArray.length;
            wordArray.forEach((e) => {
                this.wordTable[e] = {
                    isCorrect: false,
                    id: self.crypto.randomUUID(),
                };
            });
        },
    },
};
</script>

<style scoped></style>
