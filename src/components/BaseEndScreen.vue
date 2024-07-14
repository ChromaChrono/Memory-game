<template>
    <div class="end-screen">
        <h1>Results</h1>
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
.correct {
    color: greenyellow;
}
.incorrect {
    color: red;
}
.end-screen {
    height: 100vh;
    width: 100vw;
}
.scorecard {
    background: white;
    height: 18rem;
    width: 15rem;
    border-radius: 1rem;
    color: black;
    position: relative;
}

.score-title {
    font-size: 1.5rem;
    padding-top: 2rem;
}

.score {
    font-size: 4.5rem;
    margin-top: 2rem;
}

.list-of-words {
    font-size: 1.5rem;
    background: white;
    width: 20rem;
    max-height: 40rem;
    overflow-y: scroll;
    color: black;
    padding: 2rem;
    border-radius: 1rem;
}
.flex {
    margin-top: 5%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.btn-replay {
    margin-top: 5rem;
}
</style>
