import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASEAPIKEY,
    authDomain: "memory-game-788bf.firebaseapp.com",
    projectId: "memory-game-788bf",
    storageBucket: "memory-game-788bf.appspot.com",
    appId: "1:714942266227:web:50622ddd22b12a5a00a306",
};

let auth = "FIREBASE NOT INITIALIZED";
let db = "FIREBASE NOT INITIALIZED";
let usersCollection = "FIREBASE NOT INITIALZED";

const initFirebase = async () => {
    initializeApp(firebaseConfig);
    auth = getAuth();
    db = getFirestore();
    usersCollection = collection(db, "users");
};

export { initFirebase, auth, db, usersCollection };
