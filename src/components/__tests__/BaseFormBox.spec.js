import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseFormBox from "../BaseFormBox.vue";

describe("BaseFormBox Test", () => {
    test("title renders correctly", () => {
        const title = "title";
        const wrapper = mount(BaseFormBox, {
            props: {
                title,
            },
        });

        const compositionAuthor = wrapper.find(".title");

        expect(compositionAuthor.text()).toBe(title);
    });
});
