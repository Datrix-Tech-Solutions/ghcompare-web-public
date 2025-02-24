<template>
    <div class="flex items-center justify-center min-h-screen bg-[#f0f3f5] max-width">
        <div class="w-full max-w-sm">
            <div class="flex items-center justify-center mb-4">
                <router-link :to="{ name: 'LandingPage' }">
                    <img src="../../assets/logo.png" alt="">
                </router-link>
            </div>

            <p v-if="route.query.page" class="text-center text-xl font-semibold mb-4">Please login to continue</p>

            <form @submit.prevent="handleLogin" class="space-y-6 bg-white rounded p-8">
                <div class="">
                    <label for="login" class="label">Enter your phone number</label>
                    <!-- <p v-if="authStore.error" class="p-2 text-center bg-red-400/50 mb-4">{{ authStore.error }}</p> -->
                    <div class="mb-4 flex ">
                        <select v-model="selectedCountryCode" class="rounded-e-none">
                            <option v-for="country in countries" :key="country.code" :value="country.dial_code">
                                {{ country.dial_code }}
                            </option>
                        </select>

                        <input type="text" class="w-full rounded-s-none border-l-0" v-model="phoneNumber" />
                    </div>
                    <Button class="w-full" :loading="authStore.loading">
                        Login
                    </Button>

                    <!-- recapture element -->
                    <div :id="authStore.elementId"></div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import Button from '../../components/ui/Button.vue'
import { onMounted, onUnmounted, ref, computed } from 'vue';
import { useAuthStore } from '../../store/auth'
import { useRoute, useRouter } from 'vue-router';

const phoneNumber = ref('');
const selectedCountryCode = ref("+233"); // Default country code
const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const mess = ref('')
const stat = ref(false)
const timeout = ref()
const elementId = "recaptcha-container"

const handleLogin = () => {
    console.log(fullPhoneNumber.value)

    authStore.sendOTP(fullPhoneNumber.value)
}

const fullPhoneNumber = computed(() => `${selectedCountryCode.value}${phoneNumber.value}`);

onMounted(() => {
    // if route has the page query save it in the authstore...
    authStore.routeToNavigateTo = route.query.page ?? null
    console.log(authStore.routeToNavigateTo)
})

const countries = ref([
    { name: "United States", code: "US", dial_code: "+1" },
    { name: "United Kingdom", code: "GB", dial_code: "+44" },
    { name: "Canada", code: "CA", dial_code: "+1" },
    { name: "India", code: "IN", dial_code: "+91" },
    { name: "Ghana", code: "GH", dial_code: "+233" },
    { name: "Germany", code: "DE", dial_code: "+49" },
]);


</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is being used */
</style>
