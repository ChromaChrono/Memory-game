<template>
    <div class="start-screen">
        <div class="setting-fields">
            <div class="setting-field">
                <label for="time">Time:</label>
                <br />
                <input type="number" id="time" value="60" />
            </div>
            <div class="setting-field">
                <label for="wordCount">Words:</label>
                <br />
                <input type="number" id="wordCount" value="10" />
            </div>
            <button @click="startGame">Start</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timeMS: 60000,
            wordCount: 10,
        };
    },
    methods: {
        startGame() {
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
    background: black;
    display: grid;
    place-items: center;
}

.setting-fields {
    background: white;
    border-radius: 1rem;
    padding: 1rem 2rem;
}

.setting-field {
    margin-bottom: 0.75rem;
}

button {
    border: 1px solid black;
    margin-top: 1rem;
}
</style>
