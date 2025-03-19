<template>
    <div class="w-full flex mlg:grid gap-2  p-4 py-6 rounded bg-white shadow overflow-auto">
        <div class="shrink-0" v-for="link in links" :key="link.icon">
            <!-- <a href="" class="">hello</a> -->
            <router-link :to="{ name: link.link }"
                class="p-2 px-4 border border-gray-300 block rounded mlg:hover:translate-x-1.5 transition shrink-0">
                <span class="pr-4">{{ link.name }}</span>
                <span class="float-right mt-2" v-if="transactionStore.loading">
                    <Loader />
                </span>
                <span v-else class="float-right">{{ getCount(link.status) }}</span>
            </router-link>
        </div>
    </div>
    <div class="p-4 items-center justify-center cursor-pointer font-bold text-primary hidden mlg:flex">
        <ArrowLeftOnRectangleIcon class="w-5" /> <span>Logout</span>
    </div>
</template>

<script setup>
import { ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/outline';
import { onMounted } from 'vue';
import { useTransactionStore } from '../../store/transaction';
import Loader from '../ui/Loader.vue'

const transactionStore = useTransactionStore()

const getCount = (status) => {
    switch (status) {
        case 'completed':
            return transactionStore.completedTransactions.length
        case 'pending':
            return transactionStore.pendingTransactions.length
        case 'claims':
            return transactionStore.claims.length
        default:
            return;
    }
}

const links = [
    {
        name: "Pending Processes",
        link: "PendingProcesses",
        icon: "hourglass", // Example icon name
        status: 'pending'
    },
    {
        name: "Completed Processes",
        link: "CompletedProcesses",
        icon: "check-circle", // Example icon name
        status: 'completed'
    },
    {
        name: "Claims",
        link: "Claims",
        icon: "file-text", // Example icon name
        status: 'claims'
    },
];

onMounted(() => {
    transactionStore.getTransactions()
})
</script>

<style scoped>
.router-link-exact-active {
    @apply bg-primary text-white border-primary font-bold hover:translate-x-0
}
</style>