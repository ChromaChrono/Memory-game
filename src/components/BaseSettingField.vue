<script setup>
import BaseButton from "./BaseButton.vue";
import BaseContentBox from "./BaseContentBox.vue";
import { auth } from "../includes/firebase";
</script>

<template>
    <BaseContentBox>
        <div class="welcome-message">Welcome {{ loggedInUser }}</div>
        <div class="setting-field">
            <label for="time">Time (seconds):</label>
            <br />
            <input
                type="number"
                id="time"
                value="60"
                v-model="settings.timeInSeconds"
            />
        </div>
        <div class="setting-field">
            <label for="wordCount"
                >Words:
                <span class="danger-text">{{
                    settings.wordCount >= 1000 ? "max words is 1000" : ""
                }}</span></label
            >
            <br />
            <input
                type="number"
                id="wordCount"
                value="10"
                v-model="settings.wordCount"
            />
        </div>
        <BaseButton
            :btnText="'Start'"
            @click="startGame"
            :disabled="loadingGame || settings.wordCount > 1000"
        >
            {{ loadingGame ? "loading" : "start" }}
        </BaseButton>
        <a href="#signIn" @click="handleNavToSignIn">Log into account?</a>
        <a href="#signUp" @click="handleNavToSignUp">New? Make an account?</a>
    </BaseContentBox>
</template>

<script>
export default {
    data() {
        return {
            settings: {
                timeInSeconds: 60,
                wordCount: 10,
            },
            loadingGame: false,
            loggedInUser: "",
        };
    },
    created() {
        if (auth.currentUser) {
            this.loggedInUser = auth.currentUser.displayName;
        }
    },
    methods: {
        startGame() {
            if (this.wordCount > 1000) {
                this.wordCount = 1000;
            }
            this.loadingGame = true;
            this.$emit("settingValues", this.settings);
        },
        handleNavToSignIn() {
            this.$emit("navToSignIn", true);
        },
        handleNavToSignUp() {
            this.$emit("navToSignUp", true);
        },
    },
};
</script>

<style scoped>
.setting-fields {
    background: var(--color-foreground);
    border-radius: 1rem;
    padding: 1rem 2rem;
    border: 1px solid var(--color-text-foreground);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
}

.setting-field {
    margin-bottom: 0.75rem;
    color: var(--color-black);
    width: 100%;
}

.setting-field > input {
    height: 2.5rem;
    font-size: 1rem;
    width: 100%;
}
</style>
