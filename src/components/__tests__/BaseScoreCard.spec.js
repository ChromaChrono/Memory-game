import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import BaseScoreCard from "../BaseScoreCard.vue";

describe("Testing BaseScoreCard", () => {
    test("displays score", () => {
        const totalWords = 10;
        const finalScore = 7;

        const wrapper = shallowMount(BaseScoreCard, {
            props: {
                totalWords,
                finalScore,
            },
        });

        const compositionAuthor = wrapper.find(".score");

        expect(compositionAuthor.text()).toBe(`${finalScore}/${totalWords}`);
    });
});
