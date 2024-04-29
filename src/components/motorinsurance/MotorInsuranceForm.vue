<script setup>
import CoverDetailsForm from './CoverDetailsForm.vue';
import VehicleDetailsForm from './VehicleDetailsForm.vue';
import StepperComponent from '../ui/StepperComponent.vue';
import { useFormDataStore } from '../../store/formData'
import { onMounted, ref, } from 'vue';
import { useToastStore } from '../../store/toast';
import { useRouter } from 'vue-router';

const toastStore = useToastStore()
const store = useFormDataStore() //for storing data in store
const formDataStore = ref(store.motorInsuranceData) // form data to be used for this page
// const activeForm = ref('CoverDetailsForm') //active form

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
            <VehicleDetailsForm v-if="forms[selectedForm] === 'Vehicle Details'" @sendData="submit"
                @previousForm="previousForm" />
            <!-- <ReviewForm v-if="forms[selectedForm] === 'Review'" @sendData="$emit('sendData', buyerData)"
                @previousForm="previousForm" /> -->
        </div>
    </div>
</template>
