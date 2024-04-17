<template>
    <div class="bg-white px-10 py-16 rounded-lg">

        <div class="mb-14">
            <img :src="institutionLogo" alt="" class="max-w-[250px] mx-auto">
        </div>


        <form @submit.prevent="$emit('sendData')" class="">
            <div class="mb-10">
                <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">Review information submitted for accuracy
                </p>

                <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <!-- Account Type -->
                    <div class="sm:col-span-full" v-if="underwritingDataStore.checkFormField('account_type')">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Account type
                            (policy)</label>
                        <div class="mt-2">
                            <input required name="" id="" v-model="buyerData.account_type"
                                class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <!-- First name  -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('first_name')">
                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First
                            name</label>
                        <div class="mt-2">
                            <input readonly type="text" name="first-name" id="first-name" autocomplete="given-name"
                                :value="buyerData.first_name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <!-- Last name -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('last_name')">
                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last
                            name</label>
                        <div class="mt-2">
                            <input readonly type="text" name="last-name" id="last-name" autocomplete="family-name"
                                :value="buyerData.last_name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('email')">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
                            address</label>
                        <div class="mt-2">
                            <input readonly id="email" name="email" type="email" autocomplete="email"
                                :value="buyerData.email"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <!-- Phone number -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('mobile_number')">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Phone
                            Number</label>
                        <div class="mt-2">
                            <input readonly type="number" name="phone-number" id="phone-number"
                                autocomplete="phone-number" :value="buyerData.mobile_number"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <!-- ID type -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('id_type')">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">ID type
                        </label>
                        <div class="mt-2">
                            <input readonly id="id-type" name="id-type" type="text" autocomplete="id-type"
                                :value="buyerData.id_type"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <!-- ID number -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('id_number')">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">ID
                            Number</label>
                        <div class="mt-2">
                            <input readonly type="text" name="id-number" id="id-number" autocomplete="id-number"
                                :value="buyerData.id_number"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <!-- branch -->
                    <div class="sm:col-span-full" v-if="underwritingDataStore.checkFormField('branch')">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Branch</label>
                        <div class="mt-2">
                            <input readonly id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                :value="buyerData.branch"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Vehicle information -->
            <div class="">
                <h2 class="text-base font-semibold leading-7 text-gray-900">Vehicle Information</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">Review information submitted for accuracy
                </p>

                <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <!-- Vehicle make -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_make')">
                        <label for="vehicle-make" class="block text-sm font-medium leading-6 text-gray-900">Vehicle Make
                        </label>
                        <div class="mt-2">
                            <input readonly type="text" name="vehicle-make" id="vehicle-make"
                                autocomplete="vehicle-make" :value="buyerData.vehicle_make"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <!-- vehicle model -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_model')">
                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Vehicle
                            Model</label>
                        <div class="mt-2">
                            <input readonly type="text" name="vehicle-model" id="vehicle-model"
                                autocomplete="vehicle-model" :value="buyerData.vehicle_model"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <!-- Vehicle color -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_colour')">
                        <label for="vehicle-colr" class="block text-sm font-medium leading-6 text-gray-900">Vehicle
                            Color</label>
                        <div class="mt-2">
                            <input readonly type="text" name="vehicle-color" id="vehicle-color"
                                autocomplete="vehicle-color" :value="buyerData.vehicle_colour"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <!-- body type -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('body_type')">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Body type</label>
                        <div class="mt-2">
                            <input readonly id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                :value="buyerData.body_type"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <!-- Registration number -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('registration_number')">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Registration
                            Number</label>
                        <div class="mt-2">
                            <input readonly id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                :value="buyerData.registration_number"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <!-- Chassis number -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('chassis_number')">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Chassis
                            Number</label>
                        <div class="mt-2">
                            <input readonly type="text" name="vehicle-color" id="vehicle-color"
                                autocomplete="vehicle-color" :value="buyerData.chassis_number"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <!-- body type code -->
                    <!-- <div class="sm:col-span-3">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Body type
                            code</label>
                        <div class="mt-2">
                            <input readonly type="text" name="vehicle-color" id="vehicle-color"
                                autocomplete="vehicle-color" :value="buyerData.body_type_code"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div> -->

                    <!-- Model code -->
                    <!-- <div class="sm:col-span-3">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Model Code</label>
                        <div class="mt-2">
                            <input readonly id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                :value="buyerData.model_code"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div> -->

                    <!-- customer code -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('customer_code')">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Customer
                            Code</label>
                        <div class="mt-2">
                            <input readonly type="text" name="vehicle-color" id="vehicle-color"
                                autocomplete="vehicle-color" :value="buyerData.customer_code"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <!-- Vehicle risk -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_risk')">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Vehicle
                            Risk</label>
                        <div class="mt-2">
                            <input readonly id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                :value="buyerData.vehicle_risk"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-full mt-10 flex justify-between flex-row-reverse">
                        <button class="button-primary px-10  block">
                            <span v-if="!underwritingDataStore?.processing">
                                Submit
                            </span>
                            <span v-else>
                                <Loader />
                            </span>
                        </button>
                        <ButtonWithArrow class="button-primary px-5  block" text="Vehicle Info" :left="true"
                            @click="$emit('previousForm')">
                        </ButtonWithArrow>
                    </div>

                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { reactive, ref, inject } from 'vue';
import ButtonWithArrow from '../../components/ui/ButtonWithArrow.vue'
import Loader from '../ui/Loader.vue';
import { useUnderwritingDataStore } from '../../store/underwritingData';

const institutionLogo = inject('institutionLogo')
const underwritingDataStore = useUnderwritingDataStore()
const buyerData = ref({ ...underwritingDataStore.underwritingData.personalData, ...underwritingDataStore.underwritingData.vehicleData })
</script>

<style scoped></style>