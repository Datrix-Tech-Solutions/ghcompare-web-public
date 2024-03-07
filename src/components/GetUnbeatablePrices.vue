<template>
    <div class="max-w-[1200px] mx-auto">
        <p class="max-w-[600px] mx-auto text-center">
            Shop around our website to find what is suitable for you. We work with various insurance companies in order
            to make this process easy and hassle free.
        </p>

        <div class="flex gap-10 my-10 items-center md:flex-row flex-col">
            <div class="md:w-1/2">
                <img src="../assets/unbeatable-prices.png" alt="">
            </div>
            <div class="md:w-1/2 text-center">
                <p class="text-4xl font-bold text-primary">Get Unbeatable Prices on GhCompare... </p>
                <router-link :to="{ name: link }" v-if="link">
                    <button class="button-primary mt-5">Shop Now</button>
                </router-link>
                <button v-else class="button-primary bg-neutral-400 border-neutral-400 mt-5">Soon</button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['link'])
</script>

<style scoped></style>