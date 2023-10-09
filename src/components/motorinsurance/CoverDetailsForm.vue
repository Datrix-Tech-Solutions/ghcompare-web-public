<script setup>
import { ArrowRightIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router'

const router = useRouter()

const coverDetails = {
    coverType: [
        {
            name: "Comprehensive",
            id: 1,
        },
        {
            name: "Third Party",
            id: 2,
        },
        {
            name: "Third Party, Fire and Theft",
            id: 3,
        },
    ],
    duration: [
        {
            name: "1 Month",
            id: 1
        },
        {
            name: "3 Month",
            id: 2
        },
        {
            name: "6 Month",
            id: 3
        },
        {
            name: "Full Year",
            id: 4
        },
    ]
}

const emit = defineEmits(['updateForm'])

async function goToNext() {
    await router.push({ name: 'MotorInsurance', query: { form: 'vehicle_details' } })
    emit('updateForm')
}
</script>

<template>
    <div class="bg-white max-w-2xl py-10 px-14 rounded-lg mx-auto">
        <!-- Cover details -->
        <h3 class="text-2xl font-bold mb-5">Cover Details</h3>

        <!-- the form -->
        <form @submit.prevent="goToNext">
            <!-- cover type -->
            <div class="flex justify-between ">
                <h4 class="text-lg text-primary font-semibold mb-3">Cover Type</h4>
                <QuestionMarkCircleIcon class="w-6 h-6 text-primary" />
            </div>

            <div class="">
                <template v-for="covertype in coverDetails.coverType" :key="covertype.id">
                    <p class="mb-2">
                        <input type="radio" name="covertype" :id="covertype.name" class="mr-2 cursor-pointer">
                        <label class="cursor-pointer" :for="covertype.name">{{ covertype.name }}</label>
                    </p>
                </template>
            </div>

            <hr class="my-6">

            <!-- Duration -->
            <div class="flex justify-between ">
                <h4 class="text-lg text-primary font-semibold mb-3">Duration</h4>
                <QuestionMarkCircleIcon class="w-6 h-6 text-primary" />
            </div>

            <div class="">
                <template v-for="duration in coverDetails.duration" :key="duration.id">
                    <p class="mb-2 cursor-pointer">
                        <input type="radio" name="duration" :id="duration.name" class="mr-2 cursor-pointer">
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