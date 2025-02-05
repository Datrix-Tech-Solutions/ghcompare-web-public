import { ref } from "vue";
import { defineStore } from "pinia";
import { api } from "../api/api";
import { useRouter } from "vue-router";
import { auth, RecaptchaVerifier, signInWithPhoneNumber, signOut } from "../firebase";
import { useToastStore } from "./toast";

function getUserFromLocalStorage() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export const useAuthStore = defineStore("auth", () => {
  const user = ref(getUserFromLocalStorage());
  const token = ref(null);
  const error = ref(null);
  const loading = ref(false);
  const confirmationResult = ref(null);
  const router = useRouter();
  const routeToNavigateTo = ref(null)
  const toast = useToastStore()
 const elementId = ref("recaptcha-container")
 const phoneNumber = ref('')

  function setupRecaptcha(resend) {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, elementId.value, {
        size: "invisible",
      });
    }
    if (resend) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, elementId.value, {
        size: "invisible",
      })
    }
  }
  async function sendOTP(number, resend=false) {
    loading.value = true;
    setupRecaptcha(resend);
    try {
      confirmationResult.value = await signInWithPhoneNumber(
        auth,
        number,
        window.recaptchaVerifier
      );
      console.log(confirmationResult.value);
      loading.value = false;
      phoneNumber.value = number
      //   otpSent = true;
      router.push({ name: "OTP" });
    } catch (err) {
      loading.value = false;
      console.error(err.message);
      toast.addToastMessage('danger', 'Failed', err.message)
      // const widgetId = await window.recaptchaVerifier.render()
      // grecaptcha.reset(widgetId)
      grecaptcha.reset(); 
      console.log(window.recaptchaVerifier)
      // elementId.value = elementId.value + '-retry'
    }
  }


  async function verifyOTP(otp) {
    try {
      loading.value = true;
      // console.log("this is the confirmation: ", confirmationResult.value)
      //confirm otp
      const result = await confirmationResult.value.confirm(otp);
      //assign user and token
      user.value = result.user;
      token.value = result;
      // save user in local storage
      localStorage.setItem("user", JSON.stringify(user.value));
      loading.value = false;

      console.log(JSON.stringify(user.value))
      // direct to home page or specified path...
      routeToNavigateTo.value ? router.push(routeToNavigateTo.value) : router.push("/");
      routeToNavigateTo.value = null
    } catch (err) {
      loading.value = false;
      console.error("Invalid OTP", err);
      toast.addToastMessage('danger', 'Failed', err.message)
    }
  }

  async function logout() {
    await signOut(auth)
    localStorage.removeItem("user")
    user.value = null
  }

  return {
    loading,
    error,
    user,
    token,
    sendOTP,
    verifyOTP,
    confirmationResult,
    logout,
    routeToNavigateTo,
    elementId,
    phoneNumber,
  };
});
