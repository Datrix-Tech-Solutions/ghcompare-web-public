<template>
    <div class="min-h-screen">
        <div class="pt-40 max-w-[500px]  mx-auto text-center">
            <CheckBadgeIcon class="w-14 mx-auto mb-5 text-green-600" />
            <p class="font-bold text-5xl text-primary">Payment Successful!</p>

            <p class="text-lg mt-8">You have successfully purchased a Motor Insurance Policy from {{ institution }}.</p>

            <p class="t text-neutral-500 text-sm">Details of your purchase has been sent to your email/phone</p>

            <router-link :to="{ name: 'LandingPage' }">
                <button class="button-primary w-full mt-8">Finish</button>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { CheckBadgeIcon } from '@heroicons/vue/24/outline';
import { useFormDataStore } from '../store/formData';
import { onMounted, onUnmounted, ref } from 'vue';
import { useUnderwritingDataStore } from '../store/underwritingData';

const formDataStore = useFormDataStore()
const institution = ref("")

const props = defineProps({
    institutionSlug: String,
})

onMounted(() => {
    let values = Object.values(formDataStore?.motorInsurancePremium)
    institution.value = (values.find(item => { return item?.institution[0].slug === props.institutionSlug }))?.institution[0].name
    // console.log(institution.value)
})

onUnmounted(() => {
    useUnderwritingDataStore().$reset;
    useFormDataStore().$reset;
    useFormDataStore().motorInsuranceDataSaved = {}
    useFormDataStore().motorInsurancePremium = null
})
</script>

<style scoped></style>