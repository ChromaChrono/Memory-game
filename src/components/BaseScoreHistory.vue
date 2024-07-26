<script setup></script>

<template>
    <div class="history">
        <div
            class="column"
            v-for="{ score, i } in dailyHighScores.dailyHighScores"
            :key="i"
            :style="{
                height: `${(score.score / dailyHighScores.highScore) * 100}%`,
            }"
        ></div>
    </div>
</template>

<script>
export default {
    props: {
        dailyHighScores: {
            type: Object,
            required: true,
        },
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
}

.column {
    width: 2rem;
    flex-shrink: 0;
    background: var(--color-foreground);
    margin: 0 0.5rem;
}
</style>
