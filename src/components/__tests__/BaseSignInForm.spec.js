import { describe, test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import useAuthStore from "../../stores/auth";
import BaseSignInForm from "../BaseSignInForm.vue";

describe("BaseSignInForm Test", () => {
    test("sign in succeeds", async () => {
        const wrapper = mount(BaseSignInForm, {
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn(),
                    }),
                ],
            },
        });

        const store = useAuthStore();

        store.signIn = vi.fn(() => {
            return Promise.resolve();
        });

        const buttonWrapper = wrapper.find(".button");
        await buttonWrapper.trigger("click");
        const authStatusBoxWrapper = wrapper.find(".status-box");

        const successMessage = wrapper.vm.successMessage;

        expect(store.signIn).toBeCalledTimes(1);
        expect(authStatusBoxWrapper.text()).toBe(successMessage);
    });
    test("sign in fails", async () => {
        const wrapper = mount(BaseSignInForm, {
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn(),
                    }),
                ],
            },
        });

        const store = useAuthStore();

        store.signIn = vi.fn(() => {
            return Promise.reject();
        });

        const buttonWrapper = wrapper.find(".button");
        await buttonWrapper.trigger("click");
        const authStatusBoxWrapper = wrapper.find(".status-box");

        const errorMessage = wrapper.vm.errorMessage;

        expect(store.signIn).toBeCalledTimes(1);
        expect(authStatusBoxWrapper.text()).toBe(errorMessage);
    });
});
