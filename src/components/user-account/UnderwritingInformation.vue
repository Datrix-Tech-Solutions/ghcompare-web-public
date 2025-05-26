<template>
    <div class="">
        <!-- Alert -->
        <AlertModal v-if="showAlert" :message="responseData?.data?.message" @close="showAlert = false" />

        <!-- Payment -->
        <PaymentModal :paymentLink="paymentLink" :institution-slug="institutionSlug" :transaction-id="transactionId"
            v-if="paymentLink" @close-modal="() => { paymentLink = '' }" insurance-type="motor-insurance"
            :institutionId="institutionId" />

        <LoyaltyPaymentModal v-if="showLoyaltyModal" :institution-slug="institutionSlug" :amount="premium"
            :policy-id="policyId" @close-modal="() => { showLoyaltyModal = false }" />


        <div class="max  mx-auto bg-white p-5 py-8   rounded-lg">

            <h2 class="text-2xl font-bold mb-4 text-gray-600">Underwriting Information</h2>

            <!-- status and institution -->
            <div class="">
                <h2 class="text-xl font-semibold  ">Institution: {{ underwriting?.institution?.name }}</h2>
                <p class="my-1">Status:
                    <BadgeComponent :status="underwriting?.status" />
                </p>
                <p v-if="underwriting?.status === 'failed'" class="text-sm">Message: {{ underwriting?.response?.message
                    }}
                </p>
                <p v-if="underwriting?.status === 'payment_pending'" class="mt-3">Amount Due: <span
                        class="text-primary font-bold">GHS{{
                            underwriting?.payment[0]?.amount?.toFixed(2)
                        }}</span>
                </p>
            </div>

            <hr class="my-5">

            <!-- buyer information -->
            <div class="">
                <h3 class="text-xl font-semibold text-primary mb-3">Buyer information</h3>

                <div class="flex items-center gap-10 flex-wrap">

                    <div class="" v-for="(value, key) in underwriting?.request?.buyerData" :key="key">
                        <p class="font-semibold text-lg capitalize">{{ formatKey(key) }}</p>
                        <p>{{ value }}</p>
                    </div>
                </div>
            </div>

            <hr class="my-5">

            <div class="flex flex-end">
                <Button v-if="underwriting?.status === 'failed'" @click="resendUnderwriting" :loading="loading">
                    <span>Retry</span>
                </Button>
                <Button v-if="underwriting?.status === 'payment_pending'" @click="makePayment">
                    <span>Make payment</span>
                </Button>
            </div>

            <!-- if completed show all documents -->
            <div class="" v-if="underwriting?.status === 'completed'">
                <h3 class="text-xl font-semibold text-primary mb-3">Policy documents</h3>
                <!-- files -->
                <div class="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-10 max-w-[800px]  mt-10">
                    <template v-for="doc in documents" :key="doc?.type">
                        <div class="text-center">
                            <span class="text-xl inline-block mb-3">{{ doc?.type }}</span>
                            <a :href="doc?.link" target="_blank">
                                <img src="/src/assets/pdf2.jpg" :alt="doc?.type" class="w-full" />
                            </a>

                            <a :href="doc?.link" target="_blank"
                                class="mt-2 inline-block underline text-blue-400 hover:text-blue-600 visited:text-purple-600">View
                                document</a>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import BadgeComponent from '../ui/BadgeComponent.vue';
import Button from '../ui/Button.vue';
import AlertModal from '../ui/AlertModal.vue';
import PaymentModal from '../underwriting/PaymentModal.vue';
import LoyaltyPaymentModal from '../underwriting/LoyaltyPaymentModal.vue';
import { api } from '../../api/api';
import { useToastStore } from '../../store/toast';

const { underwriting, premiumId } = defineProps({
    underwriting: {
        type: Object,
        required: true,
    },
    premiumId: {
        type: Number,
    }
})

const toastStore = useToastStore()
const loading = ref(false)
const responseData = ref()
const showAlert = ref(false)
const showLoyaltyModal = ref(false)
const paymentLink = ref('')
const institutionId = ref(underwriting?.institution?.id)
const institutionSlug = ref(underwriting?.institution?.slug)
const transactionId = ref(underwriting?.payment[0]?.transaction_id)
const policyId = ref()
const premium = ref(underwriting?.payment[0]?.amount)

const documents = computed(() => {
    return [{
        type: 'Certificate',
        link: underwriting?.documents?.certificate
    }, {
        type: 'Schedule',
        link: underwriting?.documents?.schedule
    }, {
        type: 'Receipt',
        link: underwriting?.documents?.receipt
    }];
})

function formatKey(key) {
    return key
        .replace(/_/g, " ") // Replace underscores with spaces
    // .replace(/\b\w/g, (char) => char.toUpperCase())
}

function makePayment() {
    paymentLink.value = underwriting?.url
}

async function resendUnderwriting() {
    try {
        loading.value = true
        responseData.value = (await api.post(`motor/underwriting/${premiumId}/${institutionId.value}`,
            underwriting.request)).data
        loading.value = false
        if (responseData.value?.data && institutionSlug.value !== 'enterprise' && institutionSlug.value !== 'loyalty') {
            // console.log(responseData.value)
            transactionId.value = responseData.value?.data?.paymentData?.transaction_id
            paymentLink.value = responseData.value?.data?.paymentData?.url
            if (responseData.value?.data.state === false || responseData.value?.data.Status === 'Duplicate' || responseData.value?.data.policy_status === 'Active') {
                showAlert.value = true
            }
            console.log(paymentLink.value)
            console.log(responseData.value)
        } else if (responseData.value?.data && institutionSlug.value === 'loyalty') {
            // console.log(responseData.value)
            policyId.value = responseData.value.policyId
            showLoyaltyModal.value = true
        }
        else if (!responseData.value) {
            toastStore.addToastMessage('danger', 'Failed', 'Something Went Wrong')
            // console.log(responseData.value)
        }
    } catch (error) {
        loading.value = false
        toastStore.addToastMessage('danger', 'Failed', 'Something Went Wrong')
    }
}
</script>

<style scoped></style>