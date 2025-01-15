<template>
    <div>
        <!-- Main modal -->
        <div id="default-modal" tabindex="-1" aria-hidden="true"
            class="   top-0 right-0 left-0 bottom-0 z-50 flex  justify-center items-center w-full h-full py-10">
            <div class="relative p-4 w-full max-w-3xl ">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow   ">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 ">
                        <h3 class="text-xl font-semibold text-gray-900 ">
                            Motor Insurance Payment
                        </h3>

                    </div>
                    <!-- Modal body -->
                    <div class="p-4 md:p-5 space-y-4">
                        <iframe v-if="paymentLink" :src="paymentLink" frameborder="0" class="w-full h-full"
                            name="myFrame"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, provide, onUnmounted } from 'vue';
import { useFormDataStore } from '../store/formData';
import { useUnderwritingDataStore } from '../store/underwritingData'
import { useRoute, useRouter } from 'vue-router';

// route params
const props = defineProps({
    institutionSlug: String,
    institutionId: String,
    insuranceType: String,
})

const formDataStore = useFormDataStore()
const underwritingDataStore = useUnderwritingDataStore()
const route = useRoute()
const institutionData = ref({})
// const showPaymentModal = ref(false)
const paymentLink = ref('')


onMounted(() => {
    // finding institution data by slug
    let values = Object.values(formDataStore.motorInsurancePremium)
    institutionData.value = (values.find(item => { return item.institution[0].slug === props.institutionSlug }))
    // underwritingDataStore.underwritingParams = institutionData.value.underwritingParams
    paymentLink.value = institutionData.value?.paymentData?.url

    // // console.log(underwritingDataStore.underwritingParams)

    // provide('institutionId', institutionData.value?.institution[0]?.id) //for forms to access and get institution Id
    // provide('institutionLogo', institutionData.value?.institution[0]?.logo) //for forms to access and get institution logo
})
</script>

<style scoped></style>