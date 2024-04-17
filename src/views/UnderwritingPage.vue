<template>
    <div>
        <PaymentModal :paymentLink="paymentLink" v-if="paymentLink" @close-modal="() => { paymentLink = '' }" />
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
// const showPaymentModal = ref(false)
const paymentLink = ref('')


async function submitData(buyerData) {
    let premiumData = institutionData.value
    let generatePremiumData = { ...formDataStore.motorInsuranceData.coverDetails, ...formDataStore.motorInsuranceData.vehicleDetails }
    let data = await underwritingDataStore.submitUnderwritingData(premiumData, generatePremiumData, institutionData.value?.institution[0]?.id)
    console.log(data)
    if (data) {
        console.log(data)
        paymentLink.value = data?.data?.paymentData.url
    } else {
        toastStore.addToastMessage('danger', 'Failed', 'Something Went Wrong')
        console.log(data)
    }

    // window.open(data?.data?.paymentData.url, '_blank')
}

onMounted(() => {
    // finding institution data by slug
    let values = Object.values(formDataStore.motorInsurancePremium)
    institutionData.value = (values.find(item => { return item.institution[0].slug === props.institutionSlug }))
    underwritingDataStore.underwritingParams = institutionData.value.underwritingParams

    console.log(underwritingDataStore.underwritingParams)

    provide('institutionId', institutionData.value?.institution[0]?.id) //for forms to access and get institution Id
    provide('institutionLogo', institutionData.value?.institution[0]?.logo) //for forms to access and get institution logo
})

onUnmounted(() => {
    underwritingDataStore.$reset()
})
</script>

<style scoped></style>