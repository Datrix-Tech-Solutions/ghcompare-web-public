<template>
    <div>
        <!-- Alert -->
        <AlertModal v-if="showAlert" :message="responseData?.data?.message" @close="showAlert = false" />

        <!-- Payment -->
        <PaymentModal :paymentLink="paymentLink" :institution-slug="institutionSlug" :transaction-id="transactionId"
            insurance-type="motor-insurance" :institutionId="institutionId" v-if="paymentLink"
            @close-modal="() => { paymentLink = '' }" />

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


                <!-- suggesting other institutions -->
                <section class="pt-28" id="more-institutions" v-if="showSuggested">
                    <SuggestedInstitutionList :current-institution-slug="institutionSlug" />
                </section>

            </div>
        </main>
        <!-- {{ institutionData }} -->
    </div>
</template>

<script setup>
import { onMounted, ref, provide, onUnmounted, watch } from 'vue';
import { useFormDataStore } from '../store/formData';
import { useUnderwritingDataStore } from '../store/underwritingData'
import { useRoute, useRouter } from 'vue-router';
// import { api, star_api } from "../api/api";
import UnderwritingForm from '../components/underwriting/UnderwritingForm.vue';
import PaymentModal from '../components/underwriting/PaymentModal.vue';
import { useToastStore } from '../store/toast';
import AlertModal from '../components/ui/AlertModal.vue';
import LoyaltyPaymentModal from '../components/underwriting/LoyaltyPaymentModal.vue';
import SuggestedInstitutionList from '../components/SuggestedInstitutionList.vue';


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
const router = useRouter()
const institutionData = ref({})
const responseData = ref()
const showAlert = ref(false)
const paymentLink = ref('')
const institutionLogo = ref('')
const instSlug = ref('')
const instId = ref('')
const transactionId = ref()
const policyId = ref()
const premium = ref()
const showLoyaltyModal = ref(false)
const showSuggested = ref(false)
const timeout = ref()


async function submitData(buyerData) {
    let premiumData = institutionData.value
    let generatePremiumData = { ...formDataStore.motorInsuranceDataSaved.coverDetails, ...formDataStore.motorInsuranceDataSaved.vehicleDetails }
    // post data to backend
    responseData.value = await underwritingDataStore.submitUnderwritingData(premiumData, generatePremiumData, formDataStore.motorInsurancePremium?.premiumId, institutionData.value?.institution[0]?.id)
    // console.log(responseData.value)
    if (responseData.value?.data && institutionData.value.institution[0].slug !== 'enterprise' && institutionData.value.institution[0].slug !== 'loyalty') {
        // console.log(responseData.value)
        transactionId.value = responseData.value?.data?.paymentData?.transaction_id
        paymentLink.value = responseData.value?.data?.paymentData?.url || responseData.value?.data?.paymentUrl
        if (responseData.value?.data.state === false || responseData.value?.data.Status === 'Duplicate') {
            showAlert.value = true
        }
    } else if (responseData.value?.data && institutionData.value.institution[0].slug === 'loyalty') {
        // console.log(responseData.value)
        policyId.value = responseData.value.policyId
        showLoyaltyModal.value = true
    }
    else if (!responseData.value) {
        toastStore.addToastMessage('danger', 'Failed', 'Something Went Wrong')
        // console.log(responseData.value)

        // show suggested
        timeout.value = setTimeout(() => {
            showSuggested.value = true
            router.push({ path: route.path, hash: '#more-institutions' })
            console.log(formDataStore.motorInsurancePremium)
        }, 2000)
    }
    // window.open(data?.data?.paymentData.url, '_blank')
}

// finding institution data by slug
function getInstitutionData() {
    let values = Object.values(formDataStore.motorInsurancePremium)
    institutionData.value = (values.find(item => { return item.institution[0].slug === props.institutionSlug }))

    // getting underwriting params to populate forms
    underwritingDataStore.underwritingParams = institutionData.value?.underwritingParams

    // console.log(underwritingDataStore.underwritingParams)

    institutionLogo.value = institutionData.value?.institution[0]?.logo //set logo for institution for child form components
    instSlug.value = props.institutionSlug //set slug for institution for child form components
    instId.value = props.institutionId //set id for institution for child form components
    premium.value = institutionData.value.premium //get premium price
    // // console.log(institutionLogo.value, props.institutionId, props.institutionSlug)
}

watch(() => route.path, () => {
    window.location.reload();
    getInstitutionData()
})

provide('institutionId', instId) //for forms to access and get institution Id
provide('institutionLogo', institutionLogo) //for forms to access and get institution logo
provide('institutionSlug', instSlug) //for forms to access and get institution slug

onMounted(() => {
    getInstitutionData()
    console.log(formDataStore.motorInsurancePremium)
})

onUnmounted(() => {
    underwritingDataStore.$reset()
    clearTimeout(timeout.value)
})
</script>

<style scoped></style>