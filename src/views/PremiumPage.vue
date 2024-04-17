<script setup>
// @ts-check

import Partners from '../components/Partners.vue';
import FormSummary from '../components/motorinsurance/FormSummary.vue';
import PremiumCard from '../components/PremiumCard.vue';
import PaymentModal from '../components/underwriting/PaymentModal.vue';
import { useFormDataStore } from '../store/formData';
import { ref } from 'vue';

const store = useFormDataStore() //initialize store
const paymentLink = ref('')

/**
 *  Motor Insurance Form data from store...
 *  @type {Object}
 */
const formData = store.motorInsuranceData
</script>

<template>
    <PaymentModal :paymentLink="paymentLink" v-if="paymentLink" @close-modal="() => { paymentLink = '' }" />
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

            </div>
        </section>

        <section class="pt-28">
            <div class="mb-8">
                <h2 class="text-4xl font-bold  text-gray-600">Compare Premiums</h2>
                <p class="text-lg">Maximize value, minimize hassle – discover the best premium for you!</p>
            </div>
            <div class="flex gap-5 flex-wrap lg:flex-nowrap">
                <template v-for="(value, key) in store.motorInsurancePremium " :key="key">
                    <PremiumCard :premium="value" :insurance-type="$route.params.insuranceType"
                        @paymentUrl="(url) => paymentLink = url" class="fl flex-gro]w flex-shrink" />
                </template>
            </div>
            <!-- {{ store.motorInsurancePremium }} -->
        </section>

        <!-- partners section -->
        <section class="max-width pt-28">
            <Partners />
        </section>

    </main>
</template>