<script setup>
import CheckMark from '../components/CheckMark.vue';
</script>

<template>
    <section class="py-20 bg-primary-dark text-white">
        <div class="max-width">
            <h2 class="text-5xl font-bold mb-10">How to buy</h2>

            <div class="flex mlg:gap-20 gap-10 justify-between items-center">

                <!-- Images overlapping -->
                <div class="w-1/2 hidden md:block">
                    <div class="relative aspect-[5/4]">
                        <img src="../assets/overlap2.jpg" class="absolute rounded-lg w-[70%]" alt="">
                        <img src="../assets/overlap.jpg" class="absolute rounded-lg bottom-0 right-0 w-[55%]" alt="">
                    </div>
                </div>

                <!-- How to buy info -->
                <div class="md:w-1/2">
                    <!-- get quotes -->
                    <div class="flex mlg:gap-5 gap-3 items-start">
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
                    <div class="flex mlg:gap-5 gap-3 items-start my-8">
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
                    <div class="flex mlg:gap-5 gap-3 items-start">
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
</template>