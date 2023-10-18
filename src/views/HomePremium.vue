<script setup>
import PremiumCard from '../components/homeinsurance/PremiumCard.vue';
</script>

<template>
    <main class="max-width py-20">
        <!-- heading and some description -->
        <section>
            <h2 class="text-5xl font-bold text-center text-primary">Home Insurance</h2>
            <p class="m max-w-4xl capitalize mx-auto text-center mt-4 text-xl text-gray-600">You are viewing premium for
                Home Insurance.
            </p>
        </section>

        <section class="py-20">
            <PremiumCard></PremiumCard>
        </section>
    </main>
</template>