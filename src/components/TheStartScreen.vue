<script setup>
import BaseSettingField from "./BaseSettingField.vue";
import BaseSignUpForm from "./BaseSignUpForm.vue";
import BaseSignInForm from "./BaseSignInForm.vue";
</script>

<template>
    <div class="settings-container">
        <BaseSettingField
            v-if="!login"
            @settingValues="handleSettingValues($event)"
        ></BaseSettingField>
        <BaseSignInForm
            v-if="login === 'signIn'"
            @navToSignUp="handleNavToSignUp"
            @navToStartScreen="handleNavToStartScreen"
        ></BaseSignInForm>
        <BaseSignUpForm
            v-if="login === 'signUp'"
            @navToStartScreen="handleNavToStartScreen"
        ></BaseSignUpForm>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login: false,
        };
    },
    methods: {
        handleSettingValues(settings) {
            this.$emit("settings", settings);
        },
        handleNavToStartScreen() {
            this.login = false;
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
