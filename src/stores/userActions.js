import { defineStore } from "pinia";
import { db } from "../includes/firebase.js";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default defineStore("userActions", {
    state: () => ({}),
    actions: {
        async saveNewScore(score, totalWords) {
            const auth = getAuth();
            const currentUser = auth.currentUser;
            await updateDoc(doc(db, "users", currentUser.uid), {
                scores: arrayUnion({
                    date: Date.now(),
                    score: score,
                    totalWords: totalWords,
                }),
            });
        },
        async getUserScores() {
            const auth = getAuth();
            const currentUser = auth.currentUser;
            const docSnap = await getDoc(doc(db, "users", currentUser.uid));
            if (docSnap.exists()) {
                return docSnap.data().scores;
            } else {
                throw new Error("Document does not exist");
            }
        },
    },
});
