<template>
    <div class="">
        <StepperComponent :steps="forms" :selected-form="selectedForm" />


        <div class="my-5">
            <PersonalInfoForm v-if="forms[selectedForm] === 'Personal Info'" @sendData="getInfo" />
            <VehicleInfoForm v-if="forms[selectedForm] === 'Vehicle Info'" @sendData="getInfo"
                @previousForm="previousForm" :carBrands="carBrands" />
            <ReviewForm v-if="forms[selectedForm] === 'Review'" @sendData="$emit('sendData', buyerData)"
                @previousForm="previousForm" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PersonalInfoForm from './PersonalInfoForm.vue';
import VehicleInfoForm from './VehicleInfoForm.vue';
import ReviewForm from './UnderwritingReviewForm.vue';
import StepperComponent from '../../components/ui/StepperComponent.vue';
import { useUnderwritingDataStore } from '../../store/underwritingData';

const underwritingDataStore = useUnderwritingDataStore()

// route params
const props = defineProps({
    institutionSlug: String,
    institutionId: String,
    insuranceType: String,
})

const forms = ref(['Personal Info', 'Vehicle Info', 'Review'])
const selectedForm = ref(0)
const carBrands = ref([])

function getInfo(data) {
    underwritingDataStore.underwritingData = { ...underwritingDataStore.underwritingData, ...data }
    selectedForm.value = selectedForm.value + 1;
    console.log(underwritingDataStore.underwritingData)
}

function previousForm() {
    selectedForm.value = selectedForm.value - 1
}

onMounted(async () => {
    if (props.institutionId !== 8) {
        carBrands.value = await underwritingDataStore.getCarBrands()
        console.log(carBrands.value)
    }
    // await getVehicleDetails()
})
</script>


<style scoped></style>