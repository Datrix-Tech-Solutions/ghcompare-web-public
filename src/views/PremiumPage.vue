<script setup>

import Partners from '../components/Partners.vue';
import FormSummary from '../components/motorinsurance/FormSummary.vue';
import PremiumCard from '../components/PremiumCard.vue';
import PaymentModal from '../components/underwriting/PaymentModal.vue';
import { useFormDataStore } from '../store/formData';
import { ref } from 'vue';

const formDataStore = useFormDataStore() //initialize formDataStore
const paymentLink = ref('')
// 
/**
 *  Motor Insurance Form data from formDataStore...
 *  @type {Object}
 */
const formData = formDataStore.motorInsuranceDataSaved

// console.log(formDataStore.motorInsurancePremium)
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
                    <FormSummary :form-data="formData" :edit="false" />
                </div>

            </div>
        </section>

        <section class="pt-28">
            <div class="mb-8">
                <h2 class="text-4xl font-bold  text-gray-600">Compare Premiums</h2>
                <p class="text-lg">Maximize value, minimize hassle – discover the best premium for you!</p>
            </div>
            <div class="grid gap-5 sm:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4">
                <template v-for="(value, key) in formDataStore.motorInsurancePremium" :key="key">
                    <PremiumCard v-if="key !== 'premiumId'" :premium="value"
                        :insurance-type="$route.params.insuranceType" @paymentUrl="(url) => paymentLink = url"
                        class="fl flex-gro]w flex-shrink" />
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