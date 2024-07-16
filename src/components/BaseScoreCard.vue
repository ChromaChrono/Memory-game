<template>
    <div class="scorecard">
        <div class="score-title">Correct Guesses</div>
        <div class="score">
            {{ finalScore + "/" + totalWords }}
        </div>
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
    },
};
</script>

<style scoped>
.scorecard {
    background: var(--color-foreground);
    height: 18rem;
    max-width: 15rem;
    width: 100%;
    border-radius: 1rem;
    color: var(--color-text-foreground);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.score-title {
    font-size: 1.5rem;
    padding-top: 2rem;
}

.score {
    font-size: 3rem;
    margin-top: 3rem;
}
</style>
