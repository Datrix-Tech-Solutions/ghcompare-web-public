<template>
    <div class="">
        <StepperComponent :steps="forms" :selected-form="selectedForm" />


        <div class=" text-center my-5" v-if="fetchingData">
            Fetching data... Please wait
        </div>

        <div class="my-5" v-else>
            <PersonalInfoForm v-if="forms[selectedForm] === 'Personal Info'" @sendData="getInfo" :idTypes="idTypes"
                :branches="branches" />
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
import { getCarBrands, getBranches, getIdTypes } from '../../utils/underwritingUtils'

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
const idTypes = ref([])
const branches = ref([])
const fetchingData = ref(false)

function getInfo(data) {
    underwritingDataStore.underwritingData = { ...underwritingDataStore.underwritingData, ...data }
    selectedForm.value = selectedForm.value + 1;
    // // console.log(underwritingDataStore.underwritingData)
}

function previousForm() {
    selectedForm.value = selectedForm.value - 1
}

onMounted(async () => {
    if (props.institutionSlug !== 'loyalty') {
        fetchingData.value = true
        carBrands.value = await getCarBrands()
        fetchingData.value = false
        // // console.log(carBrands.value)
    }
    if (underwritingDataStore.checkFormField('id_type')) {
        fetchingData.value = true
        idTypes.value = await getIdTypes()
        fetchingData.value = false
    }
    if (underwritingDataStore.checkFormField('branch')) {
        fetchingData.value = true
        branches.value = await getBranches()
        fetchingData.value = false
    }
    // // console.log(idTypes.value, branches.value)
    // await getVehicleDetails()
})
</script>


<style scoped></style>