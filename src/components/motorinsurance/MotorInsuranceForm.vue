<script setup>
import CoverDetailsForm from './CoverDetailsForm.vue';
import VehicleDetailsForm from './VehicleDetailsForm.vue';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const activeForm = ref('CoverDetailsForm')
const forms = {
    CoverDetailsForm,
    VehicleDetailsForm,
}

// watch()

// function that checks route for form query param and displays corresponding form
function updateForm() {
    switch (route.query?.form) {
        case 'cover_details': activeForm.value = 'CoverDetailsForm'
            break;
        case 'vehicle_details': activeForm.value = 'VehicleDetailsForm'
            break;
        default: activeForm.value = 'CoverDetailsForm'
    }
}

onMounted(() => {
    // checks if there is query params and assigns cover_details if there are none
    if (Object.keys(route.query).length === 0) {
        router.push({ name: 'MotorInsurance', query: { form: 'cover_details' } })
    }

    //this function runs to display form based on query params
    updateForm()
})

</script>

<template>
    <div class="">
        <component :is="forms[activeForm]" @updateForm="updateForm"></component>
    </div>
</template>
