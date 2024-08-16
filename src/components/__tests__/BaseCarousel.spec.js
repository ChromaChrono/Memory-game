import { describe, test, expect } from "vitest";
import { shallowMount, mount } from "@vue/test-utils";
import BaseCarousel from "../BaseCarousel.vue";

describe("BaseCarousel Component", () => {
    test("carousel displays words", () => {
        let wordList = [];
        const wordListLength = 10;
        while (wordList.length < wordListLength) {
            wordList.push("thisRepresentsAWord");
        }
        const wrapper = shallowMount(BaseCarousel, {
            props: {
                wordList,
            },
        });
        const listOfElements = wrapper.findAll(".carousel-word");
        listOfElements.forEach((wrapper) => {
            expect(wrapper.text()).toBe("thisRepresentsAWord");
        });
    });
    test("carousel displays correct number of words", () => {
        let wordList = [];
        const wordListLength = 10;
        while (wordList.length < wordListLength) {
            wordList.push("thisRepresentsAWord");
        }
        const wrapper = shallowMount(BaseCarousel, {
            props: {
                wordList,
            },
        });
        const listOfElements = wrapper.findAll(".carousel-word");
        expect(listOfElements).toHaveLength(wordList.length);
    });
    test("carousel reads guesses and emits guesses as array", async () => {
        const wordList = [];
        const numberOfWordsInWordList = 10;
        while (wordList.length < numberOfWordsInWordList) {
            wordList.push("thisRepresentsAWord");
        }
        const wrapper = mount(BaseCarousel, {
            props: {
                wordList,
            },
        });

        const buttonWrapper = wrapper.find(".button");
        await buttonWrapper.trigger("click");
        // expect(buttonWrapper.text()).toContain("Continue");

        const listOfElements = wrapper.findAll(".input-box");
        listOfElements.forEach((wrapper) => {
            wrapper.setValue("thisRepresentsAWord");
        });
        await buttonWrapper.trigger("click");

        expect(wrapper.emitted().guessedWords[0][0]).toHaveLength(
            wordList.length,
        );
    });
});
