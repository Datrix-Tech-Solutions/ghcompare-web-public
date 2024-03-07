<script setup>
import GetUnbeatablePrices from '../components/GetUnbeatablePrices.vue';
import Partners from '../components/Partners.vue';
import HowToBuy from '../components/HowToBuy.vue';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/24/outline';


</script>

<template>
    <div>
        <div class="my-10">
            <div class="flex items-center gap-10 mlg:flex-row-reverse flex-col">
                <!-- Text -->
                <div class="mlg:w-1/2 mlg:mt-0 mt-10">
                    <h3 class="text-4xl text-primary font-bold mb-5">Home Insurance</h3>

                    <p class=" max-w-[600px] text-gray-600 text-center mlg:text-left mb-5">
                        Home insurance is a vital financial safety net for homeowners. It shields your home and personal
                        belongings from unforeseen disasters like fire, theft, or natural calamities. Beyond property
                        protection, it also extends liability coverage, addressing legal expenses if someone is injured
                        on your property. By investing in home insurance, you ensure that your most significant asset is
                        secure and that you have peace of mind in the face of life's uncertainties.
                    </p>

                    <!-- get started button -->
                    <!-- <RouterLink :to="{ name: 'MotorInsurance' }">
                        <ButtonWithArrow text="Compare" />
                    </RouterLink> -->
                    <button class="button-primary bg-neutral-400 border-neutral-400">Soon</button>

                </div>

                <!-- Image -->
                <div class="mlg:w-1/2">
                    <img src="../assets/home-insurance.png" alt="insurance" class="mlg:w-full sm:w-2/3 w-full mx-auto">
                </div>
            </div>
        </div>

        <div class="my-32">
            <p class="max-w-[1000px] mx-auto">Home Insurance is intended to financially protect your home and belongings
                against accidental damage or
                losses. For instance, if you find yourself in a situation where your home is damaged in a fire or flood
                having the right home insurance would save you a world of pain. So what are you waiting for? Insure now
                and enjoy your peace of mind</p>
        </div>

        <!-- what is covered -->
        <div class="my-32">
            <h3 class="text-primary text-4xl font-bold text-center">What is covered</h3>

            <div class="my-10 flex justify-center gap-10 md:flex-row flex-col items-center md:items-start">
                <div class="w-[300px]">
                    <img src="../assets/house-burglar.jpg" alt="house-burglar"
                        class=" aspect-[6/4] w-full object-cover">
                    <div class=" flex gap-2 my-2">
                        <div class="w-[10%]">
                            <XCircleIcon class="w-full text-red-500 inline" />
                        </div>
                        <span class="w-[90%]">A burglar enters your unlocked room
                            and
                            steals all your precious
                            jewellery! </span>
                    </div>
                    <div class="flex gap-2 my-2">
                        <div class="w-[10%]">
                            <CheckCircleIcon class="w-full text-green-500 inline" />
                        </div>
                        <span class="w-[90%]">A burglar forcibly enters your
                            home,
                            your precious jewellery, TV and
                            other valuables gone!</span>
                    </div>
                </div>
                <div class="w-[300px]">
                    <img src="../assets/house-fire.jpg" alt="house-burglar" class=" aspect-[6/4] w-full object-cover">
                    <div class=" flex gap-2 my-2">
                        <div class="w-[10%]">
                            <XCircleIcon class="w-full text-red-500 inline" />
                        </div>
                        <span class="w-[90%]">You intentionally start a fire</span>
                    </div>
                    <div class="flex gap-2 my-2">
                        <div class="w-[10%]">
                            <CheckCircleIcon class="w-full text-green-500 inline" />
                        </div>
                        <span class="w-[90%]">A fire starts in the house accidentally</span>
                    </div>
                </div>
                <div class="w-[300px]">
                    <img src="../assets/house-flood.jpg" alt="house-burglar" class=" aspect-[6/4] w-full object-cover">
                    <div class=" flex gap-2 my-2">
                        <div class="w-[10%]">
                            <XCircleIcon class="w-full text-red-500 inline" />
                        </div>
                        <span class="w-[90%]">Poorly built house collapses </span>
                    </div>
                    <div class="flex gap-2 my-2">
                        <div class="w-[10%]">
                            <CheckCircleIcon class="w-full text-green-500 inline" />
                        </div>
                        <span class="w-[90%]">Gradual assimilation of water causing your house to flood</span>
                    </div>
                </div>
            </div>
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

<style scoped></style>../components/GetUnbeatablePrices.vue