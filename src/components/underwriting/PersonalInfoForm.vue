<template>
    <div class="bg-white md:p-16 p-10 rounded-lg relative">

        <!-- form loader -->
        <!-- <div
            class="absolute top-0 bottom-0 right-0 left-0 bg-black/10 z-20 rounded-lg flex justify-center items-center">
            <div class="bg-black relative z-30 px-5 py-3 rounded-lg">
                <Loader />
            </div>
        </div> -->

        <div class="mb-14">
            <img :src="institutionLogo" alt="" class="max-w-[250px] mx-auto">
        </div>

        <!-- form -->
        <form @submit.prevent="$emit('sendData', { personalData })" class="">
            <div class="mb-10">
                <h2 class="text-2xl font-bold mb-">Personal Information</h2>

                <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <!-- Account Type -->
                    <div class="sm:col-span-full" v-if="underwritingDataStore.checkFormField('account_type')">
                        <label for="email" class="label">Account type
                            (policy)</label>
                        <div class="mt-2">
                            <select required name="" id="" v-model="personalData.account_type"
                                :disabled="underwritingDataStore.processing" class="w-full">
                                <option value="" disabled>Select account Type</option>
                                <template
                                    v-for="accountType in underwritingDataStore.checkFormField('account_type')?.datalist"
                                    :key="accountType">
                                    <option :value='accountType'>{{ accountType }}
                                    </option>
                                </template>
                            </select>
                        </div>
                        <!-- <SelectField labelName="Account type" :disable="underwritingDataStore.processing"
                            :options="underwritingDataStore.checkFormField('account_type')?.datalist"
                            v-model="personalData.account_type" /> -->
                    </div>


                    <!-- Title -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('title')">
                        <p class="label">Title</p>
                        <div class="mt-2 flex gap-3">
                            <!-- Mr -->
                            <div class="">
                                <input required type="radio" name="title" id="mr" value="Mr" autocomplete=""
                                    v-model="personalData.title" class="" />
                                <label for="mr" class="text-sm ml-1">Mr.</label>
                            </div>
                            <!-- Mrs -->
                            <div class="">
                                <input required type="radio" name="title" id="mrs" value="Mrs" autocomplete="given-name"
                                    v-model="personalData.title" class="" />
                                <label for="mrs" class="text-sm ml-1">Mrs.</label>
                            </div>
                            <!-- Dr -->
                            <div class="">
                                <input required type="radio" name="title" id="dr" value="Dr" autocomplete="given-name"
                                    v-model="personalData.title" class="" />
                                <label for="dr" class="text-sm ml-1">Dr.</label>
                            </div>
                            <!-- Pr -->
                            <div class="">
                                <input required type="radio" name="title" id="pr" value="Pr" autocomplete="given-name"
                                    v-model="personalData.title" class="" />
                                <label for="pr" class="text-sm ml-1">Pr.</label>
                            </div>
                        </div>
                    </div>

                    <!-- gender -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('gender')">
                        <p class="label">Gender</p>
                        <div class="mt-2 flex gap-3">
                            <!-- Male -->
                            <div class="">
                                <input required type="radio" name="gender" id="male" value="male" autocomplete=""
                                    v-model="personalData.gender" class="" />
                                <label for="male" class="text-sm ml-1">Male</label>
                            </div>
                            <!-- Female -->
                            <div class="">
                                <input required type="radio" name="gender" id="female" value="female"
                                    autocomplete="given-name" v-model="personalData.gender" class="" />
                                <label for="female" class="text-sm ml-1">Female</label>
                            </div>
                        </div>
                    </div>

                    <!-- marital status -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('marital_status')">
                        <p class="label">Marital Status</p>
                        <div class="mt-2 flex gap-3">
                            <!-- Simgle -->
                            <div class="">
                                <input required type="radio" name="marital_status" id="single" value="single"
                                    autocomplete="" v-model="personalData.marital_status" class="" />
                                <label for="single" class="text-sm ml-1">Single</label>
                            </div>
                            <!-- Married -->
                            <div class="">
                                <input required type="radio" name="marital_status" id="married" value="married"
                                    autocomplete="given-name" v-model="personalData.marital_status" class="" />
                                <label for="married" class="text-sm ml-1">Married</label>
                            </div>
                            <!-- Divorced -->
                            <div class="">
                                <input required type="radio" name="marital_status" id="divorced" value="divorced"
                                    autocomplete="given-name" v-model="personalData.marital_status" class="" />
                                <label for="divorced" class="text-sm ml-1">Divorced</label>
                            </div>
                        </div>
                    </div>

                    <!-- First name -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('first_name')">
                        <label for="first-name" class="label">First
                            Name</label>
                        <div class="mt-2">
                            <input required type="text" name="first-name" id="first-name" autocomplete="given-name"
                                placeholder="John" v-model="personalData.first_name" class="w-full" />
                        </div>
                    </div>

                    <!-- Last Name -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('last_name')">
                        <label for="last-name" class="label">Last
                            Name</label>
                        <div class="mt-2">
                            <input required type="text" name="last-name" id="last-name" autocomplete="family-name"
                                placeholder="Doe" v-model="personalData.last_name" class="w-full" />
                        </div>
                    </div>

                    <!-- Date of birth -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('dob')">
                        <label for="dob" class="label">Date of
                            Birth</label>
                        <div class="mt-2">
                            <input required type="date" name="dob" id="dob" autocomplete="dob" placeholder="Doe"
                                v-model="personalData.dob" class="w-full" />
                        </div>
                    </div>

                    <!-- Profession -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('profession')">
                        <label for="profession" class="label">Profession</label>
                        <div class="mt-2">
                            <input required type="text" name="profession" id="profession" autocomplete="profession"
                                placeholder="Teacher" v-model="personalData.profession" class="w-full" />
                        </div>
                    </div>

                    <!-- email address -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('email')">
                        <label for="email" class="label">Email
                            address</label>
                        <div class="mt-2">
                            <input required id="email" name="email" type="email" autocomplete="email"
                                placeholder="youremail@email.com" v-model="personalData.email" class="w-full" />
                        </div>
                    </div>

                    <!-- Phone number -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('mobile_number')">
                        <label for="country" class="label">Phone
                            Number</label>
                        <div class="mt-2">
                            <input required type="number" name="phone-number" id="phone-number" placeholder="0500000000"
                                autocomplete="phone-number" v-model="personalData.mobile_number" class="w-full" />
                        </div>
                    </div>

                    <!-- addreess -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('address')">
                        <label for="address" class="label">Residential
                            Address</label>
                        <div class="mt-2">
                            <input required type="text" name="address" id="address" autocomplete="address"
                                placeholder="Accra" v-model="personalData.address" class="w-full" />
                        </div>
                    </div>

                    <!-- gps_code -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('gps_code')">
                        <label for="gps_code" class="label">GPS Code</label>
                        <div class="mt-2">
                            <input required type="text" name="gps_code" id="gps_code" autocomplete="gps_code"
                                placeholder="GS-000-0000" v-model="personalData.gps_code" class="w-full" />
                        </div>
                    </div>

                    <!-- Id type -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('id_type')">
                        <label for="email" class="label">ID type
                        </label>
                        <div class="mt-2">
                            <select required name="" id="" v-model="personalData.id_type"
                                :disabled="underwritingDataStore.processing" class="w-full">
                                <option value="" disabled>Select Identification</option>
                                <template v-for="id in idTypes" :key="id">
                                    <option :value='id' v-if="id">{{ id }}</option>
                                </template>
                            </select>
                        </div>
                    </div>

                    <!-- Id Number -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('id_number')">
                        <label for="country" class="label">ID
                            Number</label>
                        <div class="mt-2">
                            <input required type="text" name="id-number" id="id-number" autocomplete="id-number"
                                v-model="personalData.id_number" placeholder="GHA-XXXXXXXX-X" class="w-full" />
                        </div>
                    </div>

                    <div class="sm:col-span-full" v-if="underwritingDataStore.checkFormField('branch')">
                        <label for="email" class="label">Branch</label>
                        <div class="mt-2">
                            <select required name="" id="" v-model="personalData.branch"
                                :disabled="underwritingDataStore.processing" class="w-full">
                                <option value="" disabled>Select your branch</option>
                                <template v-for="branch in branches" :key="branch.brndesc">
                                    <option :value='branch.brndesc'>{{ branch.brndesc }}
                                    </option>
                                </template>
                            </select>
                        </div>
                    </div>


                </div>
            </div>

            <div class="sm:col-span-full mt-10">
                <ButtonWithArrow class="button-primary px-5 ml-auto block" text="Vehicle Info"></ButtonWithArrow>
            </div>

        </form>
    </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import ButtonWithArrow from '../../components/ui/ButtonWithArrow.vue'
import { useUnderwritingDataStore } from '../../store/underwritingData';
import Loader from '../ui/Loader.vue';
import SelectField from './formfields/SelectField.vue';

defineProps({
    idTypes: Array,
    branches: Array,
})

const institutionLogo = inject('institutionLogo')
const underwritingDataStore = useUnderwritingDataStore()

const personalData = ref(underwritingDataStore.underwritingData.personalData)


onMounted(async () => {

})
</script>

<style lang="scss" scoped></style>