import { describe, test, expect, beforeEach, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import BaseSignUpForm from "../BaseSignUpForm.vue";

import { createTestingPinia } from "@pinia/testing";
import useAuthStore from "../../stores/auth";

describe("BaseSignUpForm Submission success test", () => {
    let wrapper;
    let store;
    beforeEach(() => {
        wrapper = shallowMount(BaseSignUpForm, {
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn(),
                    }),
                ],
            },
        });
        wrapper.setData({
            username: "name",
        });
        vi.mock("../../assets/js/isPasswordValid", () => {
            return {
                default: vi.fn(() => true),
            };
        });
        vi.mock("../../assets/js/isEmailValid", () => {
            return {
                default: vi.fn(() => true),
            };
        });
        store = useAuthStore();
        store.register = vi.fn(() => {
            return Promise.resolve();
        });
    });
    test("valid credentials render success status message", async () => {
        await wrapper.vm.submit();

        expect(wrapper.vm.statusMessage).toBe(
            wrapper.vm.submissionSuccessMessage,
        );
    });
    test("register to be called once", async () => {
        await wrapper.vm.submit();
        expect(store.register).toHaveBeenCalledOnce();
    });
});

describe("BaseSignUpForm Submission error test", () => {
    let wrapper;
    let store;
    beforeEach(() => {
        wrapper = shallowMount(BaseSignUpForm, {
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn(),
                    }),
                ],
            },
        });
        wrapper.setData({
            username: "name",
        });
        vi.mock("../../assets/js/isPasswordValid", () => {
            return {
                default: vi.fn(() => true),
            };
        });
        vi.mock("../../assets/js/isEmailValid", () => {
            return {
                default: vi.fn(() => true),
            };
        });
        store = useAuthStore();
        store.register = vi.fn(() => {
            return Promise.reject();
        });
    });
    test("invalid credentials render error status message", async () => {
        await wrapper.vm.submit();

        expect(wrapper.vm.statusMessage).toBe(
            wrapper.vm.submissionErrorMessage,
        );
    });
    test("successful submission displays success status message", () => {});
    test("failed submission displays error status message", () => {});
});
