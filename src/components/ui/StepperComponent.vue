<template>
    <div>
        <ol
            class="flex justify-center items-center w-fit mx-auto p-3 space-x-2 text-sm font-medium text-center text-gray-500  sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">
            <template v-for="(step, index) in steps" :key="step">
                <li class="flex items-center " :class="{ 'text-primary': index === selectedForm }">
                    <div class="flex items-center">
                        <span
                            class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500  rounded-full shrink-0"
                            :class="{ 'border-primary': index === selectedForm }">
                            {{ index + 1 }}
                        </span>
                        {{ step.split(" ")[0] }} <span class="hidden sm:inline-flex sm:ms-2"
                            v-if="step.split(' ')[1]">{{
                step.split(" ")[1] }}</span>
                    </div>
                    <ChevronDoubleRightIcon class="w-4 h-4 font-bold ms-2 sm:ms-4 rtl:rotate-180"
                        v-if="steps.length !== index + 1">
                    </ChevronDoubleRightIcon>
                </li>
            </template>
        </ol>
    </div>
</template>

<script setup>
import { ChevronDoubleRightIcon } from '@heroicons/vue/24/outline';

// String Items in steps should be a maximum of two words.
defineProps({
    steps: {
        type: Array,
        required: true,
    },
    selectedForm: {
        type: Number,
        required: true,
    }
})
</script>

<style scoped></style>