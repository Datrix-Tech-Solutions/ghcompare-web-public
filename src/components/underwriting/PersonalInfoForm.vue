<template>
    <div class="bg-white md:p-16 p-10 rounded-lg relative">

        <!-- form loader -->
        <div class="absolute top-0 bottom-0 right-0 left-0 bg-black/10 z-20 rounded-lg flex justify-center items-center"
            v-if="underwritingDataStore.processing">
            <div class="bg-black relative z-30 px-5 py-3 rounded-lg">
                <Loader />
            </div>
        </div>

        <!-- form -->
        <form @submit.prevent="$emit('sendData', { personalData })" class="">
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
                                placeholder="John" v-model="personalData.first_name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last
                            name</label>
                        <div class="mt-2">
                            <input required type="text" name="last-name" id="last-name" autocomplete="family-name"
                                placeholder="Doe" v-model="personalData.last_name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
                            address</label>
                        <div class="mt-2">
                            <input required id="email" name="email" type="email" autocomplete="email"
                                placeholder="youremail@email.com" v-model="personalData.email"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Phone
                            Number</label>
                        <div class="mt-2">
                            <input required type="number" name="phone-number" id="phone-number" placeholder="0500000000"
                                autocomplete="phone-number" v-model="personalData.mobile_number"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">ID type
                        </label>
                        <div class="mt-2">
                            <select required name="" id="" v-model="personalData.id_type"
                                :disabled="underwritingDataStore.processing"
                                class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value="" disabled>Select Identification</option>
                                <template v-for="id in idTypes" :key="id">
                                    <option :value='id' v-if="id">{{ id }}</option>
                                </template>
                            </select>
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">ID
                            Number</label>
                        <div class="mt-2">
                            <input required type="text" name="id-number" id="id-number" autocomplete="id-number"
                                v-model="personalData.id_number" placeholder="GHA-XXXXXXXX-X"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-full">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Branch</label>
                        <div class="mt-2">
                            <select required name="" id="" v-model="personalData.branch"
                                :disabled="underwritingDataStore.processing"
                                class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value="" disabled>Select your branch</option>
                                <template v-for="branch in branches" :key="branch.brndesc">
                                    <option :value='branch.brndesc'>{{ branch.brndesc }}
                                    </option>
                                </template>
                            </select>
                            <!-- <input required id="reg-number" name="reg-number" type="text" autocomplete="reg-number"
                                v-model="personalData.branch"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> -->
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
import { ref, onMounted } from 'vue';
import ButtonWithArrow from '../../components/ui/ButtonWithArrow.vue'
import { useUnderwritingDataStore } from '../../store/underwritingData';
import Loader from '../ui/Loader.vue';

const underwritingDataStore = useUnderwritingDataStore()

const personalData = ref(underwritingDataStore.underwritingData.personalData)
const idTypes = ref([])
const branches = ref([])

onMounted(async () => {
    idTypes.value = await underwritingDataStore.getIdTypes()
    branches.value = await underwritingDataStore.getBranches()
    console.log(idTypes.value, branches.value)
})
</script>

<style lang="scss" scoped></style>