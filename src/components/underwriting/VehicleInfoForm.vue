<template>
    <div class="bg-white md:p-16 p-10 rounded-lg relative">
        <!-- form loader -->
        <div class="absolute top-0 bottom-0 right-0 left-0 bg-black/10 z-20 rounded-lg flex justify-center items-center"
            v-if="fetchingData">
            <div class="bg-black relative z-30 px-5 py-3 rounded-lg">
                <Loader />
            </div>
        </div>

        <div class="mb-14">
            <img :src="institutionLogo" alt="" class="max-w-[250px] mx-auto">
        </div>

        <!-- form  -->
        <form @submit.prevent="$emit('sendData', { vehicleData })">

            <!-- Vehicle information -->
            <div class="">
                <h2 class="text-2xl font-bold ">Vehicle Information</h2>
                <p class=" text-gray-600">Provide accurate information.</p>

                <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <!-- Vehicle brand -->
                    <div class="sm:col-span-3" v-if="institutionSlug !== 'loyalty'">
                        <label for="vehicle-brand" class="label">Vehicle
                            Brand
                        </label>
                        <div class="mt-2">
                            <select id="vehicle-brand" v-model="vehicleData.vehicle_brand" @change="getVehicleDetails()"
                                class="w-full">
                                <option value="" disabled>Select Vehicle Brand</option>
                                <template v-for="vbrand in carBrands" :key="vbrand.brand">
                                    <option :value='vbrand.brand'>{{ vbrand.brand }}
                                    </option>
                                </template>
                            </select>
                        </div>
                    </div>
                    <!-- Vehicle trim -->
                    <div class="sm:col-span-3" v-else>
                        <div class="" v-if="underwritingDataStore.checkFormField('vehicle_trim')">
                            <label for="vehicle_trim" class="label">Vehicle
                                Trim</label>
                            <div class="mt-2">
                                <input required id="vehicle_trim" name="vehicle_trim" type="text"
                                    autocomplete="vehicle_trim" v-model="vehicleData.vehicle_trim" class="w-full" />
                            </div>
                        </div>
                    </div>

                    <!-- <SelectField labelName="Account type" :disable="fetchingData" :options="carBrands" v-model="test" /> -->


                    <!-- vehicle make -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_make')">
                        <label for="last-name" class="label">Vehicle
                            Make</label>
                        <div class="mt-2">
                            <select name="vehicle-model" id="vehicle-model" autocomplete="vehicle-model"
                                v-if="institutionSlug !== 'loyalty'" v-model="vehicleData.vehicle_make"
                                :disabled="fetchingData || !vehicleData.vehicle_brand" class="w-full">
                                <option value="" disabled>Select Vehicle Make</option>
                                <template v-for="make in vehicleMake" :key="make.name || make">
                                    <option :value='make.name || make'>{{ make.name || make }}</option>
                                </template>
                            </select>

                            <!-- for loyalty -->
                            <input required id="vehicle_make" name="vehicle_make" type="text"
                                autocomplete="vehicle_make" v-model="vehicleData.vehicle_make" class="w-full" v-else />
                        </div>
                    </div>

                    <!-- Vehicle model -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_model')">
                        <label for="last-name" class="label">Vehicle
                            Model</label>
                        <div class="mt-2">

                            <select name="vehicle-model" id="vehicle-model" autocomplete="vehicle-model"
                                v-if="institutionSlug !== 'loyalty'" @change="getModelCode()"
                                v-model="vehicleData.vehicle_model"
                                :disabled="fetchingData || !vehicleData.vehicle_brand" class="w-full">
                                <option value="" disabled>Select Vehicle Model</option>
                                <template v-for="model in vehicleModel" :key="model.name || model">
                                    <option :value='model.name || model'>{{ model.name || model }}</option>
                                </template>
                            </select>
                            <!-- for loyalty -->
                            <input required id="vehicle_model" name="vehicle_model" type="text"
                                autocomplete="vehicle_model" v-model="vehicleData.vehicle_model" class="w-full"
                                v-else />
                        </div>
                    </div>

                    <!-- Vehicle fuel type -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_fuel_type')">
                        <label for="last-name" class="label">Vehicle
                            Fuel Type</label>
                        <div class="mt-2">

                            <select name="vehicle-model" id="vehicle-model" v-model="vehicleData.vehicle_fuel_type"
                                class="w-full">
                                <option value="" disabled>Select Vehicle Fuel Type</option>
                                <template v-for="fuel in vehicleFuelType" :key="fuel">
                                    <option :value='fuel'>{{ fuel }}</option>
                                </template>
                            </select>
                        </div>
                    </div>

                    <!-- Vehicle  no of cylinders -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_no_cylinders')">
                        <label for="last-name" class="label">Number of
                            Cylinders</label>
                        <div class="mt-2">

                            <select name="vehicle-model" id="vehicle-model" v-model="vehicleData.vehicle_no_cylinders"
                                class="w-full">
                                <option value="" disabled>Select Number of Cylinders</option>
                                <template v-for="value in 15" :key="value">
                                    <option :value='value - 1'>{{ value - 1 }}</option>
                                </template>
                            </select>
                        </div>
                    </div>

                    <!-- Vheicle_cc -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_cc')">
                        <label for="vehicle_cc" class="label">Vehicle
                            CC</label>
                        <div class="mt-2">
                            <input required id="vehicle_cc" name="reg-number" type="text" autocomplete="reg-number"
                                v-model="vehicleData.vehicle_cc" class="w-full" />
                        </div>
                    </div>

                    <!-- vehicle_drive_type -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_drive_type')">
                        <label for="vehicle_drive_type" class="label">Vehicle Drive Type</label>
                        <div class="mt-2">
                            <input required id="vehicle_drive_type" name="reg-number" type="text"
                                autocomplete="reg-number" v-model="vehicleData.vehicle_drive_type" class="w-full" />
                        </div>
                    </div>

                    <!-- vehicle_engine_no -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_engine_no')">
                        <label for="vehicle_engine_no" class="label">Vehicle
                            Engine
                            Number</label>
                        <div class="mt-2">
                            <input required id="vehicle_engine_no" name="reg-number" type="text"
                                autocomplete="reg-number" v-model="vehicleData.vehicle_engine_no" class="w-full" />
                        </div>
                    </div>

                    <!-- Body type -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('body_type')">
                        <label for="email" class="label">Body Type</label>
                        <div class="mt-2">
                            <select id="body-type" v-model="vehicleData.body_type" @change="getBodyTypeCode()"
                                v-if="institutionSlug !== 'loyalty'" class="w-full"
                                :disabled="fetchingData || !vehicleData.vehicle_brand">
                                <option value="" disabled>Select Vehicle Body Type</option>
                                <template v-for="bodyType in vehicleBodyType" :key="bodyType.CODE || bodyType">
                                    <option :value='bodyType.NAME || bodyType'>{{ bodyType.NAME || bodyType }}
                                    </option>
                                </template>
                            </select>
                            <!-- for loyalty -->
                            <input required id="body_type" name="body_type" type="text" autocomplete="body_type"
                                v-model="vehicleData.body_type" class="w-full" v-else />
                        </div>
                    </div>

                    <!-- vehicle color -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_colour')">
                        <label for="country" class="label">Vehicle
                            Color</label>

                        <div class="mt-2" v-if="vehicleColors?.length > 0">
                            <select name="vehicle-color" id="vehicle-color" autocomplete="vehicle-color"
                                v-model="vehicleData.vehicle_colour"
                                :disabled="fetchingData || !vehicleData.vehicle_brand" class="w-full">
                                <option value="" disabled>Select Vehicle Color</option>
                                <template v-for="color in vehicleColors" :key="color">
                                    <option :value='color'>{{ color }}</option>
                                </template>
                            </select>
                        </div>

                        <!-- vehicle color if color array can't be fetched -->
                        <div class="mt-2" v-else>
                            <input name="vehicle-color" id="vehicle-color" autocomplete="vehicle-color"
                                v-model="vehicleData.vehicle_colour"
                                :disabled="fetchingData || !vehicleData.vehicle_brand" class="w-full" />
                        </div>
                    </div>

                    <!-- Registration number -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('registration_number')">
                        <label for="email" class="label">Registration
                            Number</label>
                        <div class="mt-2">
                            <input required id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                v-model="vehicleData.registration_number" class="w-full" />
                        </div>
                    </div>

                    <!-- Chassis number -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('chassis_number')">
                        <label for="country" class="label">Chassis
                            Number</label>
                        <div class="mt-2">
                            <input required type="text" name="vehicle-color" id="vehicle-color"
                                autocomplete="vehicle-color" v-model="vehicleData.chassis_number" class="w-full" />
                        </div>
                    </div>

                    <!-- Customer Code  -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('customer_code')">
                        <label for="country" class="label">Customer
                            Code</label>
                        <div class="mt-2">
                            <input required type="text" name="vehicle-color" id="vehicle-color"
                                autocomplete="vehicle-color" v-model="vehicleData.customer_code" class="w-full" />
                        </div>
                    </div>

                    <!-- Vehicle Risk -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_risk')">
                        <label for="email" class="label">Vehicle
                            Risk</label>
                        <div class="mt-2">
                            <input readonly id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                v-model="vehicleData.vehicle_risk" class="w-full" />
                        </div>
                    </div>
                </div>
            </div>


            <div class="sm:col-span-full mt-10 flex justify-between flex-row-reverse">
                <ButtonWithArrow class="button-primary px-5  block" text="Review"></ButtonWithArrow>
                <ButtonWithArrow class="button-primary px-5  block" text="Personal Info" :left="true"
                    @click="$emit('previousForm')">
                </ButtonWithArrow>
            </div>
        </form>
    </div>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue';
import ButtonWithArrow from '../../components/ui/ButtonWithArrow.vue'
import Loader from '../ui/Loader.vue';
import SelectField from './formfields/SelectField.vue';

import { useUnderwritingDataStore } from '../../store/underwritingData';
import { getVehicleBodyType, getVehicleColors, getVehicleMake, getVehicleModel } from '../../utils/underwritingUtils'

const props = defineProps({
    carBrands: Array,
})

const institutionId = inject('institutionId')
const institutionLogo = inject('institutionLogo')
const institutionSlug = inject('institutionSlug')
const underwritingDataStore = useUnderwritingDataStore()

const vehicleData = ref(underwritingDataStore.underwritingData.vehicleData)
// const brand = ref('')
// const carBrands = ref([])
const test = ref('lskjdlfs')
const fetchingData = ref(false)
const vehicleMake = ref([])
const vehicleModel = ref([])
const vehicleBodyType = ref([])
const vehicleColors = ref([])
const vehicleFuelType = ["Petrol", "Diesel", "Electricity", "Hydrogen", "Compressed Natural Gas (CNG)", "Liquefied Petroleum Gas (LPG)", "Biofuel", "Hybrid (Gasoline/Electric)", "Hybrid (Diesel/Electric)", "Hybrid (Plug-In)", "Flex Fuel (E85)", "Biodiesel"]

// const modelData = ref()

async function getVehicleDetails() {
    // console.log('something')
    // let brand = underwritingDataStore.underwritingData.vehicleData.vehicle_make
    if (vehicleData.value.vehicle_brand) {
        fetchingData.value = true;
        const [make, model, body, colors] = await Promise.all([getVehicleMake(institutionId, institutionSlug, vehicleData.value.vehicle_brand), getVehicleModel(institutionId, institutionSlug, vehicleData.value.vehicle_brand), getVehicleBodyType(institutionId, institutionSlug), getVehicleColors()])
        vehicleMake.value = make
        vehicleModel.value = model
        vehicleBodyType.value = body
        vehicleColors.value = colors
        // console.log(make, model, body, colors)
        fetchingData.value = false
    }
}

function getModelCode() {
    const modelData = vehicleModel.value.find(item => item.name === vehicleData.value.vehicle_model)
    // console.log(modelData, vehicleData.value.vehicle_model)
    if (modelData?.code) { vehicleData.value.model_code = modelData?.code }
}

function getBodyTypeCode() {
    const modelData = vehicleBodyType.value.find(item => item.NAME === vehicleData.value.body_type)
    // console.log(modelData, vehicleData.value.vehicle_model)
    if (modelData?.CODE) { vehicleData.value.body_type_code = modelData?.CODE }
}

onMounted(async () => {
    // carBrands.value = await underwritingDataStore.getCarBrands()
    // console.log(carBrands.value)
    await getVehicleDetails()
})


</script>

<style scoped></style>