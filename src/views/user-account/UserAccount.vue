<template>
    <div class="min-h-screen max-width py-20">
        <div class="flex mlg:flex-row flex-col gap-10 xl:gap-14 items-start">
            <div class="mlg:w-[350px] mlg:shrink-0">
                <SidebarComponent />
            </div>

            <div class="w-full mlg:w-[calc(100%-390px)] xl:w-[calc(100%-430px)]">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
import { watch, onMounted } from 'vue';
import { useAuthStore } from '../../store/auth';
import { useRouter } from 'vue-router';
import { useTransactionStore } from '../../store/transaction'
import SidebarComponent from '../../components/user-account/SidebarComponent.vue';

const authStore = useAuthStore()
const transactionStore = useTransactionStore()
const router = useRouter()

watch(() => authStore.user, (value) => {
    if (!value) {
        router.push("/")
    }
})

onMounted(() => {
    transactionStore.getTransactions()
})
</script>

<style scoped></style>