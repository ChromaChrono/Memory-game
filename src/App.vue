<script setup>
import TheStartScreen from "./components/TheStartScreen.vue";
import TheGameScreen from "./components/TheGameScreen.vue";
import TheScoreScreen from "./components/TheScoreScreen.vue";
import fetchWords from "./assets/js/fetchWords";
</script>

<template>
    <TheStartScreen
        v-if="gameState === 'starting'"
        @settings="handleStart($event)"
    ></TheStartScreen>
    <TheGameScreen
        v-if="gameState === 'started'"
        :wordList="wordTable.list"
        @guesses="handleGuesses($event)"
    ></TheGameScreen>
    <TheScoreScreen
        v-if="gameState === 'ended'"
        :wordTable="wordTable"
        :totalWords="totalWords"
        :finalScore="finalScore"
        @restart="handleRestart"
    ></TheScoreScreen>
</template>

<script>
export default {
    data() {
        return {
            gameState: "starting",
            wordTable: {},
            guessedWords: [],
            finalScore: 0,
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
                (this.finalScore = 0),
                (this.totalWords = 0);
        },
        handleGuesses(wordsArray) {
            wordsArray.forEach((e) => {
                if (this.wordTable[e]) {
                    this.wordTable[e].correct = true;
                    this.finalScore++;
                }
            });
            this.guessedWords.forEach((e) => {
                if (this.wordTable[e]) {
                    this.finalScore++;
                }
            });
            this.gameState = "ended";
        },
        arrayToWordTable(wordArray) {
            this.totalWords = wordArray.length;
            this.wordTable.list = wordArray;
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

<style>
body {
    background: var(--color-background);
}
</style>
