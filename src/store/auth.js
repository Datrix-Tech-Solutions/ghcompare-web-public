import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from "../api/api";
import { useRouter } from 'vue-router'
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebase";
import firebase from 'firebase/compat/app';

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)
    const token = ref(null)
    const error = ref(null)
    const loading = ref(false)
    const confirmationResult = ref(null)
    const router = useRouter()

    function setupRecaptcha(elementId) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          elementId,
          { size: "invisible" },
        );
      }

      async function sendOTP(elementId, phoneNumber) {
        loading.value = true
        setupRecaptcha(elementId);
        try {
          confirmationResult.value = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
          console.log(confirmationResult.value)
          loading.value = false
        //   otpSent = true;
        router.push({name: 'OTP'})
        } catch (error) {
            loading.value = false
          console.error(error);
        }
      }

      async function verifyOTP(otp, route = {name: 'LandingPage'}) {
        try {
        loading.value = true
        console.log("this is the confirmation: ", confirmationResult.value)
          const result = await confirmationResult.value.confirm(otp);
          user.value = result.user;
          token.value = result
          console.log(JSON.stringify(user.value))
          console.log(JSON.stringify(token.value))
          loading.value = false
          router.push(route)
        } catch (error) {
            loading.value = false
          console.error("Invalid OTP", error);
        }
      }

      return {loading, error, user, token, sendOTP, verifyOTP, confirmationResult}
  
})