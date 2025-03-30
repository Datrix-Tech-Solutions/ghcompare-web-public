<template>
    <div class="">
        <div class="mb-8">
            <!-- <h2 class="text-4xl font-bold  text-gray-600">More Institutions</h2> -->
            <p class="text-xl max-w-2xl text-center mx-auto">Didn't find the perfect match? Explore other
                top
                insurers - your
                ideal
                coverage might be just a click away!</p>
        </div>
        <div class="grid gap-5 sm:grid-cols-2 min-[900px]:grid-cols-3 max-w-6xl mx-auto justify-cnter">
            <template v-for="(value, key) in formDataStore.motorInsurancePremium" :key="key">
                <template v-if="key !== 'premiumId'">
                    <PremiumCard :premium="value" :insurance-type="$route.params.insuranceType"
                        v-if="value?.institution[0]?.slug !== currentInstitutionSlug"
                        @paymentUrl="(url) => paymentLink = url" class="fl flex-gro]w flex-shrink" />
                </template>

            </template>
        </div>
    </div>
</template>

<script setup>
import PremiumCard from '../components/PremiumCard.vue';
import { useFormDataStore } from '../store/formData';
const formDataStore = useFormDataStore()

const { currentInstitutionSlug } = defineProps({
    currentInstitutionSlug: {
        type: String,
        required: true,
    },
})
</script>

<style scoped></style>