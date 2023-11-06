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
            <!-- cover type -->
            <div class="flex justify-between items-start">
                <h4 class="text-lg text-primary font-semibold mb-3">Cover Type</h4>

                <!-- Information on cover Type -->
                <div class="relative">
                    <QuestionMarkCircleIcon class="w-6 h-6 text-primary cursor-pointer"
                        @click="() => { showCoverTypeInfo = !showCoverTypeInfo }" />

                    <!-- overlay for hiding cover type info card -->
                    <div class="overlay fixed top-0 bottom-0 left-0 right-0" @click="() => { showCoverTypeInfo = false }"
                        v-if="showCoverTypeInfo"></div>

                    <!-- cover type information card -->
                    <div class="absolute sm:w-96 w-[75vw]  top-full z-10 right-0" v-if="showCoverTypeInfo">
                        <Information linkName="Policies" linkHash="">
                            <p class="mb-2">{{ info.coverType.info }}</p>
                            <ul v-for="type in info.coverType.type" :key="type.name">
                                <li class="mb-2 ml-2"><span class="font-semibold">{{ type.name }}</span>: {{ type.info }}
                                </li>
                            </ul>
                        </Information>
                    </div>
                </div>
            </div>

            <div class="">
                <template v-for="covertype in coverDetails.coverType" :key="covertype.id">
                    <p class="mb-2">
                        <input required type="radio" name="covertype" :id="covertype.name" class="mr-2 cursor-pointer"
                            :value="covertype.name" v-model="coverData.data.coverType">
                        <label class="cursor-pointer" :for="covertype.name">{{ covertype.name }}</label>
                    </p>
                </template>
            </div>

            <hr class="my-6">

            <!-- Duration -->
            <div class="flex justify-between items-start">
                <h4 class="text-lg text-primary font-semibold mb-3">Duration</h4>

                <!-- Information on Duration -->
                <div class=" relative">
                    <QuestionMarkCircleIcon class="w-6 h-6 text-primary cursor-pointer"
                        @click="() => { showDurationInfo = !showDurationInfo }" />

                    <!-- overlay for hiding duration info card -->
                    <div class="overlay fixed top-0 bottom-0 left-0 right-0" @click="() => { showDurationInfo = false }"
                        v-if="showDurationInfo"></div>

                    <!-- duration informationm card... -->
                    <div class="absolute sm:w-96 w-[75vw] top-full right-0 z-10" v-if="showDurationInfo">
                        <Information linkName="Policies" linkHash="">
                            <p>{{ info.duration }}</p>
                        </Information>
                    </div>
                </div>
            </div>

            <div class="">
                <template v-for="duration in coverDetails.duration" :key="duration.id">
                    <p class="mb-2">
                        <input type="radio" required name="duration" :id="duration.name" class="mr-2 cursor-pointer"
                            :value="duration.name" v-model="coverData.data.duration">
                        <label class="cursor-pointer" :for="duration.name"> {{ duration.name }}</label>
                    </p>
                </template>
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