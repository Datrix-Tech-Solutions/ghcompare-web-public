<script setup>
import { ChevronDownIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import DropDown from './DropDown.vue'
import MobileNav from './MobileNav.vue';
import { ref } from 'vue';
import { links } from '../data/links';

const showMobileNav = ref(false)
</script>

<template>
    <nav class="border-b sticky top-0 bg-[#f0f3f5] z-20">
        <div class="max-width flex justify-between items-center py-3 text-">

            <!-- Logo -->
            <div class="">
                <router-link :to="{ name: 'LandingPage' }">
                    <img src="../assets/logo.png" alt="">
                </router-link>
            </div>

            <!-- Links -->
            <div class="mlg:flex items-center gap-7 hidden">
                <div class="links" v-for="(link, index) in links" :key="index">
                    <div class="group  relative">
                        <router-link :to="{ name: link.to }" v-if="!link.dropdown"
                            class="py-1 font-semibold text-gray-600 mr- hover:text-primary transition">{{
                                link.text }}
                            <ChevronDownIcon class="inline w-4 h-4" v-if="link.dropdown" />
                        </router-link>
                        <span v-else
                            class="py-1 cursor-pointer font-semibold text-gray-600 mr- hover:text-primary transition">{{
                                link.text }}
                            <ChevronDownIcon class="inline w-4 h-4" v-if="link.dropdown" />
                        </span>
                        <!-- dropdown -->
                        <DropDown v-if="link.dropdown" :links="link.dropdown"
                            class="absolute right-0 group-hover:block hidden hover:block" />

                    </div>
                </div>

                <!-- divider -->
                <div class="w-[2px] bg-gray-600 h-5"></div>

                <!-- Login and sign up -->
                <div class="buttons">
                    <a href="#" class="button-primary mr-1">Login</a>
                    <a href="#" class="button-transparent">Sign up</a>
                </div>
            </div>



            <!-- hamburgar -->
            <div class="mlg:hidden">
                <Bars3BottomRightIcon class="w-10 h-10 inline cursor-pointer" @click="() => { showMobileNav = true }" />
            </div>

        </div>

        <!-- Mobile navigation -->
        <div class="mlg:hidden">
            <!-- mobile nav -->
            <Transition name="mobile">
                <MobileNav v-if="showMobileNav" />
            </Transition>

            <!-- overlay -->
            <Transition name="overlay">
                <div class="inset-0 fixed backdrop-blur-sm bg-[#f4f7f969]" v-if="showMobileNav"
                    @click="() => { showMobileNav = false }"></div>
            </Transition>

            <!-- close button -->
            <Transition name="close">
                <XMarkIcon class="inline w-12 h-12 z-30 fixed top-2 left-2 cursor-pointer" v-if="showMobileNav"
                    @click="() => { showMobileNav = false }" />
            </Transition>
        </div>
    </nav>
</template>

<style scoped>
/* Mobile transition */
.mobile-enter-active,
.mobile-leave-active {
    transition: transform 0.5s ease;
    transform: translateX(0)
}

.mobile-enter-from,
.mobile-leave-to {
    transform: translateX(100%);
}

/* Overlay transition */
.overlay-enter-active,
.overlay-leave-active {
    transition: opacity 0.5s ease;
}

.overlay-enter-from,
.overlay-leave-to {
    opacity: 0;
}

/* close icon transition */
.close-enter-active,
.close-leave-active {
    transition: transform 0.4s ease 0.5s;
    transform: scale(1, 1);
}

.close-enter-from,
.close-leave-to {
    transition: transform 0.2s ease 0s;
    transform: scale(0)
}

.active-link {
    color: var(--primary-color)
}
</style>