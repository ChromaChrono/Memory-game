<template>
    <div class="start-screen">
        <div class="setting-fields">
            <div class="setting-field">
                <label for="time">Time (seconds):</label>
                <br />
                <input type="number" id="time" value="60" />
            </div>
            <div class="setting-field">
                <label for="wordCount"
                    >Words:
                    <span class="danger">{{
                        this.wordCount > 100 ? "max 100" : ""
                    }}</span></label
                >
                <br />
                <input
                    type="number"
                    id="wordCount"
                    value="10"
                    v-model="wordCount"
                />
            </div>
            <button @click="startGame" :disabled="loadingGame">
                {{ loadingGame ? "loading" : "start" }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timeMS: 60000,
            wordCount: 10,
            loadingGame: false,
        };
    },
    methods: {
        startGame() {
            if (this.wordCount > 100) {
                this.wordCount = 100;
            }
            this.loadingGame = true;
            this.$emit("values", {
                timeMS: this.timeMS,
                wordCount: this.wordCount,
            });
        },
    },
};
</script>

<style scoped>
.start-screen {
    height: 100vh;
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
    background: var(--color-background);
    display: grid;
    place-items: center;
}

.setting-fields {
    background: var(--color-foreground);
    border-radius: 1rem;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.setting-field {
    margin-bottom: 0.75rem;
    color: var(--color-black);
}

.setting-field > input {
    height: 2.5rem;
    font-size: 1rem;
}
.danger {
    color: var(--color-danger);
    font-weight: bold;
    text-transform: uppercase;
}

button {
    margin-top: 1rem;
    max-width: fit-content;
    background: var(--color-text-foreground);
    color: var(--color-text-background);
}

button:disabled {
    opacity: 85%;
}
</style>
