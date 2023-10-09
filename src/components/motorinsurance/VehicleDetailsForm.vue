<script setup>
import { ArrowLeftIcon, ArrowRightIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router'

const router = useRouter()

const emit = defineEmits(['updateForm'])

async function goToPrev() {
    await router.push({ name: 'MotorInsurance', query: { form: 'cover_details' } })
    emit('updateForm')
}
</script>

<template>
    <div class="bg-white max-w-2xl py-10 px-14 rounded-lg mx-auto">
        <!-- Vehicle details -->
        <h3 class="text-2xl font-bold mb-5">Vehicle Details</h3>

        <!-- the form -->
        <form @submit.prevent="goToNext">
            <!-- Vehicle use -->
            <div class="flex justify-between ">
                <h4 class="text-lg text-primary font-semibold mb-3">Vehicle Use</h4>
                <QuestionMarkCircleIcon class="w-6 h-6 text-primary" />
            </div>

            <div class="flex gap-5">
                <!-- commercial -->
                <div class="border rounded-lg p-3 w-28 cursor-pointer hover:outline hover:outline-2 hover:outline-primary"
                    tabindex="0">
                    <img src="../../assets/commercial.png" alt="commercial" class="w-16 mx-auto">
                    <p class="text-sm text-gray-600 font-semibold text-center">Commercial</p>
                </div>

                <!-- personal -->
                <div class="border rounded-lg p-3 w-28 cursor-pointer hover:outline hover:outline-2 hover:outline-primary"
                    tabindex="0">
                    <img src="../../assets/personal.png" alt="personal" class="w-16 mx-auto">
                    <p class="text-sm text-gray-600 font-semibold text-center">Private</p>
                </div>
            </div>

            <hr class="my-8">

            <!-- Risk Type -->
            <div class="flex justify-between ">
                <h4 class="text-lg text-primary font-semibold mb-3">Risk Type</h4>
                <QuestionMarkCircleIcon class="w-6 h-6 text-primary" />
            </div>

            <div class="">
                <select name="risktype" id="" class="w-full">
                    <option value="risk type">jlsjsl</option>
                    <option value="risk type">jfddfflsjsl</option>
                </select>
            </div>

            <hr class="my-8">

            <!-- Number of seats -->
            <div class="flex justify-between ">
                <h4 class="text-lg text-primary font-semibold mb-3">Number of Seats</h4>
                <QuestionMarkCircleIcon class="w-6 h-6 text-primary" />
            </div>

            <div class="">
                <input type="number" name="seats" id="seats" class="max-w-[120px]">
            </div>

            <hr class="my-8">

            <!-- Amount insured -->
            <div class="flex justify-between ">
                <h4 class="text-lg text-primary font-semibold mb-3">Amount Insured</h4>
                <QuestionMarkCircleIcon class="w-6 h-6 text-primary" />
            </div>

            <div class="">
                <input type="text" inputmode="decimal" pattern="[0-9]*[.,]?[0-9]*" name="amountinsured" id="amountinsured"
                    class="max-w-[120px]">
            </div>

            <!-- next and back button -->
            <div class="flex justify-between flex-row-reverse mt-10">
                <!-- next -->
                <button class="group button-primary">Next
                    <ArrowRightIcon class="w-5 h-5 inline group-hover:translate-x-2 transition  " />
                </button>

                <!-- back -->
                <button class="group  button-transparent hover:bg-inherit hover:text-inherit" @click="goToPrev">
                    <ArrowLeftIcon class="w-5 h-5 inline  group-hover:-translate-x-2 transition" /> Back
                </button>
            </div>
        </form>
    </div>
</template>