<script setup>
import ButtonWithArrow from '../components/ui/ButtonWithArrow.vue';
import { motorInsurance } from '../data/insurance_policies_data'
</script>

<template>
    <main class="mt-20">
        <section class="mb-10">
            <h2 class="md:text-6xl text-center text-5xl font-bold mb-5 "> Insurance <span
                    class="text-primary">Policies</span>
            </h2>

            <p class="text-xl text-gray-600 text-center ">Learn more about Insurance policies we offer services for.</p>
        </section>

        <!-- Links -->
        <nav class="mb-14 sticky bg-background top-[76px]  z-20">
            <div class="padding py-3 ">
                <ul class="flex justify-center gap-1">
                    <router-link :to="{ name: 'HomeDetail' }" class="button-transparent cursor-pointer">
                        <li>Home</li>
                    </router-link>
                    <router-link :to="{ name: 'MotorDetail' }" class="button-transparent cursor-pointer">
                        <li>Motor</li>
                    </router-link>
                    <router-link :to="{ name: 'TravelDetail' }" class="button-transparent cursor-pointer">
                        <li>Travel</li>
                    </router-link>
                </ul>
            </div>
        </nav>

        <!-- Motor Insurance -->
        <section class="max-width  text-lg text-gray-600 mb-32">
            <router-view></router-view>
        </section>

    </main>
</template>


<style scoped>
.router-link-exact-active {
    @apply bg-primary !text-white rounded-md;
}
</style>