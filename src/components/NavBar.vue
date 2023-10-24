<script setup>
import { ChevronDownIcon, Bars3BottomRightIcon } from '@heroicons/vue/24/outline'
import DropDown from './DropDown.vue'

const links = [
    {
        text: 'Home',
        to: 'LandingPage'
    },
    {
        text: 'Compare',
        to: '',
        dropdown: [
            {
                text: 'Motor Insurance',
                to: 'MotorInsurance'
            },
            {
                text: 'Home Insurance',
                to: 'HomeInsurance'
            },
            {
                text: 'Travel Insurance',
                to: ''
            },
        ]
    },
    {
        text: 'Learn More',
        to: '',
        dropdown: [
            {
                text: 'Why Insure',
                to: ''
            },
            {
                text: 'Policies',
                to: ''
            },
            {
                text: 'About GhCompare',
                to: ''
            },
        ],
    },
    {
        text: 'Support',
        to: '',
        dropdown: [
            {
                text: 'Contact Us',
                to: 'ContactUs'
            },
            {
                text: 'FAQs',
                to: ''
            },
            {
                text: 'Book an Appointment',
                to: ''
            },
        ]
    },
]
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
                        <router-link :to="{ name: link.to }"
                            class="py-1 font-semibold text-gray-600 mr- hover:text-primary transition">{{
                                link.text }}
                            <ChevronDownIcon class="inline w-4 h-4" v-if="link.dropdown" />
                        </router-link>
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

            <!-- Mobile navigation -->
            <div class="mlg:hidden">
                <Bars3BottomRightIcon class="w-10 h-10 inline" />
            </div>
        </div>
    </nav>
</template>