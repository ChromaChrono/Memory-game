<script setup>
import BaseInputField from "./BaseInputField.vue";
import BaseButton from "./BaseButton.vue";
import BaseFormBox from "./BaseFormBox.vue";
import isPasswordValid from "../assets/js/isPasswordValid";
import isEmailValid from "../assets/js/isEmailValid";
import BaseAuthStatusBox from "./BaseAuthStatusBox.vue";

import useAuthStore from "../stores/auth.js";
import { mapActions } from "pinia";
</script>

<template>
    <div class="signup">
        <div class="signup-title"></div>
        <form @submit.prevent="submit" novalidate="true">
            <BaseFormBox :formSubmissionError="login_error" :title="'sign up'">
                <template #link-top>
                    <a href="#startScreen" @click="handleNavToStartScreen"
                        >Back to start</a
                    >
                </template>
                <BaseInputField
                    :inputType="'text'"
                    :inputLabel="'Username:'"
                    :invalid="{
                        isInvalid: isUsernameInvalid,
                        text: 'Username not valid',
                    }"
                    v-model:value="username"
                ></BaseInputField>
                <BaseInputField
                    :inputType="'email'"
                    :inputLabel="'Email:'"
                    :invalid="{
                        isInvalid: isEmailInvalid,
                        text: 'Email not valid',
                    }"
                    v-model:value="email"
                ></BaseInputField>
                <BaseInputField
                    :inputType="'password'"
                    :inputLabel="'Password:'"
                    :invalid="{
                        isInvalid: isPasswordInvalid,
                        text: 'password not valid',
                    }"
                    v-model:value="password"
                ></BaseInputField>
                <BaseButton
                    :disabled="formSubmitting"
                    :btnText="'Sign up'"
                ></BaseButton>
                <BaseAuthStatusBox
                    v-if="statusMessage"
                    :messageType="login_error ? 'error' : 'success'"
                    :statusMessage="statusMessage"
                    :message="statusMessage"
                ></BaseAuthStatusBox>
            </BaseFormBox>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            email: "",
            password: "",
            isUsernameInvalid: false,
            isPasswordInvalid: false,
            isEmailInvalid: false,
            formSubmitting: false,
            login_error: false,
            statusMessage: "",
            submissionSuccessMessage: "Success! Thank you for signing up.",
            submissionErrorMessage:
                "There appears to be a problem, please try again later",
        };
    },
    methods: {
        ...mapActions(useAuthStore, {
            createUser: "register",
        }),
        handleNavToStartScreen() {
            this.$emit("navToStartScreen", true);
        },
        handleValidation() {
            if (!isPasswordValid(this.password)) {
                this.isPasswordInvalid = true;
            } else {
                this.isPasswordInvalid = false;
            }
            if (!isEmailValid(this.email)) {
                this.isEmailInvalid = true;
            } else {
                this.isEmailInvalid = false;
            }
            if (this.username.length < 1) {
                this.isUsernameInvalid = true;
            } else {
                this.isUsernameInvalid = false;
            }
            return (
                !this.isEmailInvalid &&
                !this.isPasswordInvalid &&
                !this.isUsernameInvalid
            );
        },
        async submit() {
            this.formSubmitting = true;
            this.login_error = false;
            if (this.handleValidation()) {
                try {
                    await this.createUser(
                        this.email,
                        this.password,
                        this.username,
                    );
                    this.statusMessage = this.submissionSuccessMessage;
                    setTimeout(() => {
                        this.handleNavToStartScreen();
                    }, 2500);
                } catch (err) {
                    console.log(err);
                    this.formSubmitting = false;
                    this.login_error = true;
                    this.statusMessage = this.submissionErrorMessage;
                }
            } else {
                this.formSubmitting = false;
            }
            this.formSubmitting = false;
        },
    },
};
</script>
