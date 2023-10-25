import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";

const routes = [
  //Home page
  {
    path: "/",
    alias: "/home",
    name: "LandingPage",
    component: LandingPage,
  },

  //Contact page
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/ContactUs.vue"),
  },

  //Contact page
  {
    path: "/about-us",
    name: "AboutUs",
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/AboutUs.vue"),
  },

  //Motor insurance
  {
    path: "/motor-insurance",
    name: "MotorInsurance",
    component: () =>
      import(
        /* webpackChunkName: "MotorInsurance" */ "../views/MotorInsurance.vue"
      ),
    meta: {
      insuranceType: "motor-insurance",
    },
  },

  //Home insurance
  {
    path: "/home-insurance",
    name: "HomeInsurance",
    component: () =>
      import(
        /* webpackChunkName: "HomeInsurance" */ "../views/HomeInsurance.vue"
      ),
    meta: {
      insuranceType: "home-insurance",
    },
  },

  //display premium ( motor insurance )
  {
    path: "/:insuranceType/premium",
    name: "Premium",
    component: () =>
      import(
        /* webpackChunkName: "MotorInsurancePremium" */ "../views/PremiumPage.vue"
      ),
  },

  //display premium ( home insurance )
  {
    path: "/home-insurance/premium",
    name: "HomePremium",
    component: () =>
      import(/* webpackChunkName: "HomePremium" */ "../views/HomePremium.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-link",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      if (to.hash == "#start-comparing") {
        return {
          el: to.hash,
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
