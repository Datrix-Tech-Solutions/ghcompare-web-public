<script setup>
import MotorInsuranceForm from '../components/motorinsurance/MotorInsuranceForm.vue';
</script>

<template>
    <main class="max-width py-20">
        <!-- heading and some description -->
        <section>
            <h2 class="md:text-5xl text-4xl font-bold text-center text-primary">Motor Insurance Cover</h2>
            <p class="m max-w-4xl capitalize mx-auto text-center mt-4 md:text-xl text-lg text-gray-600">Compare motor
                insurance quotes
                and get the
                best rates
            </p>
        </section>

        <!-- Form that captures details -->
        <section class="py-20">
            <MotorInsuranceForm />
        </section>


    </main>
</template>