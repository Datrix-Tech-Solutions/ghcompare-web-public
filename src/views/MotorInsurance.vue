<script setup>
import MotorInsuranceForm from '../components/motorinsurance/MotorInsuranceForm.vue';
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

onBeforeRouteUpdate((to, from) => {
    if (to.path === from.path) {
        const answer = window.confirm(
            'Do you really want to leave? you have unsaved changes!'
        )
        alert('this one')
        // cancel the navigation and stay on the same page
        if (!answer) return false
    }
    alert('that that that')
})
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