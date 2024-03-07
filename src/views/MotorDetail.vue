<script setup>
import ButtonWithArrow from '../components/ui/ButtonWithArrow.vue';
import { motorInsurance } from '../data/insurance_policies_data'
import GetUnbeatablePrices from '../components/GetUnbeatablePrices.vue';
import Partners from '../components/Partners.vue';
import HowToBuy from '../components/HowToBuy.vue';
</script>

<template>
    <div>
        <div class="">
            <div class="my-10">
                <div class="flex items-center gap-10 mlg:flex-row-reverse flex-col">
                    <!-- Text -->
                    <div class="mlg:w-1/2 mlg:mt-0 mt-10">
                        <h3 class="text-4xl text-primary font-bold mb-5">Motor Insurance</h3>

                        <p class=" max-w-[600px] text-gray-600 text-center mlg:text-left mb-5">
                            Motor insurance, also known as auto insurance or car insurance, is a type of insurance
                            policy that
                            provides financial protection for vehicle owners and drivers in the event of accidents,
                            theft, damage,
                            and other unexpected incidents related to their vehicles. It is designed to help
                            policyholders cover the
                            financial costs associated with these events and can vary in terms of coverage types and
                            options.
                        </p>

                        <!-- get started button -->
                        <RouterLink :to="{ name: 'MotorInsurance' }">
                            <ButtonWithArrow text="Compare" />
                        </RouterLink>

                    </div>

                    <!-- Image -->
                    <div class="mlg:w-1/2">
                        <img src="../assets/motor-insurance.jpg" alt="insurance"
                            class="mlg:w-full sm:w-2/3 w-full mx-auto">
                    </div>
                </div>
            </div>

            <p class="mt-3">Here are some key aspects of motor insurance:</p>

            <div class="my-10 max-w-[1000px] mx-auto" v-for="(item, index) in motorInsurance" :key="index">
                <!-- Term -->
                <h3 class="text-2xl text-primary font-bold">{{ item.term }}</h3>

                <!-- description -->
                <p class=""> {{ item.description }}</p>

                <!-- types of term: if any -->
                <div class="my-5 ml-5" v-for="(type, count) in item?.types" :key="count">
                    <p class="">
                        <span class="text-primary font-bold">{{ type?.name }}</span>: {{ type?.description }}
                    </p>
                    <!-- examples in descripiton if any -->
                    <ul class="ml-5" v-for="example in type?.examples">
                        <li class="list-disc">{{ example }}</li>
                    </ul>
                </div>
            </div>

            <!-- Advert -->
            <div class="my-32">
                <GetUnbeatablePrices link="MotorInsurance" />
            </div>

            <!-- well known brands -->
            <div class="my-32">
                <HowToBuy class="rounded-3xl" />
            </div>

            <!-- well known brands -->
            <div class="my-32">
                <Partners />
            </div>
        </div>
    </div>
</template>

<style scoped></style>