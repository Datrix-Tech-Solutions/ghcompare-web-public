<template>
    <div class="bg-white px-10 py-16 rounded-lg">

        <div class="mb-14">
            <img :src="institutionLogo" alt="" class="max-w-[250px] mx-auto">
        </div>


        <form @submit.prevent="$emit('sendData')" class="">
            <div class="mb-10">
                <h2 class="text-xl font-bold">Personal Information</h2>
                <p class="">Review information submitted for accuracy
                </p>

                <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <!-- Account Type -->
                    <div class="sm:col-span-full" v-if="underwritingDataStore.checkFormField('account_type')">
                        <label for="email" class="label">Account type
                            (policy)</label>
                        <div class="mt-2">
                            <input required name="" id="" v-model="buyerData.account_type" readonly class="w-full" />
                        </div>
                    </div>

                    <!-- title-->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('title')">
                        <label for="text" class="label">Title</label>
                        <div class="mt-2">
                            <input required name="" id="" v-model="buyerData.title" readonly class="w-full" />
                        </div>
                    </div>

                    <!-- gender-->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('gender')">
                        <label for="text" class="label">Gender</label>
                        <div class="mt-2">
                            <input required name="" id="" v-model="buyerData.gender" readonly class="w-full" />
                        </div>
                    </div>

                    <!-- marital_status -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('marital_status ')">
                        <label for="text" class="label">Marital Status
                        </label>
                        <div class="mt-2">
                            <input required name="" id="" v-model="buyerData.marital_status" readonly class="w-full" />
                        </div>
                    </div>

                    <!-- First name  -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('first_name')">
                        <label for="first-name" class="label">First
                            name</label>
                        <div class="mt-2">
                            <input readonly type="text" name="first-name" id="first-name" autocomplete="given-name"
                                :value="buyerData.first_name" class="w-full" />
                        </div>
                    </div>

                    <!-- Last name -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('last_name')">
                        <label for="last-name" class="label">Last
                            name</label>
                        <div class="mt-2">
                            <input readonly type="text" name="last-name" id="last-name" autocomplete="family-name"
                                :value="buyerData.last_name" class="w-full" />
                        </div>
                    </div>

                    <!-- dob-->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('dob')">
                        <label for="text" class="label">Date of
                            Birth</label>
                        <div class="mt-2">
                            <input required name="" id="" v-model="buyerData.dob" readonly class="w-full" />
                        </div>
                    </div>

                    <!-- profession-->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('profession')">
                        <label for="text" class="label">Profession</label>
                        <div class="mt-2">
                            <input required name="" id="" v-model="buyerData.profession" readonly class="w-full" />
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('email')">
                        <label for="email" class="label">Email
                            address</label>
                        <div class="mt-2">
                            <input readonly id="email" name="email" type="email" autocomplete="email"
                                :value="buyerData.email" class="w-full" />
                        </div>
                    </div>

                    <!-- Phone number -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('mobile_number')">
                        <label for="country" class="label">Phone
                            Number</label>
                        <div class="mt-2">
                            <input readonly type="number" name="phone-number" id="phone-number"
                                autocomplete="phone-number" :value="buyerData.mobile_number" class="w-full" />
                        </div>
                    </div>

                    <!-- address-->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('address')">
                        <label for="text" class="label">Address</label>
                        <div class="mt-2">
                            <input required name="" id="" v-model="buyerData.address" readonly class="w-full" />
                        </div>
                    </div>

                    <!-- gps_code-->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('gps_code')">
                        <label for="text" class="label">GPS Code</label>
                        <div class="mt-2">
                            <input required name="" id="" v-model="buyerData.gps_code" readonly class="w-full" />
                        </div>
                    </div>

                    <!-- ID type -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('id_type')">
                        <label for="email" class="label">ID type
                        </label>
                        <div class="mt-2">
                            <input readonly id="id-type" name="id-type" type="text" autocomplete="id-type"
                                :value="buyerData.id_type" class="w-full" />
                        </div>
                    </div>

                    <!-- ID number -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('id_number')">
                        <label for="country" class="label">ID
                            Number</label>
                        <div class="mt-2">
                            <input readonly type="text" name="id-number" id="id-number" autocomplete="id-number"
                                :value="buyerData.id_number" class="w-full" />
                        </div>
                    </div>

                    <!-- branch -->
                    <div class="sm:col-span-full" v-if="underwritingDataStore.checkFormField('branch')">
                        <label for="email" class="label">Branch</label>
                        <div class="mt-2">
                            <input readonly id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                :value="buyerData.branch" class="w-full" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Vehicle information -->
            <div class="">
                <h2 class="text-xl font-bold">Vehicle Information</h2>
                <p class="">Review information submitted for accuracy
                </p>

                <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <!-- vehicle_trim-->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_trim')">
                        <label for="text" class="label">Vehicle Trim</label>
                        <div class="mt-2">
                            <input required name="" id="" v-model="buyerData.vehicle_trim" readonly class="w-full" />
                        </div>
                    </div>

                    <!-- Vehicle make -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_make')">
                        <label for="vehicle-make" class="label">Vehicle Make
                        </label>
                        <div class="mt-2">
                            <input readonly type="text" name="vehicle-make" id="vehicle-make"
                                autocomplete="vehicle-make" :value="buyerData.vehicle_make" class="w-full" />
                        </div>
                    </div>

                    <!-- vehicle model -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_model')">
                        <label for="last-name" class="label">Vehicle
                            Model</label>
                        <div class="mt-2">
                            <input readonly type="text" name="vehicle-model" id="vehicle-model"
                                autocomplete="vehicle-model" :value="buyerData.vehicle_model" class="w-full" />
                        </div>
                    </div>

                    <!-- vehicle_fuel_type-->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_fuel_type')">
                        <label for="text" class="label">Vehicle Fuel
                            Type</label>
                        <div class="mt-2">
                            <input required name="" id="" v-model="buyerData.vehicle_fuel_type" readonly
                                class="w-full" />
                        </div>
                    </div>

                    <!-- vehicle_no_cylinders-->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_no_cylinders')">
                        <label for="text" class="label">Number of
                            Cylinders</label>
                        <div class="mt-2">
                            <input required name="" id="" v-model="buyerData.vehicle_no_cylinders" readonly
                                class="w-full" />
                        </div>
                    </div>

                    <!-- vehicle_cc-->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_cc')">
                        <label for="text" class="label">Vehicle CC</label>
                        <div class="mt-2">
                            <input required name="" id="" v-model="buyerData.vehicle_cc" readonly class="w-full" />
                        </div>
                    </div>

                    <!-- vehicle_drive_type-->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_drive_type')">
                        <label for="text" class="label">Vehicle Drive
                            Type</label>
                        <div class="mt-2">
                            <input required name="" id="" v-model="buyerData.vehicle_drive_type" readonly
                                class="w-full" />
                        </div>
                    </div>

                    <!-- vehicle_engine_no -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_engine_no')">
                        <label for="text" class="label">vehicle_engine_no
                        </label>
                        <div class="mt-2">
                            <input required name="" id="" v-model="buyerData.vehicle_engine_no" readonly
                                class="w-full" />
                        </div>
                    </div>

                    <!-- Vehicle color -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_colour')">
                        <label for="vehicle-colr" class="label">Vehicle
                            Color</label>
                        <div class="mt-2">
                            <input readonly type="text" name="vehicle-color" id="vehicle-color"
                                autocomplete="vehicle-color" :value="buyerData.vehicle_colour" class="w-full" />
                        </div>
                    </div>

                    <!-- body type -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('body_type')">
                        <label for="email" class="label">Body type</label>
                        <div class="mt-2">
                            <input readonly id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                :value="buyerData.body_type" class="w-full" />
                        </div>
                    </div>

                    <!-- Registration number -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('registration_number')">
                        <label for="email" class="label">Registration
                            Number</label>
                        <div class="mt-2">
                            <input readonly id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                :value="buyerData.registration_number" class="w-full" />
                        </div>
                    </div>

                    <!-- Chassis number -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('chassis_number')">
                        <label for="country" class="label">Chassis
                            Number</label>
                        <div class="mt-2">
                            <input readonly type="text" name="vehicle-color" id="vehicle-color"
                                autocomplete="vehicle-color" :value="buyerData.chassis_number" class="w-full" />
                        </div>
                    </div>

                    <!-- body type code -->
                    <!-- <div class="sm:col-span-3">
                        <label for="country" class="label">Body type
                            code</label>
                        <div class="mt-2">
                            <input readonly type="text" name="vehicle-color" id="vehicle-color"
                                autocomplete="vehicle-color" :value="buyerData.body_type_code"
                                class="w-full" />
                        </div>
                    </div> -->

                    <!-- Model code -->
                    <!-- <div class="sm:col-span-3">
                        <label for="email" class="label">Model Code</label>
                        <div class="mt-2">
                            <input readonly id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                :value="buyerData.model_code"
                                class="w-full" />
                        </div>
                    </div> -->

                    <!-- customer code -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('customer_code')">
                        <label for="country" class="label">Customer
                            Code</label>
                        <div class="mt-2">
                            <input readonly type="text" name="vehicle-color" id="vehicle-color"
                                autocomplete="vehicle-color" :value="buyerData.customer_code" class="w-full" />
                        </div>
                    </div>

                    <!-- Vehicle risk -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('vehicle_risk')">
                        <label for="email" class="label">Vehicle
                            Risk</label>
                        <div class="mt-2">
                            <input readonly id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                :value="buyerData.vehicle_risk" class="w-full" />
                        </div>
                    </div>

                    <div class="sm:col-span-full mt-10 flex justify-between flex-row-reverse">
                        <button class="button-primary px-10  block" :disabled="underwritingDataStore?.processing">
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