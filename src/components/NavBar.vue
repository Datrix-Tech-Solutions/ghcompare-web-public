<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

const links = [
    {
        text: 'Home',
        to: 'LandingPage'
    },
]
</script>

<template>
    <nav class="border-b">
        <div class="max-width flex justify-between items-center py-3 text-">
            <div class="">
                <img src="../assets/logo.png" alt="">
            </div>
            <div class="flex items-center gap-7">
                <div class="links">
                    <a href="#" class="font-semibold text-gray-600 mr-7 hover:text-primary transition">Home</a>
                    <a href="#" class="font-semibold text-gray-600 mr-5 hover:text-primary transition">Compare
                        <ChevronDownIcon class="inline w-4 h-4" />
                    </a>
                    <a href="#" class="font-semibold text-gray-600 mr-5 hover:text-primary transition">Learn More
                        <ChevronDownIcon class="inline w-4 h-4" />
                    </a>
                    <a href="#" class="font-semibold text-gray-600 hover:text-primary transition">Support
                        <ChevronDownIcon class="inline w-4 h-4" />
                    </a>
                </div>
                <div class="w-[2px] bg-gray-600 h-5"></div>
                <div class="buttons">
                    <a href="#" class="button-primary mr-1">Login</a>
                    <a href="#" class="button-transparent">Sign up</a>
                </div>
            </div>
        </div>
    </nav>
</template>