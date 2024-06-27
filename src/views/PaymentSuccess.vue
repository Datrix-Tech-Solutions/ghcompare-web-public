<template>
    <div class="min-h-screen max-width">
        <div class="pt-28 max-w-[500px]  mx-auto text-center">
            <CheckBadgeIcon class="w-14 mx-auto mb-5 text-green-600" />
            <p class="font-bold text-5xl text-primary">Payment Successful!</p>

            <p class="text-lg mt-8">You have successfully purchased a Motor Insurance Policy from {{ institution }}.</p>

            <p class="t text-neutral-500 text-sm">Details of your purchase has been sent to your email/phone. You can
                download necessary documents below</p>

            <!-- <router-link :to="{ name: 'LandingPage' }">
                <button class="button-primary w-full mt-8">Finish</button>
            </router-link> -->


        </div>

        <!-- files -->
        <div class="grid xs:grid-cols-2 md:grid-cols-4 gap-10 max-w-[800px] mx-auto mt-10">
            <template v-for="doc in documents.data.files" :key="doc.type">
                <div class="text-center">
                    <span class="text-xl inline-block mb-3">{{ doc.type }}</span>
                    <a :href="doc.document.data" target="_blank">
                        <img src="/src/assets/pdf2.jpg" :alt="doc.type" class="mx-auto w-40 xs:w-full" />
                    </a>

                    <a :href="doc.document.data" target="_blank"
                        class="mt-2 inline-block underline text-blue-400 hover:text-blue-600 visited:text-purple-600">Download
                        document</a>
                </div>
            </template>
        </div>

        <!-- button -->
        <div class="max-w-sm mx-auto mt-8">
            <router-link :to="{ name: 'LandingPage' }">
                <button class="button-primary w-full ">Finish</button>
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
const documents = useUnderwritingDataStore().paymentSuccessData
const institution = ref("")

const docs = {
    "data": {
        "status": "Paid",
        "files": [
            {
                "type": "Certificate",
                "document": {
                    "state": true,
                    "message": "Success",
                    "data": "https://sibauat.starassurance.com/links/aSF5zSk"
                }
            },
            {
                "type": "Schedule",
                "document": {
                    "state": true,
                    "message": "Success",
                    "data": "https://sibauat.starassurance.com/links/S0NH4td"
                }
            },
            {
                "type": "Receipt",
                "document": {
                    "state": false,
                    "message": "Payment details not found"
                }
            },
            {
                "type": "Sticker",
                "document": {
                    "state": true,
                    "message": "Success",
                    "data": "https://v.nicmid.com/.pdf"
                }
            }
        ]
    }
}


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