<template>
    <div id="default-modal" tabindex="-1" aria-hidden="true"
        class="  fixed top-0 right-0 left-0 bottom-0 z-50 flex bg-black/50 justify-center items-center w-full h-full">
        <div class="relative p-4 w-full max-w-[500px] h-[80%]">

            <!-- content -->
            <div class=" bg-white rounded-md py-8 px-8 relative">
                <!-- close modal -->
                <button type="button" @click="$emit('close-modal')"
                    class="absolute right-6 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="default-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>

                <div class="">
                    <h3 class="text-2xl font-bold mb-3 text-primary">Payment Details</h3>

                    <p class="">You will be debited an amount of <span class=" text-xl font-bold text-primary">GHS{{
                        parseInt(amount).toFixed(2) }}</span> on successful payment</p>

                    <form class="mt-2 space-y-5" @submit.prevent="submitPayment">
                        <div class="">
                            <label for="momo" class="label">Momo Merchant</label>
                            <select name="momo" id="momo" class="w-full" required v-model="paymentDetails.network_code">
                                <option disabled value="">Select momo merchant</option>
                                <template v-for="momo in momoOptions" :key="momo.id">
                                    <option :value="momo.code">{{ momo.name }}</option>
                                </template>
                            </select>
                        </div>

                        <div class="">
                            <label for="number" class="label !mb-0">Phone Number</label>
                            <small class="mb-2 inline-block">Check for accuracy of your phone number</small>
                            <input type="text" id="number" class="w-full" required
                                v-model="paymentDetails.mobile_number" />
                        </div>

                        <div class="mt-10">

                            <span v-if="prompt" class="text-sm text-green-600 inline-block mb-1">Payment has been
                                initiated! Approve
                                on your mobile
                                device</span>
                            <button class="button-primary w-full h-12 flex justify-center items-center">
                                <Loader v-if="loading" class="" />
                                <span v-else>Pay</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import Loader from '../ui/Loader.vue';
import { CheckBadgeIcon } from '@heroicons/vue/24/outline';
import { api } from '../../api/api';
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { socket, state } from '../../socket'
import { useRoute, useRouter } from 'vue-router';
import { useUnderwritingDataStore } from '../../store/underwritingData';

const props = defineProps({
    amount: String,
    institutionSlug: String,
    policyId: String,
    insuranceType: String,
    institutionId: Number,
})

const momoOptions = [
    {
        "id": 1,
        "name": "AIRTEL",
        "code": "AIR"
    },
    {
        "id": 3,
        "name": "MTN",
        "code": "MTN"
    },
    {
        "id": 4,
        "name": "TIGO",
        "code": "TIG"
    },
    {
        "id": 2,
        "name": "VODAFONE",
        "code": "VOD"
    }
]
const underwritingDataStore = useUnderwritingDataStore()
const paymentStatus = ref("Unpaid")
const intervalId = ref()
const route = useRoute()
const router = useRouter()
const transactionId = ref()
const paymentDetails = ref({
    network_code: "",
    mobile_number: underwritingDataStore.underwritingData.personalData.mobile_number,
    // institution_id: route.params.institutionId,
    policyId: props.policyId,
    amount: 1
})
const loading = ref(false)
const prompt = ref(false)
const showSuccess = ref(false)

watch(paymentStatus, (newStatus) => {
    if (newStatus.toLowerCase() === 'paid') {
        // console.log(underwritingDataStore.paymentSuccessData)
        router.push({ name: 'PaymentSuccess', params: { insuranceType: props.insuranceType, institutionSlug: props.institutionSlug, institutionId: props.institutionId } })
        showSuccess.value = true
    }
    // console.log(newStatus)
})

const connect = () => {
    socket.emit("get_status", {
        transaction_id: transactionId.value,
        institution_slug: props.institutionSlug,
    });
    socket.on("response", (data) => {
        // console.log("response received:", data);
        paymentStatus.value = data?.data?.status;
        underwritingDataStore.paymentSuccessData = data
    });
    // console.log(props.transactionId, props.institutionSlug)
}

async function submitPayment() {
    // // console.log(paymentDetails.value)
    try {
        loading.value = true
        intervalId.value = setInterval(() => { connect() }, 2000)
        const { data } = await api.post('/motor/make-payment', paymentDetails.value)
        transactionId.value = data.transaction_id
        socket.connect();
        prompt.value = true
        // console.log(data)
    } catch (error) {
        loading.value = false
        // console.log(error)
    }
    // console.log(paymentDetails.value)

}

onMounted(() => {
    document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
    document.body.style.overflow = 'auto'
    socket.disconnect()
    clearInterval(intervalId.value)
})
</script>

<style lang="scss" scoped></style>