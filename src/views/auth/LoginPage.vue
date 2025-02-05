<template>
    <div class="flex items-center justify-center min-h-screen bg-[#f0f3f5] max-width">
        <div class="w-full max-w-sm">
            <div class="flex items-center justify-center mb-8">
                <img src="../../assets/logo.png" alt="">
            </div>
            <!-- <p v-if="mess" class="p-2 text-center" :class="stat ? 'bg-green-400/50' : 'bg-red-400/50'">{{ mess }}</p> -->
            <form @submit.prevent="handleLogin" class="space-y-6 bg-white rounded p-8">
                <div class="">
                    <label for="login" class="label">Enter your phone number</label>
                    <div class="mb-4">
                        <input type="text" class="w-full" v-model="phoneNumber" />
                    </div>
                    <Button class="w-full" :loading="authStore.loading">
                        Login
                    </Button>
                    <div :id="elementId"></div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import Button from '../../components/ui/Button.vue'
import { onUnmounted, ref } from 'vue';
import { useAuthStore } from '../../store/auth'
import { useRouter } from 'vue-router';

const phoneNumber = ref('');
const authStore = useAuthStore()
const router = useRouter()
const mess = ref('')
const stat = ref(false)
const timeout = ref()
const elementId = "recaptcha-container"

const handleLogin = () => {
    console.log(phoneNumber.value)

    authStore.sendOTP(elementId, phoneNumber.value)
}

</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is being used */
</style>
