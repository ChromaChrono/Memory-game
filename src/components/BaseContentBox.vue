<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style scoped>
.container {
    padding: 2rem 2rem;
    background-color: var(--color-foreground);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 1rem;
}
.container > *:not(:first-child) {
    margin-top: 1rem;
}
.container > .button {
    margin-top: 1.5rem;
}
</style>
