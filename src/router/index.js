import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/motor-insurance",
    name: "MotorInsurance",
    component: () =>
      import(/* webpackChunkName: "MotorInsurance" */ "../views/MotorInsurance.vue"),
      meta: {
        insuranceType: 'motor-insurance'
      }
  },
  {
    path: "/:insuranceType/premium",
    name: "Premium",
    component: () =>
      import(/* webpackChunkName: "MotorInsurance" */ "../views/PremiumPage.vue"),
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
