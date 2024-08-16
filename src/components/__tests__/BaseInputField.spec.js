import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import BaseInputField from "../BaseInputField.vue";

describe("BaseInputField Test", () => {
    test("correct input label is applied", () => {
        const inputLabel = "label";
        const wrapper = shallowMount(BaseInputField, {
            props: {
                inputLabel,
                inputType: "identification",
                invalid: {
                    isInvalid: false,
                    text: "problem with input",
                },
                value: "",
            },
        });
        const labelWrapper = wrapper.find("label");
        expect(labelWrapper.text()).toBe(inputLabel);
    });

    test("correct input type is applied", () => {
        const inputType = "text";
        const wrapper = shallowMount(BaseInputField, {
            props: {
                inputLabel: "label",
                inputType,
                invalid: {
                    isInvalid: false,
                    text: "problem with input",
                },
                value: "",
            },
        });
        const inputWrapper = wrapper.find(".input");
        expect(inputWrapper.attributes().type).toBe(inputType);
    });

    test("correct value is applied", () => {
        const value = "exampleValue";
        const wrapper = shallowMount(BaseInputField, {
            props: {
                inputLabel: "label",
                inputType: "identification",
                invalid: {
                    isInvalid: false,
                    text: "problem with input",
                },
                value,
            },
        });
        const inputWrapper = wrapper.find(".input");
        expect(inputWrapper.attributes().value).toBe(value);
    });

    test("correct text is rendered if input is invalid", () => {
        const invalid = {
            isInvalid: true,
            text: "problem with input",
        };
        const wrapper = shallowMount(BaseInputField, {
            props: {
                inputLabel: "label",
                inputType: "identification",
                invalid,
                value: "",
            },
        });
        const spanWrapper = wrapper.find(".invalid");
        expect(spanWrapper.text()).toBe(invalid.text);
    });

    test("correct class is applied if input is invalid", () => {
        const invalid = {
            isInvalid: true,
            text: "problem with input",
        };
        const wrapper = shallowMount(BaseInputField, {
            props: {
                inputLabel: "label",
                inputType: "identification",
                invalid,
                value: "",
            },
        });
        const fieldWrapper = wrapper.find(".field");
        expect(fieldWrapper.attributes().class).toContain("invalid-field");
    });
});
