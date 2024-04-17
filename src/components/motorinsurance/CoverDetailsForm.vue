<script setup>
import { ArrowRightIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline';
import { coverTypeList as coverType, durationList as duration } from '../../data/car_data.js'
import { helpInfo } from '../../data/help_data'
import { useRouter } from 'vue-router'
import { ref } from 'vue';

const router = useRouter()

const props = defineProps({
    formData: {
        type: Object
    }
})

//form data values to be used for and captured from this form
const coverData = ref({
    formType: 'cover details',
    data: props.formData.coverDetails,
})

/**
 * cover type and duration options 
 * @type {object}
 */
const coverDetails = {
    coverType,
    duration,
}

//cover details information data 
const info = ref(helpInfo.coverDetailsHelp)

const showCoverTypeInfo = ref(false) //to hide and show cover type info
const showDurationInfo = ref(false) //to hide and show duration info

//emits
const emit = defineEmits(['sendFormData'])

/**
 * submit form
 * @function submitForm
 */
async function submitForm() {
    await router.push({ name: 'MotorInsurance', query: { form: 'vehicle_details' } })
    emit('sendFormData', coverData.value)
}
</script>

<template>
    <div class="bg-white max-w-2xl py-10 md:px-14 px-6 rounded-lg mx-auto">
        <!-- Cover details -->
        <h3 class="text-2xl font-bold mb-5">Cover Details</h3>

        <!-- the form -->
        <form @submit.prevent="submitForm">
            <!-- Email -->
            <div class="">
                <div class="w-1/2">
                    <h4 class="text-lg text-primary font-semibold mb-3">Your Email</h4>
                    <input type="email" name="seats" id="email" class="w-full" required v-model="coverData.data.email"
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
                            :value="covertype.name" v-model="coverData.data.prefered_cover">
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
                            :value="duration.value" v-model="coverData.data.period_cover">
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
                <input required type="date" name="startdate" id="startdate" class="p-1"
                    v-model="coverData.data.start_date">
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