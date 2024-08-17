<script setup>
import TheStartScreen from "../components/TheStartScreen.vue";
import TheGameScreen from "../components/TheGameScreen.vue";
import TheScoreScreen from "../components/TheScoreScreen.vue";
import { mapWritableState, mapActions } from "pinia";
import useUserActionsStore from "../stores/userActions.js";
import fetchWords from "../assets/js/fetchWords";
import { auth } from "../includes/firebase";
</script>

<template>
    <TheStartScreen
        v-if="gameState === 'starting'"
        @settings="handleStart($event)"
    ></TheStartScreen>
    <TheGameScreen
        v-else-if="gameState === 'started'"
        :wordList="wordTable.list"
        @guesses="handleGameResults($event)"
    ></TheGameScreen>
    <TheScoreScreen
        v-else-if="gameState === 'ended'"
        :wordTable="wordTable"
        :totalWords="totalWords"
        :finalScore="finalScore"
        :savingError="savingError"
        :dailyHighScores="dailyHighScores"
        @restart="handleRestart"
    ></TheScoreScreen>
</template>

<script>
import useAuthStore from "../stores/auth.js";

export default {
    data() {
        return {
            gameState: "starting",
            wordTable: {
                wordList: [],
                words: {},
            },
            guessedWords: [],
            finalScore: 0,
            totalWords: 0,
            dailyHighScores: [],
            savingError: false,
        };
    },
    computed: {
        ...mapWritableState(useAuthStore, ["userLoggedIn"]),
    },
    created() {
        if (auth.currentUser) {
            this.userLoggedIn = true;
        }
    },
    methods: {
        ...mapActions(useUserActionsStore, ["saveNewScore"]),

        async handleStart(e) {
            const words = await fetchWords(e.wordCount);
            this.arrayToWordTable(words);
            this.gameState = "started";
        },
        handleRestart() {
            this.gameState = "starting";
            this.wordTable = {
                wordList: [],
                words: {},
            };
            this.guessedWords = [];
            this.finalScore = 0;
            this.totalWords = 0;
        },
        async saveScoreToUserAccount() {
            try {
                await this.saveNewScore(this.finalScore, this.totalWords);
            } catch (err) {
                this.savingError = true;
                console.log(err);
            }
            return;
        },

        handleGuesses(guessesArray) {
            guessesArray.forEach((guess) => {
                const transformedGuess = guess.toLowerCase().trim();
                if (this.wordTable.words[transformedGuess]) {
                    this.wordTable.words[transformedGuess].correct = true;
                    this.finalScore++;
                }
            });
            this.gameState = "ended";
        },
        async handleGameResults(guesses) {
            this.handleGuesses(guesses);
            await this.saveScoreToUserAccount();
        },
        arrayToWordTable(wordArray) {
            this.totalWords = wordArray.length;
            this.wordTable.list = wordArray;
            wordArray.forEach((e) => {
                this.wordTable.words[e] = {
                    correct: false,
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
