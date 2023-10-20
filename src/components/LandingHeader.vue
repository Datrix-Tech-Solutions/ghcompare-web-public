<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <header class="">
        <div class="max-width py-20 flex gap-10 items-center">
            <div class="w-1/2">
                <h2 class="font-bold text-6xl leading-[65px]">
                    <span class="text-primary">Compare </span><br> Insurance Policies
                </h2>

                <p class="text-2xl my-5">From the <span class="font-medium text-primary">Top Insurance Companies.</span>
                    Save
                    yourself the hassle, with few clicks...</p>

                <router-link :to="{ hash: '#start-comparing' }" class="group button-primary py-4 px-8 text-xl">Start Comparing
                    <ArrowRightIcon class="inline w-5 h-5 group-hover:translate-x-2 transition" />
                </router-link>
            </div>

            <div class="w-1/2">
                <div class="image max-w-lg mx-auto">
                    <img src="../assets/insurance.png" alt="insurance" class="w-full">
                </div>
            </div>
        </div>
    </header>
</template>