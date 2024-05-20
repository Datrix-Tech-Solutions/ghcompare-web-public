<script setup>
import LandingHeader from '../components/LandingHeader.vue';
import ComparePolicies from '../components/ComparePolicies.vue';
import HowToBuy from '../components/HowToBuy.vue';
// import { state, socket } from "../socket";
// import { computed, ref } from 'vue';

// const connected = computed(() => {
//     return state.connected
// })

// const paymentStatus = ref('unpaid')

// const connect = () => {
//     socket.connect();

//     if (state.connected) {
//         socket.on("response", (data) => {
//             console.log("response received:", data);
//         })
//     }
// }

// const disconnect = () => {
//     socket.disconnect();
// }

</script>

<template>
    State: {{ connected }} <button @click="connect()">connect</button> <button @click="disconnect()">disconnect</button>
    <!-- Header -->
    <LandingHeader />

    <!-- Main content -->
    <main class="">

        <!-- compare policies -->
        <ComparePolicies />

        <!-- How to buy -->
        <HowToBuy />

        <!-- Partners Section -->
        <section class="max-width p-28">
            <h2
                class="md:text-4xl text-3xl font-semibold mx-auto text-center max-w-4xl md:leading-[50px] leading-[40px]">
                Compare genuine,
                precise Quotes
                from <span class="capitalize text-primary font-semibold">leading insurance providers</span> in the
                Country.
            </h2>

            <!-- logos of partners -->
            <div class="mt-5">
                <div class="flex justify-center gap-8">
                    <div class="w w-64">
                        <img src="../assets/partners/enterprise.png" alt="" class="w-full">
                    </div>

                    <div class="w w-64">
                        <img src="../assets/partners/phoenix.png" alt="" class="w-full">
                    </div>
                    <div class="w w-64">
                        <img src="../assets/partners/star_assurancee.png" alt="" class="w-full">
                    </div>
                </div>
                <div class="flex justify-center gap-8">
                    <!-- <div class="w w-64">
                    <img src="../assets/partners/coronation.png" alt="" class="w-full">
                </div> -->
                    <!-- <div class="w w-64">
                    <img src="../assets/partners/imperial.png" alt="" class="w-full">
                </div> -->
                    <!-- <div class="w w-64">
                    <img src="../assets/partners/hollard.png" alt="" class="w-full">
                </div> -->
                </div>
            </div>
        </section>
    </main>
</template>