<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <header class="">
        <div class="max-width py-20 flex gap-10 items-center flex-col md:flex-row">
            <div class="md:w-1/2">
                <h2 class="font-bold mlg:text-6xl md:text-4xl text-5xl mlg:leading-[65px] md:leading-[40px] leading-[53px]">
                    <span class="text-primary">Compare </span><br> Insurance Policies
                </h2>

                <p class="mlg:text-2xl md:text-lg text-xl my-5">From the <span class="font-medium text-primary">Top
                        Insurance
                        Companies.</span>
                    Save
                    yourself the hassle, with few clicks...</p>

                <router-link :to="{ hash: '#start-comparing' }" class="group button-primary py-4 px-8 text-xl">Start
                    Comparing
                    <ArrowRightIcon class="inline w-5 h-5 group-hover:translate-x-2 transition" />
                </router-link>
            </div>

            <div class="md:w-1/2">
                <div class="image max-w-lg mx-auto">
                    <img src="../assets/insurance.png" alt="insurance" class="w-full">
                </div>
            </div>
        </div>
    </header>
</template>