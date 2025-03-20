<template>
    <div class="w-full">
        <h2 class="text-4xl font-semibold text-primary">Pending Processes</h2>

        <div class="mt-10" v-if="transactionStore.pendingTransactions.length">
            <TransactionTable transaction-status="pending" :transactions="transactionStore.pendingTransactions" />
        </div>
        <div class="my-20 flex items-center justify-center"
            v-if="transactionStore.loading && transactionStore.pendingTransactions.length === 0">
            <p class="">Loading...</p>
        </div>
        <div class="mt-20 flex items-center justify-center flex-col space-y-4"
            v-if="!transactionStore.loading && transactionStore.pendingTransactions.length === 0">
            <p class="text-gray-500">You don't have any pending processes...</p>

            <router-link :to="{ name: 'LandingPage', hash: '#start-comparing' }">
                <Button>Get Quotes</Button>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import Button from '../../components/ui/Button.vue';
import TransactionTable from '../../components/user-account/TransactionTable.vue';
import { useTransactionStore } from '../../store/transaction';

const transactionStore = useTransactionStore()
</script>

<style scoped></style>