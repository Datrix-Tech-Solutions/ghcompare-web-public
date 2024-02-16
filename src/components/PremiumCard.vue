<template>
    <div class="rounded-2xl border p-5 pb-8 w-[350px] min-h-[500px] bg-white flex flex-col justify-between">
        <div class="">
            <div class="">
                <img :src="premium?.institution[0].logo" alt="" class="w-44 h-16 object-contain">
                <h3 class="text-2xl font-semibold mt-2 text-primary">{{ premium?.institution[0].name }}</h3>
            </div>

            <hr class="my-4">

            <div class="">
                <p>
                    <CheckIcon class="inline w-5 relative bottom-0.5" /> Offer 1: Lorem ipsum dolor sit.
                </p>
                <p class="my-2">
                    <CheckIcon class="inline w-5 relative bottom-0.5" /> Offer 2: Lorem ipsum dolor sit.
                </p>
                <p>
                    <CheckIcon class="inline w-5 relative bottom-0.5" /> Offer 3: Lorem ipsum dolor sit.
                </p>
                <!-- <a href="" class="mt-2 inline-block hover:underline text-primary">View Offers</a> -->
            </div>

            <hr class="my-4">

            <p class="font-bold text-4xl text-center my-8">&#8373;{{ premium?.Premium }}</p>
        </div>

        <div class="">
            <button class="button-primary w-full">Buy</button>
        </div>

    </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/outline';

defineProps(['premium'])
</script>

<style scoped></style>