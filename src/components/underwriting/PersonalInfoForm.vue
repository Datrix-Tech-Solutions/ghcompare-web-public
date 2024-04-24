<template>
    <div class="bg-white md:p-16 p-10 rounded-lg relative">

        <!-- form loader -->
        <div class="absolute top-0 bottom-0 right-0 left-0 bg-black/10 z-20 rounded-lg flex justify-center items-center"
            v-if="underwritingDataStore.processing">
            <div class="bg-black relative z-30 px-5 py-3 rounded-lg">
                <Loader />
            </div>
        </div>

        <div class="mb-14">
            <img :src="institutionLogo" alt="" class="max-w-[250px] mx-auto">
        </div>

        <!-- form -->
        <form @submit.prevent="$emit('sendData', { personalData })" class="">
            <div class="mb-10">
                <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.
                </p>

                <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <!-- Account Type -->
                    <div class="sm:col-span-full" v-if="underwritingDataStore.checkFormField('account_type')">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Account type
                            (policy)</label>
                        <div class="mt-2">
                            <select required name="" id="" v-model="personalData.account_type"
                                :disabled="underwritingDataStore.processing" class="input-styling">
                                <option value="" disabled>Select account Type</option>
                                <template
                                    v-for="accountType in underwritingDataStore.checkFormField('account_type')?.datalist"
                                    :key="accountType">
                                    <option :value='accountType'>{{ accountType }}
                                    </option>
                                </template>
                            </select>
                        </div>
                    </div>


                    <!-- Title -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('title')">
                        <p class="block text-sm font-medium leading-6 text-gray-900">Title</p>
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
                        <p class="block text-sm font-medium leading-6 text-gray-900">Gender</p>
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
                        <p class="block text-sm font-medium leading-6 text-gray-900">Marital Status</p>
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
                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First
                            Name</label>
                        <div class="mt-2">
                            <input required type="text" name="first-name" id="first-name" autocomplete="given-name"
                                placeholder="John" v-model="personalData.first_name" class="input-styling" />
                        </div>
                    </div>

                    <!-- Last Name -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('last_name')">
                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last
                            Name</label>
                        <div class="mt-2">
                            <input required type="text" name="last-name" id="last-name" autocomplete="family-name"
                                placeholder="Doe" v-model="personalData.last_name" class="input-styling" />
                        </div>
                    </div>

                    <!-- Date of birth -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('dob')">
                        <label for="dob" class="block text-sm font-medium leading-6 text-gray-900">Date of
                            Birth</label>
                        <div class="mt-2">
                            <input required type="date" name="dob" id="dob" autocomplete="dob" placeholder="Doe"
                                v-model="personalData.dob" class="input-styling" />
                        </div>
                    </div>

                    <!-- Profession -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('profession')">
                        <label for="profession"
                            class="block text-sm font-medium leading-6 text-gray-900">Profession</label>
                        <div class="mt-2">
                            <input required type="text" name="profession" id="profession" autocomplete="profession"
                                placeholder="Teacher" v-model="personalData.profession" class="input-styling" />
                        </div>
                    </div>

                    <!-- email address -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('email')">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
                            address</label>
                        <div class="mt-2">
                            <input required id="email" name="email" type="email" autocomplete="email"
                                placeholder="youremail@email.com" v-model="personalData.email" class="input-styling" />
                        </div>
                    </div>

                    <!-- Phone number -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('mobile_number')">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Phone
                            Number</label>
                        <div class="mt-2">
                            <input required type="number" name="phone-number" id="phone-number" placeholder="0500000000"
                                autocomplete="phone-number" v-model="personalData.mobile_number"
                                class="input-styling" />
                        </div>
                    </div>

                    <!-- addreess -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('address')">
                        <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Residential
                            Address</label>
                        <div class="mt-2">
                            <input required type="text" name="address" id="address" autocomplete="address"
                                placeholder="Accra" v-model="personalData.address" class="input-styling" />
                        </div>
                    </div>

                    <!-- gps_code -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('gps_code')">
                        <label for="gps_code" class="block text-sm font-medium leading-6 text-gray-900">GPS Code</label>
                        <div class="mt-2">
                            <input required type="text" name="gps_code" id="gps_code" autocomplete="gps_code"
                                placeholder="GS-000-0000" v-model="personalData.gps_code" class="input-styling" />
                        </div>
                    </div>

                    <!-- Id type -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('id_type')">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">ID type
                        </label>
                        <div class="mt-2">
                            <select required name="" id="" v-model="personalData.id_type"
                                :disabled="underwritingDataStore.processing" class="input-styling">
                                <option value="" disabled>Select Identification</option>
                                <template v-for="id in idTypes" :key="id">
                                    <option :value='id' v-if="id">{{ id }}</option>
                                </template>
                            </select>
                        </div>
                    </div>

                    <!-- Id Number -->
                    <div class="sm:col-span-3" v-if="underwritingDataStore.checkFormField('id_number')">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">ID
                            Number</label>
                        <div class="mt-2">
                            <input required type="text" name="id-number" id="id-number" autocomplete="id-number"
                                v-model="personalData.id_number" placeholder="GHA-XXXXXXXX-X" class="input-styling" />
                        </div>
                    </div>

                    <div class="sm:col-span-full" v-if="underwritingDataStore.checkFormField('branch')">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Branch</label>
                        <div class="mt-2">
                            <select required name="" id="" v-model="personalData.branch"
                                :disabled="underwritingDataStore.processing" class="input-styling">
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

const institutionLogo = inject('institutionLogo')
const underwritingDataStore = useUnderwritingDataStore()

const personalData = ref(underwritingDataStore.underwritingData.personalData)
const idTypes = ref([])
const branches = ref([])

onMounted(async () => {
    if (underwritingDataStore.checkFormField('id_type')) {
        idTypes.value = await underwritingDataStore.getIdTypes()
    }
    if (underwritingDataStore.checkFormField('branch')) {
        branches.value = await underwritingDataStore.getBranches()
    }
    console.log(idTypes.value, branches.value)
})
</script>

<style lang="scss" scoped></style>