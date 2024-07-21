<template>
    <div
        class="status-box"
        :class="[
            { success: messageType === 'success' },
            { error: messageType === 'error' },
        ]"
    >
        {{ message }}
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: false,
        },
        messageType: {
            type: String,
            required: false,
        },
    },
};
</script>

<style scoped>
.status-box {
    padding: 0.5rem 1rem;
    text-align: center;
    border: 2px solid var(--color-background);
    border-radius: 0.5rem;
    font-weight: 500;
}
.success {
    background-color: var(--color-success);
}
.error {
    background-color: var(--color-danger);
    color: var(--color-white);
}
</style>
