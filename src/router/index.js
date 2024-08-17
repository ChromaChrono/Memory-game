import { createRouter, createWebHashHistory } from "vue-router";
import TheMemoryGame from "../views/TheMemoryGame.vue";
import BaseSignUpForm from "../components/BaseSignUpForm.vue";
import BaseSignInForm from "../components/BaseSignInForm.vue";

const routes = [
    {
        name: "memory-game",
        path: "/",
        component: TheMemoryGame,
    },
    {
        name: "sign-up",
        path: "/sign-up",
        component: BaseSignUpForm,
    },
    {
        name: "sign-in",
        path: "/sign-in",
        component: BaseSignInForm,
    },
    {
        path: "/:catchAll(.*)*",
        redirect: { name: "memory-game" },
    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
