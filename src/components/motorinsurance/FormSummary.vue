<script setup>
import { PencilSquareIcon } from '@heroicons/vue/24/outline';

//props
defineProps({
    formData: {
        type: Object
    }
})
</script>

<template>
    <div class="max max-w-lg mx-auto bg-white p-10 rounded-lg">
        <!-- summary -->
        <h3 class="text-2xl font-bold text-center mb-8 text-gray-600">Summary</h3>

        <!-- Cover details -->
        <div class="flex justify-between">
            <h3 class="text-xl font-semibold text-primary mb-3">Cover Details</h3>

            <!-- edit cover details -->
            <router-link :to="{ name: 'MotorInsurance', query: { form: 'cover_details', edit: true } }"
                title="Edit details">
                <PencilSquareIcon class="w-5 h-5 inline text-primary cursor-pointer" />
            </router-link>
        </div>

        <!-- cover type -->
        <p class="flex justify-between">
            <span>Cover type:</span>
            <span>{{ formData.coverDetails?.coverType }}</span>
        </p>

        <!-- duration -->
        <p class="flex justify-between my-1">
            <span>Duration:</span>
            <span>{{ formData.coverDetails?.duration }}</span>
        </p>

        <hr class="my-5">

        <!-- Vehicle Details -->
        <div class="flex justify-between">
            <h3 class="text-xl font-semibold text-primary mb-3">Vehicle Details</h3>

            <!-- edit vehicle details -->
            <router-link :to="{ name: 'MotorInsurance', query: { form: 'vehicle_details', edit: true, } }"
                title="Edit details">
                <PencilSquareIcon class="w-5 h-5 inline text-primary cursor-pointer" />
            </router-link>
        </div>

        <!-- vehicle use -->
        <p class="flex justify-between">
            <span>Vehicle use:</span>
            <span>{{ formData.vehicleDetails?.vehicleUse }}</span>
        </p>

        <!-- risk type -->
        <p class="flex justify-between my-1">
            <span> Risk type:</span>
            <span class="!capitalize">{{ formData.vehicleDetails?.riskType.toLowerCase() }}</span>
        </p>

        <!-- number of seats -->
        <p class="flex justify-between my-1">
            <span> Number of seats:</span>
            <span>{{ formData.vehicleDetails?.numberOfSeats }}</span>
        </p>

        <!-- Amount insured -->
        <p class="flex justify-between my-1" v-if="formData?.coverDetails?.coverType !== 'Third Party'">
            <span> Amount Insured:</span>
            <span>{{ formData.vehicleDetails?.amountInsured
            }}</span>
        </p>
    </div>
</template>