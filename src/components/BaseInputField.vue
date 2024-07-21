<template>
    <div class="field" :class="{ 'invalid-field': invalid.isInvalid }">
        <label class="label" :for="inputType"
            >{{ inputLabel }}
            <span v-if="invalid.isInvalid" class="invalid">{{
                invalid.text
            }}</span></label
        >
        <input
            class="input"
            :type="inputType"
            :id="inputType"
            :value="value"
            @input="handleInput"
        />
    </div>
</template>

<script>
export default {
    props: {
        inputLabel: {
            type: String,
            required: true,
        },
        inputType: {
            type: String,
            required: true,
        },
        invalid: {
            default() {
                return {
                    isInvalid: false,
                    text: "",
                }
            },
            type: Object,
            required: false,
        },
        value: {
            type: String,
            required: false,
        },
    },
    methods: {
        handleInput(event) {
            this.$emit("update:value", event.target.value);
        },
    },
};
</script>

<style>
.field {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.invalid-field > input,
.invalid-field > input:focus {
    border: 2px solid var(--color-danger);
    outline: none;
}

.input {
    min-height: 2.5rem;
}
.invalid {
    color: var(--color-danger);
    font-weight: 500;
}
</style>
