<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <header class="">
        <div class="max-width py-20 flex gap-10 items-center flex-col md:flex-row">
            <div class="md:w-1/2">
                <h2
                    class="font-bold mlg:text-6xl md:text-4xl text-5xl mlg:leading-[65px] md:leading-[40px] leading-[53px]">
                    <span class="text-primary">Compare </span><br> Insurance Policies
                </h2>

                <p class="mlg:text-2xl md:text-lg text-xl my-5">Not all insurance companies are born equal, we have a
                    wide variety to pick from in just a few clicks, compare, select and insure with confidence.
                </p>

                <p class="font-medium text-primary my-5 mlg:text-2xl md:text-lg text-xl">Insurance gives you peace of
                    mind. What are you waiting for? Compare, Insure and Relax! </p>

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