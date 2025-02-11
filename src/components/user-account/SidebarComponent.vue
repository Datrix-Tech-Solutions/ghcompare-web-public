<template>
    <div class="w-full grid gap-2  p-4 py-6 rounded bg-white shadow">
        <div class="" v-for="link in links" :key="link.icon">
            <!-- <a href="" class="">hello</a> -->
            <router-link :to="{ name: link.link }"
                class="p-2 px-4 border border-gray-300 block rounded hover:translate-x-1.5 transition">
                {{ link.name }}
            </router-link>
        </div>
    </div>
    <div class="p-4 flex items-center justify-center cursor-pointer font-bold text-primary">
        <ArrowLeftOnRectangleIcon class="w-5" /> <span>Logout</span>
    </div>
</template>

<script setup>
import { ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/outline';
const links = [
    {
        name: "Pending Processes",
        link: "PendingProcesses",
        icon: "hourglass", // Example icon name
    },
    {
        name: "Completed Processes",
        link: "CompletedProcesses",
        icon: "check-circle", // Example icon name
    },
    {
        name: "Claims",
        link: "Claims",
        icon: "file-text", // Example icon name
    },
];
</script>

<style scoped>
.router-link-exact-active {
    @apply bg-primary text-white border-primary font-bold hover:translate-x-0
}
</style>