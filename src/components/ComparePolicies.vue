<script setup>
import InsuranceCard from '../components/InsuranceCard.vue';
</script>
<template>
    <!-- compare policies -->
    <section class="my-28 max-width" id="start-comparing">
        <div class="text-center">
            <h2 class="text-4xl font-semibold">Compare and Get the best deals.</h2>
            <p class="text-lg mt-3 text-gray-600">Save money by choosing the best deals for the service you need.</p>

            <!-- Insurance Cards -->
            <div class="flex justify-center gap-5 mt-10 flex-col sm:flex-row">
                <InsuranceCard image="./src/assets/vehicle3.png" text="Motor Insurance" link="MotorInsurance" class="" />
                <InsuranceCard image="./src/assets/house2.png" text="Home Insurance" link="HomeInsurance" />
                <InsuranceCard image="./src/assets/travel-luggage2.png" text="Travel Insurance" />
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped></style>