<script setup>
import highestScorePerDay from "../assets/js/highestScorePerDay";
import { mapActions } from "pinia";
import useUserActionsStore from "../stores/userActions.js";
import parseDateFromUnixTimestamp from "../assets/js/parseDateFromUnixTimestamp.js";
</script>

<template>
    <div class="history">
        <div
            class="column-container"
            v-for="(scoreObj, i) in dailyHighScores.dailyHighScores"
            :key="i"
        >
            <div
                class="column"
                :style="{
                    height: `${(scoreObj.score / dailyHighScores.highScore) * 100}%`,
                }"
            ></div>
            <div class="info-box">
                <div class="info-box__text">Score: {{ scoreObj.score }}</div>
                <div class="info-box__text">
                    Date: {{ getParsedDate(scoreObj.date) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dailyHighScores: {
                dailyHighScores: [{ score: 16, date: 0 }],
                highScore: 32,
            },
        };
    },
    methods: {
        ...mapActions(useUserActionsStore, ["getUserScores"]),
        getParsedDate(unixTimestamp) {
            return parseDateFromUnixTimestamp(unixTimestamp);
        },
        async getAllUserScores() {
            let scores;
            try {
                scores = await this.getUserScores();
                this.dailyHighScores = highestScorePerDay(scores);
            } catch (err) {
                this.scoreRetrievalError = true;
                console.log(err);
            }
            return;
        },
    },
    async mounted() {
        await this.getAllUserScores();
    },
};
</script>

<style scoped>
.history {
    height: 7rem;
    border-bottom: 2px solid var(--color-foreground);
    max-width: 20vw;
    display: flex;
    align-items: end;
    overflow-x: scroll;
    padding-bottom: 0.1rem;
    scrollbar-width: thin;
    direction: rtl;
    position: relative;
}
.column-container {
    height: 100%;
    display: flex;
    align-items: flex-end;
}
.column {
    width: 2rem;
    flex-shrink: 0;
    background: var(--color-foreground);
    margin: 0 0.5rem;
}
.info-box {
    position: absolute;
    width: 8rem;
    line-break: none;
    top: 0;
    background: var(--color-foreground);
    display: none;
}

.column-container:hover .info-box {
    display: block;
}
</style>
