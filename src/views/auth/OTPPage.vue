<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-[#f0f3f5] max-width">

        <div class="flex items-center justify-center mb-8">
            <img src="../../assets/logo.png" alt="">
        </div>

        <div class="max-w-fit bg-white rounded p-8">
            <label class="text-2xl font-bold mb-4 text-center label">Enter OTP</label>
            <p v-if="mess" class="p-2 text-center mb-4" :class="stat ? 'bg-green-400/50' : 'bg-red-400/50'">{{ mess }}
            </p>
            <div class="flex gap-2 mb-6">
                <input v-for="(digit, index) in otp" :key="index" type="text" maxlength="1"
                    class="shrink sm:w-12 sm:h-12  min-[375px]:w-10 min-[375px]:h-10 w-8 h-8 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    v-model="otp[index]" @input="onInput(index, $event)" @keydown="onKeydown(index, $event)"
                    @paste="onPaste($event)" />
            </div>
            <Button class="w-full" @click="confirmOtp">
                Confirm OTP
            </Button>
            <p class="text-center mt-4 text-sm">
                Didn't receive code?
                <a href="#" :class="{ 'text-primary hover:underline': timer === 0, 'text-gray-500': timer > 0 }"
                    @click="resendOtp" :disabled="timer > 0">
                    Resend OTP
                </a>
                <span v-if="timer > 0">({{ timer }}s)</span>
            </p>
        </div>
    </div>

</template>

<script setup>
import Button from '../../components/ui/Button.vue'
import { ref, onMounted, onUnmounted } from 'vue';
// import { useAuthStore } from '@/stores/authentication';
import { useRouter } from 'vue-router';

// const authStore = useAuthStore()
const router = useRouter()
// const mess = ref('')
const stat = ref(false)
const timeout = ref()
const otp = ref(['', '', '', '', '', '']);
const timer = ref(30);

const onInput = (index) => {
    if (otp.value[index].length === 1 && index < otp.value.length - 1) {
        document.querySelectorAll('input')[index + 1].focus();
    }
};

const onKeydown = (index, event) => {
    if (event.key === 'Backspace' && otp.value[index] === '' && index > 0) {
        document.querySelectorAll('input')[index - 1].focus();
    }
};

const onPaste = (event) => {
    const paste = event.clipboardData.getData('text');
    if (paste.length === otp.value.length) {
        otp.value = paste.split('');
        document.querySelectorAll('input')[otp.value.length - 1].focus();
    }
};

const confirmOtp = async () => {
    // alert(`OTP Entered: ${otp.value.join('')}`);
    // Handle login logic here
    if (otp.value.join('').length !== 6) {
        mess.value = "Enter 6-character OTP"
        timeout.value = setTimeout(() => {
            mess.value = ''
        }, 3000)
        return;
    }
    const { status, message } = await authStore.loginWithOTP(otp.value.join(''))
    mess.value = message
    stat.value = status
    if (status) {
        timeout.value = setTimeout(() => {
            router.push({ name: 'StaffRequests' })
        }, 3000)
    } else {
        timeout.value = setTimeout(() => {
            mess.value = ''
        }, 5000)
    }
};

const resendOtp = async () => {
    if (timer.value === 0) {
        // Logic to resend OTP
        timer.value = 30;
        startTimer();
        const email = localStorage.getItem('OTPmail')
        const { status, message } = await authStore.login({ email })
        mess.value = message
        stat.value = status
        if (status) {
            timeout.value = setTimeout(() => {
                mess.value = ''
            }, 5000)
        } else {
            timeout.value = setTimeout(() => {
                mess.value = ''
            }, 5000)
        }

    }
};

const startTimer = () => {
    const interval = setInterval(() => {
        if (timer.value > 0) {
            timer.value--;
        } else {
            clearInterval(interval);
        }
    }, 1000);
};

onMounted(() => {
    startTimer();
});

onUnmounted(() => {
    clearTimeout(timeout.value)
})
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

a:disabled {
    pointer-events: none;
}
</style>
