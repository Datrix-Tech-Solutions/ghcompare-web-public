<script setup>
import Partners from '../components/Partners.vue';
import InformationCard from '../components/InformationCard.vue';

const whyUs = [
    {
        title: "Transparency",
        text: "We believe in clear and honest communication. We provide unbiased information and facilitate side-by-side comparisons so you can see the details of each policy.",
        image: "./src/assets/transparency.png",
    },
    {
        title: "Empowerment",
        text: "We put you in control of your insurance decisions. You can explore quotes, read expert insights, and choose the best coverage for your life situation.",
        image: "./src/assets/empowerment.png",
    },
    {
        title: "Simplicity",
        text: "Insurance doesn't have to be complicated. Our intuitive platform is designed to make the comparison process straightforward and stress-free.",
        image: "./src/assets/simplicity.png",
    },
    {
        title: "Customer-Centric",
        text: "Your satisfaction is our priority. We're here to answer your questions, assist you throughout the process, and provide support when you need it.",
        image: "./src/assets/customer-centric.png",
    },
]
</script>

<template>
    <main class="max-width">
        <!-- Header -->
        <section class="">
            <div class="flex items-center gap-10">
                <!-- Text -->
                <div class="w-1/2">
                    <h2 class="text-6xl  font-bold mb-5">About <span class="text-primary">GhCompare</span></h2>
                    <p class="text-xl max-w-[600px] text-gray-600">
                        At GhCompare, we are passionate about helping you navigate the complex world of insurance. Our
                        mission is simple: to empower you with the knowledge and tools you need to make informed insurance
                        decisions that protect what matters most to you.
                    </p>
                </div>

                <!-- Image -->
                <div class="w-1/2">
                    <img src="../assets/about-1.png" alt="about-us" class="w-full">
                </div>
            </div>
        </section>

        <!-- Who We are -->
        <section class="mb-28">
            <div class="text-center mt-14">
                <h3 class="text-5xl text-primary font-semibold mb-5">Who We Are</h3>
                <p class="text-xl max-w-[1000px] mx-auto text-gray-600">
                    We are a dedicated team of insurance experts and technology enthusiasts who understand the challenges of
                    finding the right insurance coverage. With years of experience in the industry, we have witnessed the
                    evolving landscape of insurance and are committed to making it easier for you to compare quotes,
                    understand policies, and make confident choices.
                </p>
            </div>
        </section>

        <!-- What we do -->
        <section class="mb-28">
            <div class="text-center mt-14">
                <h3 class="text-5xl text-primary font-semibold mb-5">What we do</h3>
                <p class="text-xl max-w-[1000px] mx-auto text-gray-600">
                    We've created a user-friendly platform that allows you to effortlessly compare insurance quotes from
                    trusted providers. We believe that everyone deserves access to affordable and reliable insurance, and
                    we're here to make that a reality. We partner with reputable insurance companies to offer you a wide
                    range of options, so you can find the coverage that fits your unique needs and budget.
                </p>
            </div>
        </section>

        <!-- Why us -->
        <section class="mb-28">
            <div class="text-center mt-14">
                <h3 class="text-5xl text-primary font-semibold mb-5"><span class="text-black">Why</span> GhCompare?</h3>

                <!-- why us card -->
                <div class="my-14 flex justify-center gap-5 flex-wrap lg:flex-nowrap">
                    <template v-for="(item, index) in whyUs" :key="index">
                        <InformationCard :text="item.text" :image="item.image" :title="item.title" />
                    </template>
                </div>

                <!--  -->
                <p class="text-xl max-w-[1000px] mx-auto text-gray-600">
                    At GhCompare, we believe that understanding your insurance options is the first step to securing your
                    future. We're here to help you find the right coverage, make informed choices, and enjoy peace of mind.
                    Thank you for trusting us with your insurance needs.
                </p>
            </div>
        </section>

        <!-- partners section -->
        <section class="max-width my-28">
            <Partners />
        </section>
    </main>
</template>