<script setup>
import BaseSettingField from "./BaseSettingField.vue";
</script>

<template>
    <div class="settings-container">
        <BaseSettingField
            @settingValues="handleSettingValues($event)"
        ></BaseSettingField>
    </div>
</template>

<script>
export default {
    methods: {
        handleSettingValues(settings) {
            this.$emit("settings", settings);
        },
    },
};
</script>

<style scoped>
.settings-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 20rem;
}
</style>
