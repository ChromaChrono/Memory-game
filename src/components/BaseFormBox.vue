<script setup>
import BaseContentBox from "./BaseContentBox.vue";
</script>

<template>
    <div class="form-box">
        <BaseContentBox>
            <slot name="link-top"></slot>
            <div class="title">{{ title }}</div>
            <slot></slot>
        </BaseContentBox>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.title {
    font-size: 2rem;
    font-weight: 700;
    text-transform: capitalize;
}
</style>
