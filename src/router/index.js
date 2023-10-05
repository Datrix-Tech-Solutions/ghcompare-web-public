import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/test",
    name: "Test",
    component: () =>
      import(/* webpackChunkName: "test" */ "../views/TestRoute.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-link",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      if (to.hash == "#enroll") {
        return {
          el: to.hash,
          top: 80,
          behavior: "smooth",
        };
      }
      return {
        el: to.hash,
        top: 80,
        //   behavior: 'smooth',
      };
    }

    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
