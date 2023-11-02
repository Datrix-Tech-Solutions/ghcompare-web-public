<script setup>
import LandingHeader from '../components/LandingHeader.vue';
import InsuranceCard from '../components/InsuranceCard.vue';
import HowToBuy from '../components/HowToBuy.vue';
</script>

<template>
    <!-- Header -->
    <LandingHeader />

    <!-- Main content -->
    <main class="">

        <!-- compare products -->
        <section class="py-28 max-width" id="start-comparing">
            <div class="text-center">
                <h2 class="text-4xl font-semibold">Compare and Get the best deals.</h2>
                <p class="text-lg mt-3 text-gray-600">Save money by choosing the best deals for the service you need.</p>

                <!-- Insurance Cards -->
                <div class="flex justify-center gap-5 mt-10 flex-col sm:flex-row">
                    <InsuranceCard image="./src/assets/vehicle3.png" text="Motor Insurance" link="MotorInsurance" />
                    <InsuranceCard image="./src/assets/house2.png" text="Home Insurance" link="HomeInsurance" />
                    <InsuranceCard image="./src/assets/travel-luggage2.png" text="Travel Insurance" />
                </div>
            </div>
        </section>

        <!-- How to buy -->
        <HowToBuy />

        <!-- Partners Section -->
        <section class="max-width p-28">
            <h2 class="md:text-4xl text-3xl font-semibold mx-auto text-center max-w-4xl md:leading-[50px] leading-[40px]">
                Compare genuine,
                precise Quotes
                from <span class="capitalize text-primary font-semibold">leading insurance providers</span> in the Country.
            </h2>

            <!-- logos of partners -->
            <div class="mt-14">
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