<template>
    <div class="bg-white md:p-16 p-10 rounded-lg relative">
        <!-- form loader -->
        <div class="absolute top-0 bottom-0 right-0 left-0 bg-black/10 z-20 rounded-lg flex justify-center items-center"
            v-if="underwritingDataStore.processing">
            <div class="bg-black relative z-30 px-5 py-3 rounded-lg">
                <Loader />
            </div>
        </div>

        <!-- form  -->
        <form @submit.prevent="$emit('sendData', { vehicleData })">

            <!-- Vehicle information -->
            <div class="">
                <h2 class="text-base font-semibold leading-7 text-gray-900">Vehicle Information</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">Provide accurate information.</p>

                <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <!-- Vehicle brand -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_make')">
                        <label for="vehicle-brand" class="block text-sm font-medium leading-6 text-gray-900">Vehicle
                            Brand
                        </label>
                        <div class="mt-2">

                            <!-- <input required type="text" name="vehicle-make" id="vehicle-make"
                                autocomplete="vehicle-make" v-model="vehicleData.vehicle_make"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> -->
                            <select id="vehicle-brand" v-model="brand" @change="getVehicleDetails()"
                                class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value="" disabled>Select Vehicle Brand</option>
                                <template v-for="vbrand in carBrands" :key="vbrand.brand">
                                    <option :value='vbrand.brand'>{{ vbrand.brand }}
                                    </option>
                                </template>
                            </select>
                        </div>
                    </div>

                    <!-- vehicle make -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_make')">
                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Vehicle
                            Make</label>
                        <div class="mt-2">
                            <select name="vehicle-model" id="vehicle-model" autocomplete="vehicle-model"
                                v-model="vehicleData.vehicle_make" :disabled="underwritingDataStore.processing"
                                class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value="" disabled>Select Vehicle Make</option>
                                <template v-for="make in vehicleMake" :key="make.name || make">
                                    <option :value='make.name || make'>{{ make.name || make }}</option>
                                </template>
                            </select>
                        </div>
                    </div>

                    <!-- Vehicle model -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_model')">
                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Vehicle
                            Model</label>
                        <div class="mt-2">

                            <select name="vehicle-model" id="vehicle-model" autocomplete="vehicle-model"
                                @change="getModelCode()" v-model="vehicleData.vehicle_model"
                                :disabled="underwritingDataStore.processing"
                                class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value="" disabled>Select Vehicle Model</option>
                                <template v-for="model in vehicleModel" :key="model.name || model">
                                    <option :value='model.name || model'>{{ model.name || model }}</option>
                                </template>
                            </select>
                        </div>
                    </div>

                    <!-- Body type -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('body_type')">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Body type</label>
                        <div class="mt-2">
                            <!-- <input required id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                v-model="vehicleData.body_type"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> -->
                            <select id="body-type" v-model="vehicleData.body_type" @change="getBodyTypeCode()"
                                class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value="" disabled>Select Vehicle Body Type</option>
                                <template v-for="bodyType in vehicleBodyType" :key="bodyType.CODE || bodyType">
                                    <option :value='bodyType.NAME || bodyType'>{{ bodyType.NAME || bodyType }}
                                    </option>
                                </template>
                            </select>
                        </div>
                    </div>

                    <!-- vehicle color -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_colour')">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Vehicle
                            Color</label>
                        <div class="mt-2">

                            <select name="vehicle-color" id="vehicle-color" autocomplete="vehicle-color"
                                v-model="vehicleData.vehicle_colour" :disabled="underwritingDataStore.processing"
                                class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value="" disabled>Select Vehicle Color</option>
                                <template v-for="color in vehicleColors" :key="color">
                                    <option :value='color'>{{ color }}</option>
                                </template>
                            </select>
                        </div>
                    </div>

                    <!-- Registration number -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('registration_number')">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Registration
                            Number</label>
                        <div class="mt-2">
                            <input required id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                v-model="vehicleData.registration_number"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <!-- Chassis number -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('chassis_number')">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Chassis
                            Number</label>
                        <div class="mt-2">
                            <input required type="text" name="vehicle-color" id="vehicle-color"
                                autocomplete="vehicle-color" v-model="vehicleData.chassis_number"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <!-- <div class="sm:col-span-3">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Body type
                            code</label>
                        <div class="mt-2">
                            <input required type="text" name="vehicle-color" id="vehicle-color"
                                autocomplete="vehicle-color" v-model="vehicleData.body_type_code"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div> -->

                    <!-- <div class="sm:col-span-3">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Model Code</label>
                        <div class="mt-2">
                            <input required id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                v-model="vehicleData.model_code"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div> -->

                    <!-- Customer Code  -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('customer_code')">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Customer
                            Code</label>
                        <div class="mt-2">
                            <input required type="text" name="vehicle-color" id="vehicle-color"
                                autocomplete="vehicle-color" v-model="vehicleData.customer_code"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <!-- Vehicle Risk -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_risk')">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Vehicle
                            Risk</label>
                        <div class="mt-2">
                            <input required id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                v-model="vehicleData.vehicle_risk"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
import { useUnderwritingDataStore } from '../../store/underwritingData';

const institutionId = inject('institutionId')
const underwritingDataStore = useUnderwritingDataStore()

const vehicleData = ref(underwritingDataStore.underwritingData.vehicleData)
const brand = ref('')
const carBrands = ref([])
const vehicleMake = ref([])
const vehicleModel = ref([])
const vehicleBodyType = ref([])
const vehicleColors = ref([])
// const modelData = ref()

async function getVehicleDetails() {
    // let brand = underwritingDataStore.underwritingData.vehicleData.vehicle_make
    if (brand.value) {
        const [make, model, body, colors] = await Promise.all([underwritingDataStore.getVehicleMake(institutionId, brand.value), underwritingDataStore.getVehicleModel(institutionId, brand.value), underwritingDataStore.getVehicleBodyType(institutionId), underwritingDataStore.getVehicleColors()])
        vehicleMake.value = make
        vehicleModel.value = model
        vehicleBodyType.value = body
        vehicleColors.value = colors
        console.log(make, model, body, colors)
    }
}

function getModelCode() {
    const modelData = vehicleModel.value.find(item => item.name === vehicleData.value.vehicle_model)
    console.log(modelData, vehicleData.value.vehicle_model)
    if (modelData?.code) { vehicleData.value.model_code = modelData?.code }
}

function getBodyTypeCode() {
    const modelData = vehicleBodyType.value.find(item => item.NAME === vehicleData.value.body_type)
    console.log(modelData, vehicleData.value.vehicle_model)
    if (modelData?.CODE) { vehicleData.value.body_type_code = modelData?.CODE }
}

onMounted(async () => {
    carBrands.value = await underwritingDataStore.getCarBrands()
    console.log(carBrands.value)
    await getVehicleDetails()
})


</script>

<style scoped></style>