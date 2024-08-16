import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import BaseAuthStatusBox from "../BaseAuthStatusBox.vue";

describe("BaseAuthStatusBox Test", () => {
    test("message renders correctly", () => {
        const message = "This is a message to be rendered";
        const messageType = "success";
        const wrapper = shallowMount(BaseAuthStatusBox, {
            props: {
                message,
                messageType,
            },
        });

        expect(wrapper.text()).toBe(message);
    });

    test("message type success correctly applies class ", () => {
        const message = "This is a message to be rendered";
        const messageType = "success";
        const wrapper = shallowMount(BaseAuthStatusBox, {
            props: {
                message,
                messageType,
            },
        });

        expect(wrapper.attributes().class).toContain("success");
    });

    test("message type error correctly applies class ", () => {
        const message = "This is a message to be rendered";
        const messageType = "error";
        const wrapper = shallowMount(BaseAuthStatusBox, {
            props: {
                message,
                messageType,
            },
        });

        expect(wrapper.attributes().class).toContain("error");
    });
});
