<script setup>
import BaseScoreCard from "./BaseScoreCard.vue";
import BaseResultsWordList from "./BaseResultsWordList.vue";
import BaseButton from "./BaseButton.vue";
import BaseAuthStatusBox from "./BaseAuthStatusBox.vue";
import BaseScoreHistory from "./BaseScoreHistory.vue";
</script>

<template>
    <div class="container">
        <BaseAuthStatusBox
            v-if="savingError"
            :message="`We're sorry, but your score couldn't be saved due to an error on the server`"
            :messageType="'error'"
        ></BaseAuthStatusBox>
        <div class="flex">
            <BaseScoreCard
                :totalWords="totalWords"
                :finalScore="finalScore"
            ></BaseScoreCard>
            <BaseResultsWordList :wordTable="wordTable"></BaseResultsWordList>
        </div>
        <BaseButton
            :isColorInverted="true"
            :btnText="'Restart Game'"
            @click="handleRestart"
        ></BaseButton>
        <BaseScoreHistory
            class="history"
            :dailyHighScores="dailyHighScores"
        ></BaseScoreHistory>
    </div>
</template>

<script>
export default {
    props: {
        totalWords: {
            type: Number,
            required: true,
        },
        finalScore: {
            type: Number,
            required: true,
        },
        wordTable: {
            type: Object,
            required: true,
        },
        savingError: {
            type: Boolean,
            required: false,
        },
        dailyHighScores: {
            type: Object,
            required: true,
        },
    },
    methods: {
        handleRestart() {
            this.$emit("restart", true);
        },
    },
};
</script>

<style scoped>
.container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}
.button {
    margin-top: 3rem;
}
.history {
    margin-top: 3rem;
}

@media (max-width: 50em) {
    .flex {
        flex-direction: column;
    }

    .flex > * {
        margin-top: 2rem;
    }
}
</style>
