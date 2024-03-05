<script setup>
import ComparePolicies from '../components/ComparePolicies.vue';
import HowToBuy from '../components/HowToBuy.vue';
import Partners from '../components/Partners.vue';
import { insuranceAspects } from '../data/insurance_policies_data'

</script>

<template>
    <main class="max-width">
        <!-- Header - What is insurance -->
        <section class="my-10">
            <div class="flex items-center gap-10 mlg:flex-row flex-col">
                <!-- Text -->
                <div class="mlg:w-1/2 mlg:mt-0 mt-10">
                    <h2 class="md:text-6xl text-center mlg:text-left text-5xl font-bold mb-5">What is <span
                            class="text-primary">Insurance?</span></h2>
                    <p class="text-xl max-w-[600px] text-gray-600 text-center mlg:text-left">
                        Insurance is a financial arrangement that provides individuals and organizations with protection
                        against various risks and potential financial losses. In an insurance contract, the policyholder
                        (the person or entity seeking insurance) pays regular premiums to an insurance company, and in
                        return, the insurance company agrees to provide compensation, known as a "benefit" or "coverage," in
                        the event of specified events or losses.
                    </p>
                </div>

                <!-- Image -->
                <div class="mlg:w-1/2">
                    <img src="../assets/why-insure.png" alt="insurance" class="mlg:w-full sm:w-2/3 w-full mx-auto">
                </div>
            </div>
        </section>

        <!-- Insurance fundamentals -->
        <section class="my-32 max-w-[1000px] mx-auto">
            <div class="text-center">
                <h3 class="text-primary text-4xl font-bold">Fundamental Aspects of Insurance</h3>
                <p class="text-xl mt-5">Some important terms associated with insurance</p>
            </div>

            <!-- terminologies -->
            <div class="max-w-[1000px] text-lg text-gray-600">
                <ul v-for="aspect in insuranceAspects" :key="aspect.title">
                    <li class="my-5">
                        <span class="font-bold text-primary">{{ aspect.title }}</span>: {{ aspect.description }}
                    </li>
                </ul>
            </div>
        </section>

        <!-- Why Insure -->
        <section class="my-32 max-w-[1000px] mx-auto">
            <div class="text-lg text-gray-600">
                <h3 class="text-primary text-4xl font-bold">Why Insure?</h3>

                <p class=" mt-5"> Insurance plays a crucial role in providing financial security and peace of mind to
                    individuals, families, and businesses by helping them manage and mitigate potential financial losses
                    from unexpected events.</p>

                <p class="my-5">Types of insurance include life insurance, health insurance, auto insurance, home insurance,
                    property insurance, liability insurance, and many others, each designed to address specific needs and
                    risks.</p>

                <p class="">
                    <span class="text-primary font-bold">GhCompare</span> offer services for Motor, Home and Travel
                    insurance, and we are here to empower you with the
                    knowledge and tools you need to make informed insurance decisions that protect what matters most to you.
                </p>
            </div>
        </section>

        <!-- How to buy -->
        <HowToBuy class="rounded-3xl my-32" />

        <!-- compare policies -->
        <ComparePolicies />


        <!-- partners -->
        <section class="my-32">
            <Partners />
        </section>



    </main>
</template>