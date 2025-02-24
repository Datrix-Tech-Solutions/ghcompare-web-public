<script setup>
import { PaperClipIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';
import { links } from '../data/links';
import Button from './ui/Button.vue';
import { useAuthStore } from '../store/auth';
import { UserIcon } from '@heroicons/vue/24/outline';
import { ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/outline';

const router = useRouter()

const authStore = useAuthStore()

</script>

<template>
    <nav class="m v-width top-0 bottom-0 right-0 fixed bg-white z-20 py-4 px-6">
        <div class="flex flex-col justify-between h-full">
            <div class="overflow-y-auto scrollbar">
                <div class="image pb-4">
                    <img src="../assets/logo.png" alt="ghcompare" class="w w-40 mx-auto">
                </div>

                <hr class="mx-auto">

                <!-- Links -->
                <div class="">
                    <div class="my-3" v-for="(link, index) in links" :key="index">

                        <!-- Home or category -->
                        <router-link :to="{ name: link.to }" :class="{ 'cursor-default': link.dropdown, }">
                            <p class="font-semibold" :class="{ 'hover:text-primary': !link.dropdown }">{{ link.text
                                }}
                                <PaperClipIcon v-if="!link.dropdown" class="inline w-3 h-3" />
                            </p>
                        </router-link>

                        <!-- sublinks -->
                        <div class="ml-2">
                            <ul v-for="(item, ind) in link?.dropdown" :key="ind">
                                <router-link :to="{ name: item.to }">
                                    <li class="text-sm my-1 text-gray-500 hover:text-primary">{{ item.text }}
                                    </li>
                                </router-link>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <!-- buttons -->
            <div class=" items-center gap-1 group  relative" v-if="authStore.user">
                <router-link :to="{ name: 'UserAccount' }">
                    <div class="flex items-center gap-1 mb-5 group  relative">
                        <div class="rounded-full w-14 h-14 overflow-hidden">
                            <img src="/images/default-avatar.png" class="w-full h-full" />
                        </div>

                        <div class="space-y- ">
                            <p class="font-semibold max-w-[120px] line-clamp-1 text-sm"
                                :title="authStore.user?.phoneNumber">{{
                                    authStore.user?.phoneNumber }}</p>
                            <p class="gray-text text-xs">User logged in</p>
                        </div>
                    </div>
                </router-link>
                <p @click="authStore.logout()"
                    class="hover:cursor-pointer bg-red-200 p-2 rounded my-4 text-sm flex items-center justify-center text-red-600 gap-1 hover:text-primary transition relative">
                    <ArrowLeftOnRectangleIcon class="w-5" /> <span>Logout</span>
                </p>
            </div>
            <div class="flex py-3 justify-center" v-else>
                <router-link :to="{ name: 'Login' }">
                    <Button>Login</Button>
                </router-link>
                <!-- <a href="#" class="button-transparent w-1/2 text-center">Sign up</a> -->
            </div>
        </div>
    </nav>
</template>


<style scoped>
.v-width {
    width: min(100%, 320px);
}
</style>