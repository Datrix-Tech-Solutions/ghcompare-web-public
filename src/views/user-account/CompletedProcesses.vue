<template>
    <div class="w-full">
        <h2 class="text-4xl font-semibold text-primary">Completed Processes</h2>

        <div class="mt-20 flex items-center justify-center flex-col space-y-4">
            <p class="text-gray-500">You don't have any completed processes...</p>

            <router-link :to="{ name: 'LandingPage', hash: '#start-comparing' }">
                <Button>Get Quotes</Button>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import Button from '../../components/ui/Button.vue';
</script>

<style scoped></style>