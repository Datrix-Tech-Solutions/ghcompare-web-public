<template>
    <div class="rounded-2xl border py-10 p-5 pb-8  min-h-[450px] bg-white flex flex-col justify-between">
        <div class="">
            <div class="">
                <img :src="premium?.institution[0]?.logo" alt="" class="w-44 h-16 object-contain">
                <h3 class="text-2xl font-semibold mt-2 text-primary">{{ premium?.institution[0]?.name }}</h3>
            </div>

            <hr class="my-4" v-if="premium?.offers">

            <div class="" v-if="premium?.offers">
                <template v-for="(offer, index) in premium?.offers">
                    <p>
                        <CheckBadgeIcon class="inline w-5 relative bottom-0.5 text-primary" /> {{ offer.offer }}.
                    </p>
                </template>

                <!-- <a href="" class="mt-2 inline-block hover:underline text-primary">View Offers</a> -->
            </div>

            <hr class="my-4">

            <p class="font-bold text-4xl text-center my-8">&#8373;{{ premium?.premium }}</p>
        </div>

        <div class="">
            <div v-if="premium?.institution[0]?.slug === 'enterprise'"
                @click="$emit('paymentUrl', premium?.paymentData?.url)">
                <button class="button-primary w-full">Buy</button>
            </div>
            <router-link v-else
                :to="{ name: 'Underwriting', params: { insuranceType: insuranceType, institutionSlug: premium?.institution[0]?.slug, institutionId: premium?.institution[0]?.id } }">
                <button class="button-primary w-full">Buy</button>
            </router-link>
        </div>

    </div>
</template>

<script setup>
import { CheckBadgeIcon } from '@heroicons/vue/24/outline';

defineProps(['premium', 'insuranceType'])
</script>

<style scoped></style>