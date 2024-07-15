<template>
    <div class="end-screen">
        <div class="screen-title">Results</div>
        <div class="flex">
            <div class="scorecard">
                <div class="score-title">Correct Guesses</div>
                <div class="score">
                    {{ correctGuesses + "/" + totalWords }}
                </div>
            </div>
            <div class="list-of-words">
                <div
                    v-for="(word, key) in words"
                    :key="word.id"
                    class="word"
                    :class="[word.correct ? 'correct' : 'incorrect']"
                >
                    {{ key }}
                </div>
            </div>
        </div>
        <button class="btn-replay" @click="handleRestart">Restart Game</button>
    </div>
</template>

<script>
export default {
    props: ["words", "totalWords", "correctGuesses"],
    methods: {
        handleRestart() {
            this.$emit("restart", true);
        },
    },
};
</script>

<style scoped>
.screen-title {
    color: var(--color-text-background);
    font-size: 4rem;
    margin-top: 2rem;
}
.correct {
    color: var(--color-success);
}
.incorrect {
    color: var(--color-danger);
}
.end-screen {
    height: 100vh;
    width: 100vw;
    background: var(--color-background);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.scorecard {
    background: var(--color-foreground);
    height: 18rem;
    width: 15rem;
    border-radius: 1rem;
    color: var(--color-text-foreground);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
}

.score-title {
    font-size: 1.5rem;
    padding-top: 2rem;
}

.score {
    font-size: 4rem;
    margin-top: 2rem;
}

.list-of-words {
    font-size: 1.5rem;
    background: var(--color-foreground);
    width: 20rem;
    max-height: 40rem;
    overflow-y: scroll;
    padding: 2rem;
    border-radius: 1rem;
}
.flex {
    margin-top: 7%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
}

.btn-replay {
    margin-top: 9rem;
    height: 2.5rem;
    color: var(--color-text-foreground)
}

@media screen and (max-width: 600px) {
    .flex {
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: space-between;
    }

    .flex > div {
        margin-top: 3rem;
    }
}
</style>
