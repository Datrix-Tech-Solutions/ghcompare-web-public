<script setup>
import GetUnbeatablePrices from '../components/GetUnbeatablePrices.vue';
import Partners from '../components/Partners.vue';
import HowToBuy from '../components/HowToBuy.vue';
</script>

<template>
    <div>
        <div class="my-10">
            <div class="flex items-center gap-10 mlg:flex-row-reverse flex-col">
                <!-- Text -->
                <div class="mlg:w-1/2 mlg:mt-0 mt-10">
                    <h3 class="text-4xl text-primary font-bold mb-5">Travel Insurance</h3>

                    <p class=" max-w-[600px] text-gray-600 text-center mlg:text-left mb-5">
                        Travel insurance provides essential coverage for travelers, offering financial protection and
                        peace of mind during trips. It typically includes benefits such as trip
                        cancellation/interruption coverage, emergency medical expenses coverage, baggage loss/delay
                        coverage, and travel assistance services. Whether you're traveling domestically or
                        internationally, travel insurance safeguards your investment in your trip and helps mitigate
                        unexpected expenses or emergencies that may arise while you're away from home. It's a valuable
                        tool for ensuring a worry-free travel experience, allowing you to focus on making memories and
                        exploring new destinations with confidence.
                    </p>

                    <!-- get started button -->
                    <!-- <RouterLink :to="{ name: 'MotorInsurance' }">
                        <ButtonWithArrow text="Compare" />
                    </RouterLink> -->
                    <button class="button-primary bg-neutral-400 border-neutral-400">Soon</button>


                </div>

                <!-- Image -->
                <div class="mlg:w-1/2">
                    <img src="../assets/travel-insurance.png" alt="insurance"
                        class="mlg:w-full sm:w-2/3 w-full mx-auto">
                </div>
            </div>
        </div>

        <!-- Why is travel insurance important? -->
        <div class="my-32">
            <h3 class="text-primary text-4xl font-bold text-center">Why is travel insurance important?</h3>

            <img src="../assets/seven-reasons.png" alt="seven-reasons" class="max-w-[1000px] mx-auto mt-20">
        </div>

        <!-- Advert -->
        <div class="my-32">
            <GetUnbeatablePrices />
        </div>

        <!-- well known brands -->
        <div class="my-32">
            <HowToBuy class="rounded-3xl" />
        </div>

        <!-- well known brands -->
        <div class="my-32">
            <Partners />
        </div>
    </div>
</template>

<style scoped></style>