<template>
    <div class="">
        <StepperComponent :steps="forms" :selected-form="selectedForm" />


        <div class="my-5">
            <PersonalInfoForm v-if="forms[selectedForm] === 'Personal Info'" @sendData="getInfo" />
            <VehicleInfoForm v-if="forms[selectedForm] === 'Vehicle Info'" @sendData="getInfo"
                @previousForm="previousForm" />
            <ReviewForm v-if="forms[selectedForm] === 'Review'" @sendData="$emit('sendData', buyerData)"
                @previousForm="previousForm" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PersonalInfoForm from './PersonalInfoForm.vue';
import VehicleInfoForm from './VehicleInfoForm.vue';
import ReviewForm from './UnderwritingReviewForm.vue'
import StepperComponent from '../../components/ui/StepperComponent.vue';
import { useFormDataStore } from '../../store/formData';

const formDataStore = useFormDataStore()

const forms = ref(['Personal Info', 'Vehicle Info', 'Review'])
const selectedForm = ref(0)

function getInfo(data) {
    formDataStore.underwritingData = { ...formDataStore.underwritingData, ...data }
    selectedForm.value = selectedForm.value + 1;
    console.log(formDataStore.underwritingData)
}

function previousForm() {
    selectedForm.value = selectedForm.value - 1
}
</script>

<style scoped></style>