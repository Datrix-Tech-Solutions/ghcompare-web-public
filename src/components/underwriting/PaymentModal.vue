<template>

    <!-- Main modal -->
    <div id="default-modal" tabindex="-1" aria-hidden="true"
        class="  fixed top-0 right-0 left-0 bottom-0 z-50 flex bg-black/50 justify-center items-center w-full h-full">
        <div class="relative p-4 w-full max-w-3xl h-[80%]">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow h-full  ">
                <!-- {{ paymentStatus }} -->
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 ">
                    <h3 class="text-xl font-semibold text-gray-900 ">
                        Motor Insurance Payment
                    </h3>
                    <button type="button" @click="$emit('close-modal')"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="default-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5 space-y-4 h-[80%]">
                    <iframe v-if="paymentLink" :src="paymentLink" frameborder="0" class="w-full h-full"
                        name="myFrame"></iframe>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { socket, state } from '../../socket'
import { routerKey, useRoute, useRouter } from 'vue-router';
// import { usePaymentSocketStore } from '../../store/paymentSocket'

const props = defineProps({
    paymentLink: String,
    institutionSlug: String,
    transactionId: String,
})

const paymentStatus = ref("Unpaid")
const intervalId = ref()
const route = useRoute()
const router = useRouter()

watch(paymentStatus, (newStatus) => {
    if (newStatus.toLowerCase() === 'paid') {
        router.push({ name: 'PaymentSuccess', params: { insuranceType: route.params.insuranceType, institutionSlug: route.params.institutionSlug, institutionId: route.params.institutionId } })
    }
})

const connect = () => {
    socket.emit("get_status", {
        transaction_id: props.transactionId,
        institution_slug: props.institutionSlug,
    });
    socket.on("response", (data) => {
        console.log("response received:", data);
        paymentStatus.value = data?.data?.status;
    });
}

onMounted(() => {
    document.body.style.overflow = 'hidden'

    socket.connect();
    intervalId.value = setInterval(() => { connect() }, 2000)
})

onUnmounted(() => {
    document.body.style.overflow = 'auto'
    socket.disconnect()
    clearInterval(intervalId.value)
})
</script>

<style scoped></style>