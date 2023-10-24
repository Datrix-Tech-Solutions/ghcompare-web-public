<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';
import { useFormDataStore } from '../../store/formData';
import { ref } from 'vue';

//Initialize router
const router = useRouter();

const store = useFormDataStore()

const formData = ref(store.homeInsuranceData)

/**
 * function submits form and directs to premium page
 */
async function submit() {
    store.homeInsuranceData = formData.value
    await store.getHomePremium()
    if (store.success) {
        router.push({ name: 'HomePremium' })
    }
}
</script>

<template>
    <div class="bg-white max-w-2xl py-20 md:px-14 px-6 rounded-lg mx-auto">

        <h3 class="text-2xl font-bold mb-10">Your Details</h3>

        <form @submit.prevent="submit">
            <!-- Full name -->
            <div class="mb-8">
                <label for="fullname " class="text-primary mb-1 text-lg block">Full Name:</label>
                <input type="text" name="fullname" id="fullname" class="w-full" v-model="formData.fullName"
                    placeholder="Enter your full name" required>
            </div>

            <!-- Email -->
            <div class="mb-8">
                <label for="email " class="text-primary mb-1 text-lg block">Email:</label>
                <input type="email" name="email" id="email" class="w-full" v-model="formData.email"
                    placeholder="Enter your email" required>
            </div>

            <!-- phone  number -->
            <div class="mb-8">
                <label for="phone " class="text-primary mb-1 text-lg block">Phone Number:</label>
                <div class="flex items-center gap-2">
                    <span>+233</span>
                    <input type="number" name="phone" id="phone" class="w-full" placeholder="Enter your phone number"
                        v-model="formData.phone" required>
                </div>
            </div>

            <!-- Submit button -->
            <div class="flex justify-end">
                <button class="group button-primary" v-if="store.gettingPremium">Submitting...
                </button>
                <button class="group button-primary" v-else>Submit
                    <ArrowRightIcon class="w-5 h-5 inline group-hover:translate-x-2 transition" />
                </button>
            </div>
        </form>
    </div>
</template>