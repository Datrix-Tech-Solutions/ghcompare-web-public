<template>
    <div class="bg-white px-10 py-16 rounded-lg">
        <form @submit.prevent="$emit('sendData', buyerData)" class="">
            <div class="mb-10">
                <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.
                </p>

                <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First
                            name</label>
                        <div class="mt-2">
                            <input required type="text" name="first-name" id="first-name" autocomplete="given-name"
                                v-model="buyerData.first_name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last
                            name</label>
                        <div class="mt-2">
                            <input required type="text" name="last-name" id="last-name" autocomplete="family-name"
                                v-model="buyerData.last_name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
                            address</label>
                        <div class="mt-2">
                            <input required id="email" name="email" type="email" autocomplete="email"
                                v-model="buyerData.email"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Phone
                            Number</label>
                        <div class="mt-2">
                            <input required type="number" name="phone-number" id="phone-number"
                                autocomplete="phone-number" v-model="buyerData.mobile_number"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">ID type
                        </label>
                        <div class="mt-2">
                            <input required id="id-type" name="id-type" type="text" autocomplete="id-type" readonly
                                v-model="buyerData.id_type"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">ID
                            Number</label>
                        <div class="mt-2">
                            <input required type="text" name="id-number" id="id-number" autocomplete="id-number"
                                v-model="buyerData.id_number"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Vehicle information -->
            <div class="">
                <h2 class="text-base font-semibold leading-7 text-gray-900">Vehicle Information</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">Provide accurate information.</p>

                <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Vehicle Make
                        </label>
                        <div class="mt-2">
                            <input required type="text" name="vehicle-make" id="vehicle-make"
                                autocomplete="vehicle-make" v-model="buyerData.vehicle_make"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Vehicle
                            Model</label>
                        <div class="mt-2">
                            <input required type="text" name="vehicle-model" id="vehicle-model"
                                autocomplete="vehicle-model" v-model="buyerData.vehicle_model"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Vehicle
                            Color</label>
                        <div class="mt-2">
                            <input required type="text" name="vehicle-color" id="vehicle-color"
                                autocomplete="vehicle-color" v-model="buyerData.vehicle_colour"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Registration
                            Number</label>
                        <div class="mt-2">
                            <input required id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                v-model="buyerData.registration_number"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Chassis
                            Number</label>
                        <div class="mt-2">
                            <input required type="text" name="vehicle-color" id="vehicle-color"
                                autocomplete="vehicle-color" v-model="buyerData.chassis_number"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Body type</label>
                        <div class="mt-2">
                            <input required id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                v-model="buyerData.body_type"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Body type
                            code</label>
                        <div class="mt-2">
                            <input required type="text" name="vehicle-color" id="vehicle-color"
                                autocomplete="vehicle-color" v-model="buyerData.body_type_code"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Model Code</label>
                        <div class="mt-2">
                            <input required id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                v-model="buyerData.model_code"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Customer
                            Code</label>
                        <div class="mt-2">
                            <input required type="text" name="vehicle-color" id="vehicle-color"
                                autocomplete="vehicle-color" v-model="buyerData.customer_code"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Vehicle
                            Risk</label>
                        <div class="mt-2">
                            <input required id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                v-model="buyerData.vehicle_risk"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-full">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Branch</label>
                        <div class="mt-2">
                            <input required id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                v-model="buyerData.branch"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-full mt-10">
                        <button class="button-primary w-1/2 mx-auto block">Submit</button>
                    </div>

                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const buyerData = reactive({
    first_name: "Francis",
    last_name: "Doh",
    mobile_number: "0242762412",
    vehicle_make: "Opel",
    vehicle_model: "Astra",
    registration_number: "GW 147-V",
    vehicle_colour: "White",
    email: "camoakohene84@gmail.com",
    id_type: "National ID",
    id_number: "GHA-00000000-9",
    chassis_number: "8743923472497429",
    body_type: "Saloon",
    body_type_code: "SALOON",
    model_code: "100269",
    customer_code: "ID0134348",
    vehicle_risk: "AMBULANCE",
    branch: "AMBULANCE"
})
</script>

<style scoped></style>