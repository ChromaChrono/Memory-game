import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import TheStartScreen from "../TheStartScreen.vue";
import BaseSettingField from "../BaseSettingField.vue";

describe("TheStartScreen Test", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(TheStartScreen);
    });
    afterEach(() => {
        wrapper.unmount();
    });

    test("start button emits chosen settings", async () => {
        expect.assertions(2);
        const wrapperSettingField = wrapper.findComponent(BaseSettingField);
        const wrapperButton = wrapperSettingField.find(".button");
        await wrapperButton.trigger("click");

        expect(wrapper.emitted().settings).toHaveLength(1);
        expect(wrapper.emitted().settings[0]).toEqual([
            {
                timeInSeconds: 60,
                wordCount: 10,
            },
        ]);
    });
});
