<script setup>
import BaseInputField from "./BaseInputField.vue";
import BaseButton from "./BaseButton.vue";
import BaseFormBox from "./BaseFormBox.vue";
import { mapActions } from "pinia";
import useAuthStore from "../stores/auth";
import BaseAuthStatusBox from "./BaseAuthStatusBox.vue";
import router from "../router/index";
</script>

<template>
    <div class="signup">
        <div class="signup-title"></div>
        <form @submit.prevent="submit" novalidate="true">
            <BaseFormBox
                :formSubmissionError="login_error"
                :title="'sign in'"
                :errorMessage="'There appears to be an error, please try again later.'"
            >
                <template #link-top>
                    <router-link :to="{ name: 'memory-game' }"
                        >Back to start</router-link
                    >
                </template>
                <BaseInputField
                    :inputType="'email'"
                    :inputLabel="'Email:'"
                    v-model:value="email"
                ></BaseInputField>
                <BaseInputField
                    :inputType="'password'"
                    :inputLabel="'Password:'"
                    v-model:value="password"
                ></BaseInputField>
                <BaseButton
                    :disabled="login_in_submission"
                    :btnText="'Sign in'"
                    @click="submit"
                ></BaseButton>
                <BaseAuthStatusBox
                    v-if="statusMessage"
                    :messageType="login_error ? 'error' : 'success'"
                    :statusMessage="statusMessage"
                    :message="statusMessage"
                ></BaseAuthStatusBox>
                <router-link :to="{ name: 'sign-up' }" class="link"
                    >Don't have an account?</router-link
                >
            </BaseFormBox>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            login_in_submission: false,
            login_error: false,
            statusMessage: "",
            successMessage: "Success! You are logged in. Redirecting. . .",
            errorMessage:
                "There appears to be a problem, please make sure your email and password are correct or try again later",
        };
    },
    methods: {
        ...mapActions(useAuthStore, ["signIn"]),
        handleNavToSignUp() {
            this.$emit("navToSignUp", true);
        },
        handleNavToStartScreen() {
            router.push("/");
        },
        async submit() {
            this.formSubmissionError = false;
            this.login_in_submission = true;
            try {
                await this.signIn(this.email, this.password);
                this.statusMessage = this.successMessage;
                setTimeout(() => {
                    this.handleNavToStartScreen();
                }, 2500);
            } catch {
                this.login_error = true;
                this.login_in_submission = false;
                this.statusMessage = this.errorMessage;
            }
        },
    },
};
</script>

<style scoped></style>
