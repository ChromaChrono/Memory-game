<template>
    <div class="list-of-words">
        <div
            v-for="(word, key) in wordTable.words"
            :key="word.id"
            class="word"
            :class="[word.correct ? 'success-text' : 'danger-text']"
        >
            {{ key }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        wordTable: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.list-of-words {
    font-size: 1.5rem;
    background: var(--color-foreground);
    max-width: 20rem;
    width: 100%;
    max-height: 40rem;
    overflow-y: scroll;
    padding: 2rem;
    border-radius: 1rem;
}
</style>
