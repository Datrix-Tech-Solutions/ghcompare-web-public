<template>
    <div>
        <main class="max-width py-20">
            <!-- image -->
            <div class="" v-if="Object.keys(institutionData).length > 0">
                <img :src="institutionData?.institution[0]?.logo" alt="" class="max-w-[500px]">
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
import { onMounted, ref, provide } from 'vue';
import { useFormDataStore } from '../store/formData';
import { useRoute, useRouter } from 'vue-router';
import { api, star_api } from "../api/api";
import UnderwritingForm from '../components/underwriting/UnderwritingForm.vue';


const formDataStore = useFormDataStore()
const route = useRoute()
const institutionData = ref({})


async function submitData(buyerData) {
    let premiumData = institutionData.value
    let data = await formDataStore.submitUnderwritingData(premiumData, institutionData.value?.institution[0]?.id)
    console.log(data)
    window.open(data.data.paymentData.url, '_blank')
}

onMounted(() => {
    let values = Object.values(formDataStore.motorInsurancePremium)
    institutionData.value = (values.find(item => { return item.institution[0].slug === route.params.institution }))
    provide('institutionId', institutionData.value?.institution[0]?.id)
})
</script>

<style scoped></style>