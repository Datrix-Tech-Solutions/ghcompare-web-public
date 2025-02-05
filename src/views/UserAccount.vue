<template>
    <div class="h-screen">
        user profile
    </div>
</template>

<script setup>
import { watch } from 'vue';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()

watch(() => authStore.user, (value) => {
    if (!value) {
        router.push("/")
    }
})
</script>

<style scoped></style>