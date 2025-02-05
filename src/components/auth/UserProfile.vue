<template>
    <!-- Login and sign up -->
    <div class="flex gap-1">

        <div class="flex items-center gap-1 group  relative" v-if="authStore.user">
            <div class="rounded-full w-10 h-10 overflow-hidden">
                <img src="/images/default-avatar.png" class="w-full h-full" />
            </div>

            <div class="space-y- ">
                <p class="font-semibold max-w-[120px] line-clamp-1 text-sm" :title="authStore.user.phoneNumber">{{
                    authStore.user.phoneNumber }}</p>
                <p class="gray-text text-xs">User logged in</p>
            </div>

            <!-- Dropdown profile and logout -->
            <div class="absolute right-0 top-[100%] group-hover:block hidden hover:block w-[200px]">
                <div class="w-full h-3"></div>
                <div class="w-full px-4 pr-8 glass">
                    <router-link :to="{ name: 'UserAccount' }">
                        <p
                            class="hover:cursor-pointer my-4 font-semibold text-gray-600 flex items-center gap-1 hover:text-primary transition relative">
                            <UserIcon class="w-5" /> <span>My
                                Account</span>
                        </p>
                    </router-link>
                    <p @click="authStore.logout()"
                        class="hover:cursor-pointer my-4 font-semibold text-gray-600 flex items-center gap-1 hover:text-primary transition relative">
                        <ArrowLeftOnRectangleIcon class="w-5" /> <span>Logout</span>
                    </p>
                </div>
            </div>


        </div>
        <div class="" v-else>
            <router-link :to="{ name: 'Login' }">
                <Button>Login</Button>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import Button from '../ui/Button.vue'
import { UserIcon } from '@heroicons/vue/24/outline';
import { ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/outline';
import { useAuthStore } from '../../store/auth';

const authStore = useAuthStore()
</script>

<style lang="scss" scoped></style>