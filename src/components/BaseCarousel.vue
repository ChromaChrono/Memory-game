<template>
    <div class="carousel-screen">
        <div class="carousels">
            <div v-if="memorizing === true" class="carousel">
                <div
                    v-for="(word, key) in words"
                    :key="word.id"
                    class="carousel-card"
                >
                    <div class="carousel-word" :id="word.id">{{ key }}</div>
                </div>
            </div>
            <div
                v-if="memorizing === false"
                class="carousel"
                ref="guessedWords"
            >
                <div v-for="(word, i) in words" :key="i" class="carousel-card">
                    <div
                        class="carousel-word underline"
                        contenteditable="true"
                    ></div>
                </div>
            </div>
            <button class="btn-continue" @click="handleContinue">
                Continue
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["words"],
    data() {
        return {
            memorizing: true,
            guessedWords: [],
        };
    },
    methods: {
        readGuessedWords() {
            const carousel = this.$refs.guessedWords;
            for (let i = 0; i < carousel.children.length; i++) {
                this.guessedWords.push(
                    carousel.children[i].querySelector(".carousel-word")
                        .textContent,
                );
            }
        },
        emitGuessedWords() {
            this.$emit("guessedWords", this.guessedWords);
        },
        handleContinue() {
            if (this.memorizing) {
                this.memorizing = false;
            } else {
                this.readGuessedWords();
                this.emitGuessedWords();
            }
        },
    },
};
</script>

<style lang="css" scoped>
.carousel {
    display: flex;
    padding: 1rem 3rem;
    top: 50%;
    /* width: 100%; */
    overflow-x: scroll;
}
.carousels {
    width: 100vw;
    position: relative;
}
.carousel-card {
    background: white;
    width: 21rem;
    height: 16rem;
    flex-grow: 0;
    border-radius: 1rem;
    display: grid;
    place-items: center;
    flex-shrink: 0;
}

.carousel-word {
    font-size: 2rem;
    color: black;
    min-height: 1rem;
    min-width: 70%;
}
.carousel-word:focus {
    outline: none;
}
.carousel-card:not(:first-child) {
    margin-left: 3rem;
}
.carousel-screen {
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    overflow: hidden;
}
.underline {
    border-bottom: 1px solid black;
}
.btn-continue {
    position: absolute;
    top: 22rem;
    height: 2.5rem;
    width: 8rem;
    /* left: 10vw; */
}

@media screen and (max-width: 600px) {
    .carousel-screen {
        height: fit-content;
    }
    .carousel-card {
        height: 8rem;
    }
    .carousel {
        flex-direction: column;
        overflow: scroll;
        margin-bottom: 10rem;
    }
    .carousel-card {
        margin: 0;
        width: 100%;
    }
    .carousel-card:not(:first-child) {
        margin: 0;
        margin-top: 2rem;
    }
    .btn-continue {
        position: absolute;
        top: initial;
        bottom: 5rem;
        left: 50%;
        transform: translate(-50%);
    }
}
</style>
