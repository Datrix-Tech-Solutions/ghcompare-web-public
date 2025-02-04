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
    const router = useRouter()

    function setupRecaptcha(elementId) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          elementId,
          { size: "invisible" },
        );
      }

      async function sendOTP(elementId, phoneNumber) {
        setupRecaptcha(elementId);
        try {
          const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
          window.confirmationResult = confirmationResult;
          console.log(window.confirmationResult)
        //   otpSent = true;
        router.push({name: 'OTP'})
        } catch (error) {
          console.error(error);
        }
      }

      async function verifyOTP(otp) {
        try {
          const result = await window.confirmationResult.confirm(otp);
          user.value = result.user;
          token.value = firebase.auth.PhoneAuthProvider.credential(window.confirmationResult.verificationId, otp)
          console.log(user.value)
          console.log(token.value)
        } catch (error) {
          console.error("Invalid OTP", error);
        }
      }
  
})