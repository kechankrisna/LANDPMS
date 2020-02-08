import Vue from "vue";
import VueRouter from "vue-router";
import { createRouterLayout } from "vue-router-layout";

Vue.use(VueRouter);

import store from "./store/store";
import Profile from "./pages/Profile.vue";
import Register from "./pages/Register.vue";
import Reset from "./pages/password/Reset.vue";
import ResetSuccess from "./pages/password/ResetSuccess.vue";
import Login from "./pages/Login.vue";
import Verify from "./pages/Verify.vue";

// Create <RouterLayout> component.
const RouterLayout = createRouterLayout(layout => {
    // Resolves a layout component with layout type string.
    return import("./layouts/" + layout + ".vue");
});

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",

            // Pass <RouterLayout> as the route component
            component: RouterLayout,
            children: [
                {
                    path: "",
                    name: "home",
                    component: () => import("./pages/Home.vue")
                },
                {
                    path: "/chart",
                    name: "chart",
                    component: () => import("./pages/Chart.vue"),
                },
                {
                    path: "/dashboard",
                    name: "dashboard",
                    component: () => import("./pages/Dashboard.vue"),
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: "/register",
                    name: "register",
                    component: Register
                },
                {
                    path: "/password/reset",
                    name: "reset",
                    component: Reset
                },
                {
                    path: "/password/resetsuccess",
                    name: "resetsuccess",
                    component: ResetSuccess
                },
                {
                    path: "/login",
                    name: "login",
                    component: Login
                },
                {
                    path: "/verify",
                    name: "verify",
                    component: Verify
                },
                {
                    path: "/profile",
                    name: "profile",
                    component: Profile,
                    meta: {
                        requiresAuth: true
                    }
                },
                { path: "*", component: () => import("./pages/NotFound.vue") }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

export default router;
