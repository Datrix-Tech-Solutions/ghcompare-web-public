<script setup>
import { PhoneIcon, EnvelopeIcon, ClockIcon, MapPinIcon } from '@heroicons/vue/24/outline';
import ContactForm from '../components/ContactForm.vue'
</script>

<template>
    <main class="max-width">
        <!-- Header -->
        <section class="head">
            <div class="flex justify-center gap-10 items-center">
                <!-- Text -->
                <div class="w-1/2">
                    <h2 class="text-6xl text-primary font-bold mb-5">Contact Us</h2>
                    <p class="text-xl max-w-[600px]">We're here to help you find the best insurance coverage for your needs.
                        Whether you
                        have
                        questions, need assistance, or want to provide feedback, we're just a message away. Your
                        satisfaction is our top priority, and we're committed to making your insurance comparison journey as
                        smooth as possible.</p>
                </div>

                <!-- Image -->
                <div class="w-1/2">
                    <img src="../assets/contact.png" alt="contact-us" class="w-full">
                </div>
            </div>
        </section>

        <!-- Contact -->
        <section class="my-20">
            <div class="flex justify-center">
                <!-- How to reach us -->
                <div class="w-[600px]">
                    <h3 class="text-4xl text-primary font-semibold mb-5">How to Reach Us:</h3>
                    <p class="mb-5 text-gray-600 flex gap-2 text-lg">
                        <MapPinIcon class="w-8 h-8 text-primary inline shrink-0 relative top-1" />
                        <span class="w-[300px]">17 Boundary Road, East Legon, down Kaiser Kitchen Junction</span>
                    </p>

                    <p class="mb-5 text-gray-600 flex gap-2 items-start text-lg">
                        <EnvelopeIcon class="w-8 h-8 text-primary inline shrink-0" />
                        <a href="mailto:info@iriskmanagement.net" class="hover:text-primary">info@iriskmanagement.net</a>
                    </p>

                    <p class="mb-5 text-gray-600  flex gap-2 items-start text-lg">
                        <PhoneIcon class="w-8 h-8 text-primary inline shrink-0  relative top-2" />
                    <div>
                        <p>+233 (0)30 250 0168</p>
                        <p>+233 (0)50 169 5383</p>
                    </div>
                    </p>

                    <p class="mb-5 text-gray-600  flex gap-2 items-start text-lg">
                        <ClockIcon class="w-8 h-8 text-primary inline shrink-0 relative top-1" />
                    <div>
                        <p>Monday: 8AM - 5PM</p>
                        <p>Tuesday: 8AM - 5PM</p>
                        <p>Wednesday: 8AM - 5PM</p>
                        <p>Thursday: 8AM - 5PM</p>
                        <p>Friday: 8AM - 5PM</p>
                    </div>
                    </p>
                </div>

                <!-- Contact form -->
                <div class="w-[600px]">
                    <h3 class="text-4xl text-primary font-semibold mb-5">Send Us a Message</h3>
                    <p class="text-gray-600 text-lg mb-5">We're happy to answer any questions you have or provide you with
                        an
                        estimate.
                        Just send us a message in the form below with any questions you may have.</p>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>