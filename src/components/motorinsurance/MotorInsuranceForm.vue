<script setup>
import CoverDetailsForm from './CoverDetailsForm.vue';
import VehicleDetailsForm from './VehicleDetailsForm.vue';
import StepperComponent from '../ui/StepperComponent.vue';
import { useFormDataStore } from '../../store/formData'
import { onMounted, ref, } from 'vue';
import { useToastStore } from '../../store/toast';
import { useRouter, useRoute } from 'vue-router';

const toastStore = useToastStore()
const formDataStore = useFormDataStore() //for storing data in store
const router = useRouter()
const route = useRoute()

// for form component switching
const forms = ref(['Cover Details', 'Vehicle Details']);
const selectedForm = ref(0)


function getInfo(data) {
    formDataStore.motorInsuranceData = { ...formDataStore.motorInsuranceData, ...data }
    selectedForm.value = selectedForm.value + 1;
    console.log(formDataStore.motorInsuranceData)
}

function previousForm() {
    selectedForm.value = selectedForm.value - 1
}

async function submitData(data) {
    formDataStore.motorInsuranceData = { ...formDataStore.motorInsuranceData, ...data }
    console.log('something')
    await formDataStore.getMotorPremium()
    //Navigate user to premium page
    if (formDataStore.success) {
        await router.push({ name: 'Premium', 'params': { insuranceType: route.meta.insuranceType } })
    } else {
        toastStore.addToastMessage('danger', 'Failed', 'Something Went Wrong')
    }
}

onMounted(() => {
})

</script>

<template>
    <!-- <div class="">
        <KeepAlive>
            <component :is="forms[activeForm]" :form-data="formData" @sendFormData="getFormData">
            </component>
        </KeepAlive>
    </div> -->

    <div class="">
        <StepperComponent :steps="forms" :selected-form="selectedForm" />
        <div class="my-5">
            <CoverDetailsForm v-if="forms[selectedForm] === 'Cover Details'" @sendData="getInfo" />
            <VehicleDetailsForm v-if="forms[selectedForm] === 'Vehicle Details'" @sendData="submitData"
                @previousForm="previousForm" />
            <!-- <ReviewForm v-if="forms[selectedForm] === 'Review'" @sendData="$emit('sendData', buyerData)"
                @previousForm="previousForm" /> -->
        </div>
    </div>
</template>
