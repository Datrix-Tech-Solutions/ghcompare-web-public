<script setup>
import { PencilSquareIcon } from '@heroicons/vue/24/outline';
import dayjs from 'dayjs';

//props
defineProps({
    formData: {
        type: Object
    }
})
</script>

<template>
    <div class="max  mx-auto bg-white p-5 py-8   rounded-lg">
        <!-- summary -->
        <h2 class="text-2xl font-bold mb-4 text-gray-600">Vehicle Details Summary</h2>

        <!-- Cover details -->
        <div class="flex justify-start gap-5">
            <h3 class="text-xl font-semibold text-primary mb-3">Cover Details</h3>

            <!-- edit cover details -->
            <router-link :to="{ name: 'MotorInsurance', query: { form: 'cover_details', edit: true } }"
                title="Edit details">
                <PencilSquareIcon class="w-5 h-5 inline text-primary cursor-pointer" />
            </router-link>
        </div>

        <!-- cover type -->
        <div class="flex items-center gap-10 flex-wrap">
            <div class="">
                <p class="font-semibold text-lg">Cover type</p>
                <p>{{ formData.coverDetails?.prefered_cover }}</p>
            </div>

            <!-- duration -->
            <div class=" ">
                <p class="font-semibold text-lg">Duration</p>
                <p>{{ formData.coverDetails?.period_cover }} months</p>
            </div>

            <!-- startDate -->
            <div class=" ">
                <p class="font-semibold text-lg">Start Date</p>
                <p>{{ dayjs(formData.coverDetails?.start_date).format('DD, MMMM YYYY') }} </p>
            </div>
        </div>

        <hr class="my-5">

        <!-- Vehicle Details -->
        <div class="flex justify-start gap-5">
            <h3 class="text-xl font-semibold text-primary mb-3">Vehicle Details</h3>

            <!-- edit vehicle details -->
            <router-link :to="{ name: 'MotorInsurance', query: { form: 'vehicle_details', edit: true, } }"
                title="Edit details">
                <PencilSquareIcon class="w-5 h-5 inline text-primary cursor-pointer" />
            </router-link>
        </div>

        <!-- vehicle use -->
        <div class="flex items-center gap-10 flex-wrap">
            <div class="">
                <p class="font-semibold text-lg">Vehicle use:</p>
                <p>{{ formData.vehicleDetails?.vehicle_use }}</p>
            </div>

            <!-- risk type -->
            <div class="">
                <p class="font-semibold text-lg"> Vehicle Class:</p>
                <p class="!capitalize">{{ formData.vehicleDetails?.vehicle_class.toLowerCase() }}</p>
            </div>

            <!-- number of seats -->
            <div class="">
                <p class="font-semibold text-lg"> Number of seats:</p>
                <p>{{ formData.vehicleDetails?.number_of_seats }}</p>
            </div>

            <!-- Amount insured -->
            <div class="" v-if="formData?.coverDetails?.prefered_cover !== 'Third Party'">
                <p class="font-semibold text-lg"> Vehicle Value:</p>
                <p>{{ formData.vehicleDetails?.vehicle_value
                    }}</p>
            </div>

            <!-- year of manufacture -->
            <div class="">
                <p class="font-semibold text-lg"> Year of Manufacture</p>
                <p>{{ formData.vehicleDetails?.year_of_manufacture
                    }}</p>
            </div>

            <!-- year of registration -->
            <div class="">
                <p class="font-semibold text-lg"> Registration Year</p>
                <p>{{ formData.vehicleDetails?.vehicle_reg_year
                    }}</p>
            </div>
        </div>
    </div>
</template>