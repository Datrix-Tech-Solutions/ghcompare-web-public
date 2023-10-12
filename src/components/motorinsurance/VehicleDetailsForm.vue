<script setup>
import { ArrowLeftIcon, ArrowRightIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline';
import { privateUse, commercialUse } from '../../data/car_data';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()

const props = defineProps(['formData'])

const vehicleData = ref({
    formType: 'vehicle details',
    data: props.formData.vehicleDetails,
})

//data for this form
const vehicleDetails = {
    privateUse, commercialUse,
}

//emits
const emit = defineEmits(['sendFormData', 'updateForm'])


//function to update the value of vehicle use 
function updateVehicleUse(vehicleUse) {
    vehicleData.value.data.vehicleUse = vehicleUse
    vehicleData.value.data.riskType = ""
}
//function to go to previous form
async function goToPrev() {
    await router.push({ name: 'MotorInsurance', query: { form: 'cover_details' } })
    emit('updateForm')
}

async function submit() {
    emit('sendFormData', vehicleData.value)
    // alert('hello')
}
</script>

<template>
    <div class="bg-white max-w-2xl py-10 px-14 rounded-lg mx-auto">
        <!-- Vehicle details -->
        <h3 class="text-2xl font-bold mb-5">Vehicle Details</h3>

        <!-- the form -->
        <form @submit.prevent="submit">
            <!-- Vehicle use -->
            <div class="flex justify-between ">
                <h4 class="text-lg text-primary font-semibold mb-3">Vehicle Use</h4>
                <QuestionMarkCircleIcon class="w-6 h-6 text-primary" />
            </div>

            <div class="flex gap-5">
                <!-- commercial -->
                <div class="border rounded-lg p-3 w-28 cursor-pointer hover:outline hover:outline-2 hover:outline-primary"
                    tabindex="0" @click="updateVehicleUse('Commercial')"
                    :class="{ selected: vehicleData.data.vehicleUse == 'Commercial' }">
                    <img src="../../assets/commercial.png" alt="commercial" class="w-16 mx-auto">
                    <p class="text-sm text-gray-600 font-semibold text-center">Commercial</p>
                </div>

                <!-- personal -->
                <div class="border rounded-lg p-3 w-28 cursor-pointer hover:outline hover:outline-2 hover:outline-primary"
                    tabindex="0" @click="updateVehicleUse('Private')"
                    :class="{ selected: vehicleData.data.vehicleUse == 'Private' }">
                    <img src="../../assets/private.png" alt="personal" class="w-16 mx-auto">
                    <p class="text-sm text-gray-600 font-semibold text-center">Private</p>
                </div>
            </div>

            <hr class="my-8">

            <!-- Risk Type -->
            <div class="flex justify-between">
                <h4 class="text-lg text-primary font-semibold mb-3"
                    :class="{ disabled: vehicleData.data.vehicleUse == '' }">
                    Risk Type</h4>
                <QuestionMarkCircleIcon class="w-6 h-6 text-primary"
                    :class="{ disabled: vehicleData.data.vehicleUse == '' }" />
            </div>

            <div class="" :title="vehicleData.data.vehicleUse ? '' : 'Please select vehicle use value'">
                <select name="risktype" id="risktype" v-model="vehicleData.data.riskType" class="w-full" required
                    :class="{ disabled: vehicleData.data.vehicleUse == '' }">
                    <option disabled value="">Please select risk type</option>
                    <template
                        v-for="(risk, index) in vehicleData.data.vehicleUse == 'Commercial' ? vehicleDetails.commercialUse : vehicleDetails.privateUse"
                        :key="index">
                        <option> {{ risk.risk }}</option>
                    </template>

                </select>
            </div>

            <hr class="my-8">

            <!-- Number of seats -->
            <div class="flex justify-between">
                <h4 class="text-lg text-primary font-semibold mb-3">Number of Seats</h4>
                <QuestionMarkCircleIcon class="w-6 h-6 text-primary" />
            </div>

            <div class="">
                <input type="number" name="seats" id="seats" class="max-w-[120px]" v-model="vehicleData.data.numberOfSeats"
                    placeholder="e.g. 12">
            </div>

            <hr class="my-8">

            <!-- Amount insured -->
            <div class="" v-if="formData.coverDetails.coverType !== 'Third Party'">
                <div class="flex justify-between ">
                    <h4 class="text-lg text-primary font-semibold mb-3">Amount Insured</h4>
                    <QuestionMarkCircleIcon class="w-6 h-6 text-primary" />
                </div>

                <div class="">
                    <span class="mr-2">GH&#8373;</span>
                    <input type="text" inputmode="decimal" pattern="[0-9]*[.,]?[0-9]*" name="amountinsured"
                        id="amountinsured" class="max-w-[120px]" placeholder="e.g. 1200"
                        v-model="vehicleData.data.amountInsured">
                </div>
            </div>

            <div class="flex justify-between flex-row-reverse mt-10">
                <!-- next -->
                <button class="group button-primary">Next
                    <ArrowRightIcon class="w-5 h-5 inline group-hover:translate-x-2 transition  " />
                </button>

                <!-- back -->
                <button class="group  button-transparent hover:bg-inherit hover:text-inherit" @click="goToPrev">
                    <ArrowLeftIcon class="w-5 h-5 inline  group-hover:-translate-x-2 transition" /> Back
                </button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.selected {
    background-color: var(--primary-color);
}

.selected p {
    color: white !important;
}

.disabled {
    pointer-events: none;
    color: #aaa
}
</style>