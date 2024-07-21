import { defineStore } from "pinia";
import { db } from "../includes/firebase.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default defineStore("auth", {
    state: () => ({
        userLoggedIn: false,
    }),
    getters: {},
    actions: {
        async register(email, password, username) {
            const auth = await getAuth();
            const userCred = await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            );
            await setDoc(doc(db, "users", userCred.user.uid), {
                username: username,
                email: email,
            });
            updateProfile(auth.currentUser, {
                displayName: username,
            });

            this.userLoggedIn = true;
        },
        async signIn(email, password) {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password);
            this.userLoggedIn = true;
        },
    },
});
