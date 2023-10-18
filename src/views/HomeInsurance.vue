<script setup>
import HomeInsuranceForm from '../components/homeinsurance/HomeInsuranceForm.vue';
</script>

<template>
    <main class="max-width py-20">
        <!-- heading and some description -->
        <section>
            <h2 class="text-5xl font-bold text-center text-primary">Home Insurance Cover</h2>
            <p class="m max-w-4xl capitalize mx-auto text-center mt-4 text-xl text-gray-600">Compare home insurance quotes
                and get the
                best rates
            </p>
        </section>

        <!-- Form that captures details -->
        <section class="py-20">
            <HomeInsuranceForm />
        </section>
    </main>
</template>
