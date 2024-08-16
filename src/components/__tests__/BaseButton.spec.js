import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import BaseButton from "../BaseButton.vue";

describe("Testing BaseScoreCard", () => {
    test("button text is rendered", () => {
        const btnText = "submit";
        const wrapper = shallowMount(BaseButton, {
            props: {
                btnText,
            },
        });
        expect(wrapper.text()).toBe(btnText);
    });

    test("correct class is applied", () => {
        const isColorInverted = true;
        const wrapper = shallowMount(BaseButton, {
            props: {
                btnText: "text",
                isColorInverted,
            },
        });
        expect(wrapper.attributes().class).toBe("button button--inverted");
    });

    test("class is not applied", () => {
        const isColorInverted = false;
        const wrapper = shallowMount(BaseButton, {
            props: {
                btnText: "text",
                isColorInverted,
            },
        });
        expect(wrapper.attributes().class).toBe("button");
    });
});
