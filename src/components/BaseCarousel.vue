<template>
    <div class="carousel" ref="carousel">
        <div v-for="word in wordList" :key="word.id" class="carousel-card">
            <div
                class="carousel-word"
                :contentEditable="!isDisplayingWords"
                @input="emitGuessedWords"
                :class="{ underline: !isDisplayingWords }"
                :id="word.id"
            >
                {{ isDisplayingWords ? word : "" }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isDisplayingWords: {
            type: Boolean,
            required: true,
        },
        wordList: {
            type: Array,
            required: false,
        },
    },
    data() {
        return {
            guessedWords: [],
        };
    },
    methods: {
        readGuessedWords() {
            const carousel = this.$refs.carousel;
            for (let i = 0; i < carousel.children.length; i++) {
                this.guessedWords.push(
                    carousel.children[i].querySelector(".carousel-word")
                        .textContent,
                );
            }
        },
        emitGuessedWords() {
            this.readGuessedWords();
            this.$emit("guessedWords", this.guessedWords);
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
