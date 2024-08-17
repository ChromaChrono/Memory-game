import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/css/reset.css";
import "./assets/css/base.css";
import "./assets/css/colors.css";
import App from "./App.vue";
import router from "./router/index.js";
import { initFirebase, auth } from "./includes/firebase";
import { onAuthStateChanged } from "firebase/auth";

initFirebase();

let app;

onAuthStateChanged(auth, () => {
    if (!app) {
        app = createApp(App);
        app.use(createPinia());
        app.use(router);
        app.mount("#app");
    }
});
