import { describe, test, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import useAuthStore from "../auth.js";

describe("auth store test", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        vi.mock("firebase/auth", () => ({
            getAuth() {
                return {};
            },
            signInWithEmailAndPassword() {
                Promise.resolve();
            },
        }));
    });

    test("signIn sets loggedIn value to true", async () => {
        expect.assertions(1);
        const auth = useAuthStore();
        // signInWithEmailAndPassword = vi.fn().mockImplementationOnce(() => {
        //     return Promise.resolve();
        // });
        // getAuth = vi.fn().mockImplementationOnce(() => {
        //     return {};
        // });
        await auth.signIn();
        expect(auth.userLoggedIn).toBe(true);
    });
});
