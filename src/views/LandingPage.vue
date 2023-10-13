<script setup>
import LandingHeader from '../components/LandingHeader.vue';
import InsuranceCard from '../components/InsuranceCard.vue';
import CheckMark from '../components/CheckMark.vue';
</script>

<template>
    <!-- Header -->
    <LandingHeader />

    <!-- Main content -->
    <main class="">

        <!-- compare products -->
        <section class="py-28 max-width">
            <div class="text-center">
                <h2 class="text-4xl font-semibold">Compare and Get the best deals.</h2>
                <p class="text-lg mt-3 text-gray-600">Save money by choosing the best deals for the service you need.</p>

                <!-- Insurance Cards -->
                <div class="flex justify-center gap-5 mt-10">
                    <InsuranceCard image="./src/assets/vehicle3.png" text="Motor Insurance" link="MotorInsurance" />
                    <InsuranceCard image="./src/assets/house2.png" text="Home Insurance" />
                    <InsuranceCard image="./src/assets/travel-luggage2.png" text="Travel Insurance" />
                </div>
            </div>
        </section>

        <!-- How to buy -->
        <section class="py-20 bg-primary-dark text-white">
            <div class="max-width">
                <h2 class="text-5xl font-bold mb-10">How to buy</h2>

                <div class="flex gap-20 justify-between items-center">

                    <!-- Images overlapping -->
                    <div class="w-1/2">
                        <div class="relative aspect-[5/4]">
                            <img src="../assets/overlap2.jpg" class="absolute rounded-lg w-[70%]" alt="">
                            <img src="../assets/overlap.jpg" class="absolute rounded-lg bottom-0 right-0 w-[55%]" alt="">
                        </div>
                    </div>

                    <!-- How to buy info -->
                    <div class="w-1/2">
                        <!-- get quotes -->
                        <div class="flex gap-5 items-start">
                            <!-- checkmark -->
                            <CheckMark />

                            <!-- Info -->
                            <div>
                                <h3 class="font-bold text-3xl mb-3">Get Quotes</h3>
                                <p class="t text-gray-300">Tell us the type for policy you want. We present you with
                                    insurance premium quotes from
                                    top insurance companies...</p>
                            </div>
                        </div>

                        <!-- Compare Quotes -->
                        <div class="flex gap-5 items-start my-8">
                            <!-- checkmark -->
                            <CheckMark />

                            <!-- Info -->
                            <div>
                                <h3 class="font-bold text-3xl mb-3">Compare Quotes</h3>
                                <p class="t text-gray-300">Compare insurance premium quotes and choose your preferred
                                    insurance company...</p>
                            </div>
                        </div>

                        <!-- Buy quotes -->
                        <div class="flex gap-5 items-start">
                            <!-- checkmark -->
                            <CheckMark />

                            <!-- Info -->
                            <div>
                                <h3 class="font-bold text-3xl mb-3">Buy Policy</h3>
                                <p class="t text-gray-300">Submit your details and make payment to complete the process. Let
                                    us know how you want to
                                    receive your policy documents.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Partners Section -->
        <section class="max-width p-28">
            <h2 class="text-4xl font-semibold mx-auto text-center max-w-4xl leading-[50px]">Compare genuine, precise Quotes
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