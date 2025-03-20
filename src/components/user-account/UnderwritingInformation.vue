<template>
    <div class="max  mx-auto bg-white p-5 py-8   rounded-lg">
        <h2 class="text-2xl font-bold mb-4 text-gray-600">Underwriting Information</h2>

        <!-- status and institution -->
        <div class="">
            <h2 class="text-xl font-semibold  ">Institution: {{ underwriting?.institution?.name }}</h2>
            <p class="">Status: {{ underwriting?.status }}</p>
        </div>

        <hr class="my-5">

        <!-- buyer information -->
        <div class="">
            <h3 class="text-xl font-semibold text-primary mb-3">Buyer information</h3>

            <div class="flex items-center gap-10 flex-wrap">

                <div class="" v-for="(value, key) in underwriting?.request?.buyerData" :key="key">
                    <p class="font-semibold text-lg capitalize">{{ formatKey(key) }}</p>
                    <p>{{ value }}</p>
                </div>
            </div>
        </div>

        <hr class="my-5">

        <div class="flex flex-end">
            <Button v-if="underwriting?.status === 'failed'">
                <span>Retry</span>
            </Button>
        </div>
    </div>
</template>

<script setup>
import Button from '../ui/Button.vue';

const { underwriting } = defineProps({
    underwriting: {
        type: Object,
        required: true,
    }
})

function formatKey(key) {
    return key
        .replace(/_/g, " ") // Replace underscores with spaces
    // .replace(/\b\w/g, (char) => char.toUpperCase())
}
</script>

<style scoped></style>