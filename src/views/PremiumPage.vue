<script setup>
// @ts-check

import FormSummary from '../components/motorinsurance/FormSummary.vue';
import { useFormDataStore } from '../store/formData';

const store = useFormDataStore() //initialize store

/**
 *  Motor Insurance Form data from store...
 *  @type {Object}
 */
const formData = store.motorInsuranceData
</script>

<template>
    <main class="max-width py-20">
        <!-- heading and some description -->
        <section>
            <h2 class="text-5xl font-bold text-center text-primary">Motor Insurance</h2>
            <p class="m max-w-4xl capitalize mx-auto text-center mt-4 text-xl text-gray-600">You are viewing premium for
                Motor Insurance.
            </p>
        </section>

        <!-- Details section -->
        <section class="pt-20">
            <div class="flex gap-10 items-center ">

                <!-- Form summary -->
                <div class="w-1/2">
                    <FormSummary :form-data="formData" />
                </div>

                <!-- Display premium -->
                <div class="w-1/2">
                    <p class="text-center font-semibold text-2xl mb-3">
                        Total Premium Payable
                    </p>
                    <p class="text-center text-primary text-5xl font-bold">Gh&#8373;200</p>

                    <!-- button to compare offers -->
                    <div class="flex mt-10 justify-center">
                        <button class="group button-primary w-1/2">Compare Offers
                        </button>
                    </div>

                </div>
            </div>
        </section>

        <!-- partners section -->
        <section class="max-width pt-28">
            <h2 class="text-4xl font-semibold mx-auto text-center max-w-4xl leading-[50px]">Partners
            </h2>

            <!-- logos of partners -->
            <div class="mt-5">
                <div class="flex justify-center gap-8">
                    <div class="w w-64">
                        <img src="../assets/partners/imperial.png" alt="" class="w-full">
                    </div>
                    <div class="w w-64">
                        <img src="../assets/partners/phoenix.png" alt="" class="w-full">
                    </div>
                    <div class="w w-64">
                        <img src="../assets/partners/star_assurancee.png" alt="" class="w-full">
                    </div>
                </div>
                <div class="flex justify-center gap-8">
                    <div class="w w-64">
                        <img src="../assets/partners/coronation.png" alt="" class="w-full">
                    </div>
                    <div class="w w-64">
                        <img src="../assets/partners/enterprise.png" alt="" class="w-full">
                    </div>
                    <div class="w w-64">
                        <img src="../assets/partners/hollard.png" alt="" class="w-full">
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>