<script setup>
import BaseButton from "./BaseButton.vue";
</script>

<template>
    <div class="carousel" ref="carousel">
        <div v-for="(word, i) in wordList" :key="word.id" class="carousel-card">
            <div v-if="isDisplayingWords" class="carousel-word" :id="i">
                {{ isDisplayingWords ? word : "" }}
            </div>
            <div v-else class="input-field">
                <label class="input-label" :for="`guess${i}`"
                    >guess {{ i + 1 }}</label
                >
                <input class="input-box" type="text" />
            </div>
        </div>
    </div>
    <BaseButton
        :btnText="'Continue'"
        :isColorInverted="true"
        @click="handleContinue"
    ></BaseButton>
</template>

<script>
export default {
    emits: ["guessedWords"],
    props: {
        wordList: {
            type: Array,
            required: false,
        },
    },
    data() {
        return {
            guessedWords: [],
            isDisplayingWords: true,
        };
    },
    methods: {
        readGuessedWords() {
            const carousel = this.$refs.carousel;
            for (let i = 0; i < carousel.children.length; i++) {
                this.guessedWords.push(
                    carousel.children[i].querySelector(".input-box").value,
                );
            }
        },
        emitGuessedWords() {
            this.readGuessedWords();
            this.$emit("guessedWords", this.guessedWords);
            this.guessedWords = [];
        },
        handleContinue() {
            if (this.isDisplayingWords) {
                this.isDisplayingWords = false;
            } else {
                this.emitGuessedWords();
            }
        },
    },
};
</script>

<style lang="css" scoped>
.carousel {
    display: flex;
    top: 50%;
    overflow-x: scroll;
    padding: 1rem 3rem;
}

.carousel-card {
    background: var(--color-foreground);
    width: 21rem;
    height: 16rem;
    flex-shrink: 0;
    /* max-width: 21rem; */
    border-radius: 1rem;
    display: grid;
    place-items: center;
    text-align: center;
}

.carousel-word {
    font-size: 2rem;
    color: var(--color-text-foreground);
    min-height: 1rem;
    width: 90%;
    background-color: var(--color-foreground);
}
.carousel-word:focus {
    outline: none;
}
.carousel-card:not(:first-child) {
    margin-left: 3rem;
}
.underline {
    border-bottom: 2px solid var(--color-text-foreground);
}
.button {
    position: relative;
    left: 50%;
    top: 4rem;
    transform: translate(-50%, -50%);
}
.input-field {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 80%;
}

.input-box {
    width: 100%;
    border: 0;
    border-bottom: 2px solid var(--color-text-foreground);
    text-align: center;
    font-size: 2rem;
}

.input-box:focus {
    border: 0;
    outline: 0;
    border-bottom: 2px solid var(--color-text-foreground);
}

.input-label {
    visibility: hidden;
    position: absolute;
    top: -2rem;
}

@media (max-width: 50em) {
    .carousel {
        flex-direction: column;
        width: 100%;
        padding: 0 1rem;
    }
    .carousel-card:not(:first-child) {
        margin-left: 0;
        margin-top: 2rem;
    }
    .carousel-card {
        height: 10rem;
        width: 100%;
    }
}
</style>
