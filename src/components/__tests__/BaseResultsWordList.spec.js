import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import BaseResultsWordList from "../BaseResultsWordList.vue";

describe("BaseResultsWordList Test", () => {
    test("correctly renders each word from list", () => {
        const wordTable = {
            words: {
                word0: {
                    correct: false,
                    id: 1,
                },
                word1: {
                    correct: false,
                    id: 2,
                },
                word2: {
                    correct: false,
                    id: 3,
                },
                word3: {
                    correct: false,
                    id: 4,
                },
            },
        };
        const wordTableLength = 4;
        const wrapper = shallowMount(BaseResultsWordList, {
            props: {
                wordTable,
            },
        });
        const listOfWordWrappers = wrapper.findAll(".word");
        listOfWordWrappers.forEach((wrapper, i) => {
            expect(wrapper.text()).toBe(`word${i}`);
        });
        expect(listOfWordWrappers.length).toBe(wordTableLength);
    });

    test("correctly apply class to each word", () => {
        const wordTable = {
            words: {
                word0: {
                    correct: true,
                    id: 1,
                },
                word1: {
                    correct: false,
                    id: 2,
                },
                word2: {
                    correct: true,
                    id: 3,
                },
                word3: {
                    correct: false,
                    id: 4,
                },
            },
        };
        const wordTableLength = 4;
        const wrapper = shallowMount(BaseResultsWordList, {
            props: {
                wordTable,
            },
        });
        const listOfWordWrappers = wrapper.findAll(".word");
        listOfWordWrappers.forEach((wrapper, i) => {
            if (wordTable.words[`word${i}`].correct) {
                expect(wrapper.attributes().class).toContain(`success-text`);
                expect(wrapper.attributes().class).not.toContain(`danger-text`);
            } else {
                expect(wrapper.attributes().class).toContain(`danger-text`);
                expect(wrapper.attributes().class).not.toContain(
                    `success-text`,
                );
            }
        });
        expect(listOfWordWrappers.length).toBe(wordTableLength);
    });
});
