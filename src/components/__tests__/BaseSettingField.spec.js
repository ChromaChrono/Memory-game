import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseSettingField from "../BaseSettingField.vue";

describe("BaseSettingField Test", () => {
    test("field correctly emits necessary values", async () => {
        const wrapper = mount(BaseSettingField);
        const timeInputWrapper = wrapper.find(".input-time");
        const wordCountInputWrapper = wrapper.find(".input-word-count");
        const button = wrapper.findComponent(".button");

        const timeInSeconds = 60;
        const wordCount = 10;

        await timeInputWrapper.setValue(timeInSeconds);
        await wordCountInputWrapper.setValue(10);

        await button.trigger("click");

        expect(wrapper.emitted().settingValues[0][0].wordCount).toBe(wordCount);
        expect(wrapper.emitted().settingValues[0][0].timeInSeconds).toBe(
            timeInSeconds,
        );
    });
});
