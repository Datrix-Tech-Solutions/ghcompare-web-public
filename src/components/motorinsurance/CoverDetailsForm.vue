<script setup>
import { ArrowRightIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline';
import { coverTypeList as coverType, durationList as duration } from '../../data/car_data.js'
import { useFormDataStore } from '../../store/formData';
import { ref } from 'vue';

const formDataStore = useFormDataStore()

//form data values to be used for and captured from this form
const coverData = ref(formDataStore.motorInsuranceData.coverDetails)

// cover type and duration options
const coverDetails = {
    coverType,
    duration,
}
</script>

<template>
    <div class="bg-white max-w-2xl py-10 md:px-14 px-6 rounded-lg mx-auto">
        <!-- Cover details -->
        <h3 class="text-2xl font-bold mb-5">Cover Details</h3>

        <!-- the form -->
        <form @submit.prevent="$emit('sendData', { coverData })">
            <!-- Email -->
            <div class="">
                <div class="w-1/2">
                    <h4 class="text-lg text-primary font-semibold mb-3">Your Email</h4>
                    <input type="email" name="seats" id="email" class="w-full" required v-model="coverData.email"
                        placeholder="Johndoe@somemail.com">
                </div>
            </div>

            <hr class="my-6">

            <!-- cover type -->
            <h4 class="text-lg text-primary font-semibold mb-3">Cover Type</h4>

            <!-- radio buttons -->
            <div class="">
                <template v-for="covertype in coverDetails.coverType" :key="covertype.id">
                    <p class="mb-2">
                        <input required type="radio" name="covertype" :id="covertype.name" class="mr-2 cursor-pointer"
                            :value="covertype.name" v-model="coverData.prefered_cover">
                        <label class="cursor-pointer" :for="covertype.name">{{ covertype.name }}</label>
                    </p>
                </template>
            </div>

            <hr class="my-6">

            <!-- Duration -->
            <h4 class="text-lg text-primary font-semibold mb-3">Duration</h4>

            <!-- radio buttons -->
            <div class="">
                <template v-for="duration in coverDetails.duration" :key="duration.id">
                    <p class="mb-2">
                        <input type="radio" required name="duration" :id="duration.name" class="mr-2 cursor-pointer"
                            :value="duration.value" v-model="coverData.period_cover">
                        <label class="cursor-pointer" :for="duration.name"> {{ duration.name }}</label>
                    </p>
                </template>
            </div>

            <hr class="my-6">

            <!-- Start date -->
            <div class="flex justify-between items-start">
                <h4 class="text-lg text-primary font-semibold mb-3">Start Date</h4>

            </div>
            <!-- Date component -->
            <div class="">
                <input required type="date" name="startdate" id="startdate" class="p-1" v-model="coverData.start_date">
            </div>

            <!-- next button -->

            <div class="flex justify-end mt-10">
                <button class="group button-primary">Next
                    <ArrowRightIcon class="w-5 h-5 inline  group-hover:translate-x-2 transition" />
                </button>
            </div>


        </form>


    </div>
</template>