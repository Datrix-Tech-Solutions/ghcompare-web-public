<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import MotorInsuranceForm from '../components/motorinsurance/MotorInsuranceForm.vue';
import { nextTick, onBeforeUnmount, onMounted, onUnmounted, ref, watch } from 'vue';
import { onReload } from '../utils/utils';
import { useFormDataStore } from '../store/formData';

const formDataStore = useFormDataStore()

const isEdited = ref(false)

watch(formDataStore.motorInsuranceData, () => {
    isEdited.value = true
})
onBeforeRouteLeave((to, from) => {
    if (to.path.includes('premium')) {
        return true
    }
    else {
        if (isEdited.value) {
            const answer = window.confirm(
                'Do you really want to leave? you made edits to this form!'
            )
            // cancel the navigation and stay on the same page
            if (!answer) return false
        } else {
            return true
        }
    }
})

onMounted(() => {
    window.addEventListener('beforeunload', onReload);
})

onBeforeUnmount(() => {
    window.removeEventListener('beforeunload', onReload)
})

onUnmounted(() => {
    formDataStore.$reset()
})

</script>

<template>
    <main class="max-width py-20">
        <!-- heading and some description -->
        <section>
            <h2 class="md:text-5xl text-4xl font-bold text-center text-primary">Motor Insurance Cover</h2>
            <p class="m max-w-4xl capitalize mx-auto text-center mt-4 md:text-xl text-lg text-gray-600">Compare motor
                insurance quotes
                and get the
                best rates
            </p>
        </section>

        <!-- Form that captures details -->
        <section class="py-20">
            <MotorInsuranceForm />
        </section>


    </main>
</template>