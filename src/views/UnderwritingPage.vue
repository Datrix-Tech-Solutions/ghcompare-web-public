<template>
    <div>
        <!-- Alert -->
        <AlertModal v-if="showAlert" :message="responseData?.data?.message" @close="showAlert = false" />

        <!-- Payment -->
        <PaymentModal :paymentLink="paymentLink" :institution-slug="institutionSlug" :transaction-id="transactionId"
            v-if="paymentLink" @close-modal="() => { paymentLink = '' }" />

        <LoyaltyPaymentModal v-if="showLoyaltyModal" :institution-slug="institutionSlug" :amount="premium"
            :policy-id="policyId" @close-modal="() => { showLoyaltyModal = false }" />

        <main class="max-width py-20">
            <!-- image -->
            <div class="" v-if="Object.keys(institutionData).length > 0">
                <!-- <img :src="institutionData?.institution[0]?.logo" alt="" class="max-w-[500px]"> -->
                <h2 class="text-3xl font-bold text-center mb-10 text-primary mt-10"> {{
                    institutionData?.institution[0]?.name
                    }}
                    Underwriting Form</h2>

                <div class="max-w-[800px] mx-auto">
                    <UnderwritingForm @sendData="submitData" />
                </div>
            </div>
        </main>
        <!-- {{ institutionData }} -->
    </div>
</template>

<script setup>
import { onMounted, ref, provide, onUnmounted } from 'vue';
import { useFormDataStore } from '../store/formData';
import { useUnderwritingDataStore } from '../store/underwritingData'
import { useRoute, useRouter } from 'vue-router';
// import { api, star_api } from "../api/api";
import UnderwritingForm from '../components/underwriting/UnderwritingForm.vue';
import PaymentModal from '../components/underwriting/PaymentModal.vue';
import { useToastStore } from '../store/toast';
import AlertModal from '../components/ui/AlertModal.vue';
import LoyaltyPaymentModal from '../components/underwriting/LoyaltyPaymentModal.vue';


// route params
const props = defineProps({
    institutionSlug: String,
    institutionId: String,
    insuranceType: String,
})

const toastStore = useToastStore()
const formDataStore = useFormDataStore()
const underwritingDataStore = useUnderwritingDataStore()
const route = useRoute()
const institutionData = ref({})
const responseData = ref()
const showAlert = ref(false)
const paymentLink = ref('')
const institutionSlug = ref('')
const transactionId = ref()
const policyId = ref()
const premium = ref()
const showLoyaltyModal = ref(false)


async function submitData(buyerData) {
    let premiumData = institutionData.value
    let generatePremiumData = { ...formDataStore.motorInsuranceDataSaved.coverDetails, ...formDataStore.motorInsuranceDataSaved.vehicleDetails }
    responseData.value = await underwritingDataStore.submitUnderwritingData(premiumData, generatePremiumData, institutionData.value?.institution[0]?.id)
    console.log(responseData.value)
    if (responseData.value?.data && institutionData.value.institution[0].slug !== 'enterprise' && institutionData.value.institution[0].slug !== 'loyalty') {
        console.log(responseData.value)
        transactionId.value = responseData.value?.data?.paymentData?.transaction_id
        paymentLink.value = responseData.value?.data?.paymentData?.url
        if (responseData.value?.data.state === false) {
            showAlert.value = true
        }
    } else if (responseData.value?.data && institutionData.value.institution[0].slug === 'loyalty') {
        console.log(responseData.value)
        policyId.value = responseData.value.policyId
        showLoyaltyModal.value = true
    }
    else if (!responseData.value) {
        toastStore.addToastMessage('danger', 'Failed', 'Something Went Wrong')
        console.log(responseData.value)
    }
    // window.open(data?.data?.paymentData.url, '_blank')
}

onMounted(() => {
    // finding institution data by slug
    let values = Object.values(formDataStore.motorInsurancePremium)
    institutionData.value = (values.find(item => { return item.institution[0].slug === props.institutionSlug }))
    underwritingDataStore.underwritingParams = institutionData.value?.underwritingParams

    console.log(underwritingDataStore.underwritingParams)

    institutionSlug.value = institutionData.value?.institution[0]?.slug
    premium.value = institutionData.value.premium

    provide('institutionId', institutionData.value?.institution[0]?.id) //for forms to access and get institution Id
    provide('institutionLogo', institutionData.value?.institution[0]?.logo) //for forms to access and get institution logo
    provide('institutionSlug', institutionData.value?.institution[0]?.slug) //for forms to access and get institution logo
})

onUnmounted(() => {
    underwritingDataStore.$reset()
})
</script>

<style scoped></style>