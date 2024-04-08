<script setup>
import { PaperClipIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';
import { links } from '../data/links';

const router = useRouter()

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
            <!-- <div class="flex py-3">
                <a href="#" class="button-primary mr-1 w-1/2 text-center">Login</a>
                <a href="#" class="button-transparent w-1/2 text-center">Sign up</a>
            </div> -->
        </div>
    </nav>
</template>


<style scoped>
.v-width {
    width: min(100%, 320px);
}
</style>