<template>
    <div class="flex items-center justify-center min-h-screen bg-[#f0f3f5] max-width">
        <div class="w-full max-w-sm">
            <div class="flex items-center justify-center mb-8">
                <img src="../../assets/logo.png" alt="">
            </div>
            <p v-if="mess" class="p-2 text-center" :class="stat ? 'bg-green-400/50' : 'bg-red-400/50'">{{ mess }}</p>
            <form @submit.prevent="handleLogin" class="space-y-6 bg-white rounded p-8">
                <div class="">
                    <label for="login" class="label">Enter your phone number</label>
                    <div class="mb-4">
                        <input type="text" class="w-full" />
                    </div>
                    <Button class="w-full">
                        Login
                    </Button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import Button from '../../components/ui/Button.vue'
import { onUnmounted, ref } from 'vue';
// import { useAuthStore } from '@/stores/authentication';
import { useRouter } from 'vue-router';
// import { Icon } from '@iconify/vue';

const email = ref('');
// const authStore = useAuthStore()
const router = useRouter()
const mess = ref('')
const stat = ref(false)
const timeout = ref()

const handleLogin = async () => {
    // Handle login logic here
    console.log('Email:', email.value);
    const { status, message } = await authStore.login({ email: email.value })
    mess.value = message
    stat.value = status
    if (status) {
        timeout.value = setTimeout(() => {
            router.push({ name: 'OTP' })
        }, 3000)
    } else {
        timeout.value = setTimeout(() => {
            mess.value = ''
        }, 5000)
    }
};

onUnmounted(() => {
    clearTimeout(timeout.value)
})

</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is being used */
</style>
