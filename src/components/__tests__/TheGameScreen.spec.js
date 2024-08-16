import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import TheGameScreen from "../TheGameScreen.vue";

describe("TheGameScreen Test", () => {
    test("word list provided as props", () => {
        const wordList = ["apple", "sword", "computer", "keyboard"];
        const wrapper = shallowMount(TheGameScreen, {
            props: {
                wordList,
            },
        });

        expect(wrapper.props().wordList).toStrictEqual(wordList);
    });
    test("guessed words correctly saved", () => {
        const guessedWordsList = ["apple", "sword", "computer", "keyboard"];
        const wrapper = shallowMount(TheGameScreen);

        wrapper.vm.saveGuessedWords(guessedWordsList);

        expect(wrapper.vm.guessedWordsList).toStrictEqual(guessedWordsList);
    });
    test("guessed words are emitted", () => {
        const guessedWordsList = ["apple", "sword", "computer", "keyboard"];
        const wrapper = shallowMount(TheGameScreen);
        wrapper.setData({ guessedWordsList });
        wrapper.vm.handleContinue();
        expect(wrapper.emitted().guesses[0][0]).toStrictEqual(guessedWordsList);
    });
});
