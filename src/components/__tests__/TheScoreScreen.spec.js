import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import TheScoreScreen from "../TheScoreScreen.vue";
import BaseAuthStatusBox from "../BaseAuthStatusBox.vue";

describe("The Score screen", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(TheScoreScreen, {
            props: {
                totalWords: 10,
                finalScore: 7,
                wordTable: {},
                savingError: false,
                dailyHighScores: {},
            },
        });
    });
    afterEach(() => {
        wrapper.unmount();
    });
    test("handle restart works correctly", async () => {
        const wrapperButton = wrapper.find(".button");

        await wrapperButton.trigger("click");

        expect(wrapper.emitted().restart[0][0]).toBe(true);
    });
    test("status box is rendered on saving error", async () => {
        await wrapper.setProps({ savingError: true });
        const statusBox = wrapper.findComponent(BaseAuthStatusBox);
        expect(statusBox.text()).toContain(wrapper.vm.statusBoxErrorMessage);
    });
});
