<template>
    <div class="h-screen max-width py-20">
        <div class="flex gap-20 items-start">
            <div class="w-[350px] shrink-0">
                <SidebarComponent />
            </div>

            <div class="w-full">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
import { watch } from 'vue';
import { useAuthStore } from '../../store/auth';
import { useRouter } from 'vue-router';
import SidebarComponent from '../../components/user-account/SidebarComponent.vue';

const authStore = useAuthStore()
const router = useRouter()

watch(() => authStore.user, (value) => {
    if (!value) {
        router.push("/")
    }
})
</script>

<style scoped></style>