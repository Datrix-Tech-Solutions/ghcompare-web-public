import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import LayoutView from "../views/LayoutView.vue";
import { useAuthStore } from "../store/auth";

const routes = [
  //Home page
  {
    path: "/",
    name: "Layout",
    component: LayoutView,
    redirect: { name: "LandingPage" },
    children: [
      //landing page
      {
        path: "/home",
        name: "LandingPage",
        component: () =>
          import(/* webpackChunkName: "Landing" */ "../views/LandingPage.vue"),
      },

      //Contact page
      {
        path: "/contact-us",
        name: "ContactUs",
        component: () =>
          import(/* webpackChunkName: "Contact" */ "../views/ContactUs.vue"),
      },

      //About page
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

      // Underwriting page
      {
        path: "/:insuranceType/:institutionId/:institutionSlug/underwriting",
        name: "Underwriting",
        component: () =>
          import(
            /* webpackChunkName: "underwriting" */ "../views/UnderwritingPage.vue"
          ),
        props: true,
        meta: { requiresAuth: true, pathName: "Underwriting" },
        beforeEnter: [checkLoginStatus],
      },

      // Payment
      {
        path: "/:insuranceType/:institutionId/:institutionSlug/payment",
        name: "Payment",
        component: () =>
          import(/* webpackChunkName: "Payment" */ "../views/PaymentPage.vue"),
        props: true,
      },

      // Payment Success
      {
        path: "/:insuranceType/:institutionId/:institutionSlug/payment-successful",
        name: "PaymentSuccess",
        component: () =>
          import(
            /* webpackChunkName: "Payment" */ "../views/PaymentSuccess.vue"
          ),
        props: true,
      },

      // User Account
      {
        path: "/user-account",
        name: "UserAccount",
        component: () =>
          import(
            /* webpackChunkName: "User account" */ "../views/user-account/UserAccount.vue"
          ),
        meta: { requiresAuth: true },
        beforeEnter: [checkLoginStatus],
        redirect: { name: "PendingProcesses" },
        children: [
          {
            path: "pending",
            name: "PendingProcesses",
            component: () =>
              import("../views/user-account/PendingProcesses.vue"),
          },
          {
            path: "completed",
            name: "CompletedProcesses",
            component: () =>
              import("../views/user-account/CompletedProcesses.vue"),
          },
          {
            path: "claims",
            name: "Claims",
            component: () => import("../views/user-account/Claims.vue"),
          },
        ],
      },
      // transaction details
      {
        path: "/user-account/:transactionStatus/:id",
        name: "ProcessDetails",
        meta: { requiresAuth: true },
        beforeEnter: [checkLoginStatus],
        component: () =>
          import(
            /* webpackChunkName: "User account" */ "../views/user-account/ProcessDetails.vue"
          ),
      },

      //display premium ( home insurance )
      {
        path: "/home-insurance/premium",
        name: "HomePremium",
        component: () =>
          import(
            /* webpackChunkName: "HomePremium" */ "../views/HomePremium.vue"
          ),
      },

      //Why Insure?
      {
        path: "/why-insure",
        name: "WhyInsure",
        component: () =>
          import(/* webpackChunkName: "Whyinsure" */ "../views/WhyInsure.vue"),
      },

      //Policies
      {
        path: "/policies",
        name: "Policies",
        redirect: { name: "HomeDetail" },
        component: () =>
          import(
            /* webpackChunkName: "Policies" */ "../views/PoliciesDetail.vue"
          ),
        children: [
          {
            path: "motor",
            name: "MotorDetail",
            component: () =>
              import(
                /* webpackChunkName: "Motor" */ "../views/MotorDetail.vue"
              ),
          },
          {
            path: "home",
            name: "HomeDetail",
            component: () =>
              import(/* webpackChunkName: "Home" */ "../views/HomeDetail.vue"),
          },
          {
            path: "travel",
            name: "TravelDetail",
            component: () =>
              import(
                /* webpackChunkName: "Travel" */ "../views/TravelDetail.vue"
              ),
          },
        ],
      },

      //Privacy Policy
      {
        path: "/privacy-policy",
        name: "PrivacyPolicy",
        component: () =>
          import(
            /* webpackChunkName: "PrivacyPolicies" */ "../views/PrivacyPolicy.vue"
          ),
      },
    ],
  },

  //login Page
  {
    path: "/auth/login",
    name: "Login",
    component: () =>
      import(
        /* webpackChunkName: "PrivacyPolicies" */ "../views/auth/LoginPage.vue"
      ),
    beforeEnter: [userLoggedIn],
  },
  //otp Page
  {
    path: "/auth/otp",
    name: "OTP",
    component: () =>
      import(
        /* webpackChunkName: "PrivacyPolicies" */ "../views/auth/OTPPage.vue"
      ),
    beforeEnter: [userLoggedIn],
  },

  //not found
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
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
        behavior: "smooth",
      };
    }

    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

function checkLoginStatus(to, from, next) {
  const authStore = useAuthStore();
  const user = authStore.user;
  if (to.meta.requiresAuth && !user) {
    //add query params - i.e. pathname - to login so that user can be brought back after authentication
    next({ name: "Login", query: { page: to.path } });
  } else {
    next();
  }
}

function userLoggedIn(to, from, next) {
  const authStore = useAuthStore();
  authStore.user ? next({ name: "UserAccount" }) : next();
}

export default router;
