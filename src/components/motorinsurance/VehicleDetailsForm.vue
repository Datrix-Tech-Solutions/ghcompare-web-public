<script setup>
// @ts-check
import { ArrowLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline';
import { privateUse, commercialUse } from '../../data/car_data';
import { helpInfo } from '../../data/help_data'
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useFormDataStore } from '../../store/formData'
import Loader from '../ui/Loader.vue';
import { getYearsArray } from '../../utils/utils';
import Information from '../Information.vue';

// initialise router object
const router = useRouter()

const formDataStore = useFormDataStore()

// props
const props = defineProps({
    formData: {
        type: Object
    }
})

//form data values to be used for and captured from this form
const vehicleData = ref(formDataStore.motorInsuranceData.vehicleDetails)

/**
 * risk type options 
 * @type {object}
 */
const vehicleDetails = {
    privateUse, commercialUse,
}

//vehicle details info data
const info = ref(helpInfo.vehicleDetailsHelp)

//to hide and show various info on these fields
const showVehicleUseInfo = ref(false)

const yearsRange = getYearsArray()


function updateVehicleUse(vehicleUse) {
    vehicleData.value.vehicle_use = vehicleUse
    vehicleData.value.vehicle_class = ""
}

</script>

<template>
    <div class="bg-white max-w-2xl py-10 md:px-14 px-6 rounded-lg mx-auto">
        <!-- Vehicle details -->
        <h3 class="text-2xl font-bold mb-5">Vehicle Details</h3>

        <!-- the form -->
        <form @submit.prevent="$emit('sendData', { vehicleData })">
            <!-- Vehicle use -->
            <div class="flex justify-between items-start">
                <label class="label">Vehicle Use</label>

                <Information>
                    {{ info.vehicleUse }}
                </Information>
            </div>

            <div class="flex gap-5">
                <!-- commercial -->
                <div class="border rounded-lg p-3 w-28 cursor-pointer hover:outline hover:outline-2 hover:outline-primary"
                    tabindex="0" @click="updateVehicleUse('Commercial')"
                    :class="{ selected: vehicleData.vehicle_use == 'Commercial' }">
                    <img src="../../assets/commercial.png" alt="commercial" class="w-16 mx-auto">
                    <p class="text-sm text-gray-600 font-semibold text-center">Commercial</p>
                </div>

                <!-- personal -->
                <div class="border rounded-lg p-3 w-28 cursor-pointer hover:outline hover:outline-2 hover:outline-primary"
                    tabindex="0" @click="updateVehicleUse('Private')"
                    :class="{ selected: vehicleData.vehicle_use == 'Private' }">
                    <img src="../../assets/private.png" alt="personal" class="w-16 mx-auto">
                    <p class="text-sm text-gray-600 font-semibold text-center">Private</p>
                </div>
            </div>

            <hr class="my-8">

            <!-- Risk Type -->
            <div class="flex justify-between items-start">
                <label class="label" :class="{ disabled: vehicleData.vehicle_use == '' }">
                    Vehicle Class </label>

                <Information>
                    {{ info.riskType }}
                </Information>
            </div>

            <div class="" :title="vehicleData.vehicle_use ? '' : 'Please select vehicle use value'">
                <select name="risktype" id="risktype" v-model="vehicleData.vehicle_class" class="w-full" required
                    :class="{ disabled: vehicleData.vehicle_use == '' }">
                    <option disabled value="">Select risk type</option>
                    <template
                        v-for="(risk, index) in vehicleData.vehicle_use == 'Commercial' ? vehicleDetails.commercialUse : vehicleDetails.privateUse"
                        :key="index">
                        <option> {{ risk.risk }}</option>
                    </template>

                </select>
            </div>

            <hr class="my-8">

            <div class="flex gap-5">
                <!-- Number of seats -->
                <div class="w-1/2">
                    <div class="flex justify-between">
                        <label class="label">Number of Seats</label>
                        <Information>
                            {{ info.seats }}
                        </Information>
                    </div>
                    <input type="number" name="seats" id="seats" class="w-full" required
                        v-model="vehicleData.number_of_seats" placeholder="e.g. 12">
                </div>

                <!-- Vehicle Registration Year -->
                <div class="w-1/2">
                    <div class="flex justify-between">
                        <label class="label">Vehicle Registration Year</label>

                    </div>

                    <select name="seats" id="seats" v-model="vehicleData.vehicle_reg_year" class="w-full" required
                        :class="{ 'text-[#aaaaaa]': vehicleData.vehicle_reg_year == '' }">
                        <option disabled value="">Select registration year</option>
                        <template v-for="year in yearsRange" :key="year">
                            <option> {{ year }}</option>
                        </template>
                    </select>
                </div>
            </div>

            <hr class="my-8">

            <div class="flex gap-5">
                <!-- Year of Manufacture -->
                <div class="w-1/2">
                    <div class="flex justify-between">
                        <label class="label">Year of Manufacture</label>

                    </div>


                    <select name="seats" id="seats" v-model="vehicleData.year_of_manufacture" class="w-full" required
                        :class="{ 'text-[#aaaaaa]': vehicleData.year_of_manufacture == '' }">
                        <option disabled value="">Select year of manufacture</option>
                        <template v-for="year in yearsRange" :key="year">
                            <option> {{ year }}</option>
                        </template>
                    </select>

                </div>

                <!-- Amount insured -->
                <div class="w-1/2"
                    v-if="formDataStore.motorInsuranceData.coverDetails.prefered_cover !== 'Third Party'">
                    <div class="flex justify-between">
                        <label class="label">Vehicle Value</label>
                        <Information>
                            {{ info.amountInsured }}
                        </Information>
                    </div>

                    <div class="w-full">
                        <span class="mr-2">GH&#8373;</span>
                        <input type="number" inputmode="decimal" pattern="[0-9]*[.,]?[0-9]*" name="amountinsured"
                            id="amountinsured" class="" placeholder="e.g. 12000" required
                            v-model="vehicleData.vehicle_value">
                    </div>
                </div>
            </div>

            <div class="flex justify-between flex-row-reverse mt-10">
                <!-- next -->
                <button class="group button-primary" :disabled="formDataStore.gettingPremium">
                    <span v-if="!formDataStore.gettingPremium">Submit</span>
                    <span v-else>
                        <Loader />
                    </span>
                </button>

                <!-- back -->
                <button class="group  button-transparent hover:bg-inherit hover:text-inherit"
                    @click="$emit('previousForm')">
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