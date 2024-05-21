<script setup>
// @ts-check
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/vue/24/outline"

/**
 * Links to Compare various policies
 * @type {Array<object>}
 */
const compare = [
    {
        text: "Motor Insurance",
        to: 'MotorInsurance',
        soon: false
    },
    {
        text: "Home Insurance",
        to: '',
        soon: true,
    },
    {
        text: "Travel Insurance",
        to: '',
        soon: true,
    },
]

/**
 * Links to various pages on the website
 * @type {Array<object>}
 */
const company = [
    { text: "Home", to: 'LandingPage' },
    { text: "About GhCompare", to: 'AboutUs' },
    { text: "Privacy Policy", to: 'PrivacyPolicy' },
    { text: "Terms & Condition" },
]
</script>

<template>
    <footer class="bg-gray-200  text-gray-600">
        <div class="max-width flex md:justify-around mlg:justify-between gap-5 py-20 mlg:flex-nowrap flex-wrap">
            <!-- Logo and description -->
            <div class="w-[350px]">
                <img src="../assets/logo.png" alt="ghcompare" class="max-w-[200px] mb-5">

                <p class="leading-[30px] xs:w-[300px]">Save time and money. Compare quotes from top insurance companies
                    in
                    the
                    country
                    easily all on one website
                </p>
            </div>

            <!-- Company -->
            <div class="w-[300px]">
                <h3 class="font-bold text-xl text-black mb-5">Company</h3>
                <ul v-for="(item, index) in company" :key="index">
                    <li class="mb-3"><router-link :to="{ name: item.to ? item.to : '', hash: item.to ? '' : '#' }"
                            class="hover:text-primary"
                            :class="{ 'hover:!text-gray-600 cursor-not-allowed': !item.to }">{{
                                item.text
                            }}</router-link></li>
                </ul>
            </div>

            <!-- Compare -->
            <div class="w-[300px]">
                <h3 class="font-bold text-xl text-black mb-5">Compare</h3>
                <ul v-for="(item, index) in compare" :key="index">
                    <li class="mb-3"><router-link :to="{ name: item.soon ? '' : item.to, hash: item.soon ? '#' : '' }"
                            class="hover:text-primary"
                            :class="{ 'hover:!text-gray-600 cursor-not-allowed': item.soon }">{{
                                item.text
                            }} <span v-if="item.soon"
                                class="text-white rounded-full bg-red-500 px-1 py-1 text-[8px] relative -top-3 ">Coming
                                soon</span></router-link>
                    </li>
                </ul>
            </div>

            <!-- Contact -->
            <div class="w-[300px]">
                <h3 class="font-bold text-xl text-black mb-5">Contact</h3>
                <p class="mb-3 flex gap-2">
                    <MapPinIcon class="w-6 h-6 inline shrink-0 relative top-1" />
                    <span>17 Boundary Road, East Legon, down Kaiser Kitchen Junction</span>
                </p>

                <p class="mb-3 flex gap-2 items-start">
                    <EnvelopeIcon class="w-6 h-6 inline shrink-0" />
                    <a href="mailto:info@iriskmanagement.net" class="hover:text-primary">info@iriskmanagement.net</a>
                </p>

                <p class="mb-3 flex gap-2 items-center">
                    <PhoneIcon class="w-6 h-6 inline shrink-0  relative top-" />
                <div>
                    <p>+233 (0)30 250 0168</p>
                    <p>+233 (0)50 169 5383</p>
                </div>
                </p>

            </div>
        </div>

        <div class="border-t border-gray-300">
            <p class="text-center text-sm py-3"> &copy; {{ new Date().getFullYear() }} GHCOMPARE | All Rights Reserved
            </p>
        </div>
    </footer>
</template>