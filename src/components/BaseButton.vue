<template>
    <button class="button" :class="{ 'button--inverted': isColorInverted }">
        {{ btnText }}
    </button>
</template>

<script>
export default {
    props: {
        btnText: {
            type: String,
            required: true,
        },
        isColorInverted: {
            type: Boolean,
            required: false,
        },
    },
};
</script>

<style scoped>
.button {
    padding: 0.5rem 1rem;
    width: fit-content;
    background: var(--color-background);
    color: var(--color-text-background);
    border-radius: 0.5rem;
    border: none;
}
.button--inverted {
    background: var(--color-foreground);
    color: var(--color-text-foreground);
}
.button:hover {
    opacity: 0.97;
    transition: all 0.1s ease-in;
}

.button:disabled {
    background-color: var(--color-disabled);
}
</style>
