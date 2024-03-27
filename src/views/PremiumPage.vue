<script setup>
// @ts-check

import Partners from '../components/Partners.vue';
import FormSummary from '../components/motorinsurance/FormSummary.vue';
import PremiumCard from '../components/PremiumCard.vue';
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
            <div class=" gap-10 items-center mlg:flex-row flex-col-reverse">

                <!-- Form summary -->

                <div class=" w-full">
                    <FormSummary :form-data="formData" />
                </div>

                <!-- Display premium -->
                <!-- <div class="mlg:w-1/2 w-full">
                    <p class="text-center font-semibold text-2xl mb-3">
                        Total Premium Payable
                    </p>
                    <p class="text-center text-primary text-5xl font-bold">Gh&#8373;200</p> -->

                <!-- button to compare offers -->
                <!-- <div class="flex mt-10 justify-center">
                        <button class="group button-primary w-1/2">Compare Offers
                        </button>
                    </div>

                </div> -->
            </div>
        </section>

        <section class="pt-28">
            <div class="mb-8">
                <h2 class="text-4xl font-bold  text-gray-600">Compare Premiums</h2>
                <p class="text-lg">Maximize value, minimize hassle – discover the best premium for you!</p>
            </div>
            <div class="flex gap-5">
                <div v-for="(value, key) in store.motorInsurancePremium " :key="key">
                    <PremiumCard :premium="value" :insurance-type="$route.params.insuranceType" />
                </div>
            </div>
            <!-- {{ store.motorInsurancePremium }} -->
        </section>

        <!-- partners section -->
        <section class="max-width pt-28">
            <Partners />
        </section>

    </main>
</template>