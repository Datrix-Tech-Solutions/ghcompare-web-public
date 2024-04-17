<script setup>
import CoverDetailsForm from './CoverDetailsForm.vue';
import VehicleDetailsForm from './VehicleDetailsForm.vue';
import { useFormDataStore } from '../../store/formData'
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useToastStore } from '../../store/toast';

const toastStore = useToastStore()
const store = useFormDataStore() //for storing data in store

const route = useRoute() // initialise route object
const router = useRouter() // initialise router object
const formData = ref(store.motorInsuranceData) // form data to be used for this page
const activeForm = ref('CoverDetailsForm') //active form

// for form component switching
const forms = {
    CoverDetailsForm,
    VehicleDetailsForm,
}

//watch route to update form on page
watch(() => route.query.form, (newQuery) => {
    switch (newQuery) {
        case 'cover_details': activeForm.value = 'CoverDetailsForm';

            break;
        case 'vehicle_details': activeForm.value = 'VehicleDetailsForm'
            break;
        default: activeForm.value = 'CoverDetailsForm'
    }
})

// function that checks route for form query param and displays corresponding form - for refreshes
function updateForm() {
    switch (route.query?.form) {
        case 'cover_details': activeForm.value = 'CoverDetailsForm';

            break;
        case 'vehicle_details': activeForm.value = 'VehicleDetailsForm'
            break;
        default: activeForm.value = 'CoverDetailsForm'
    }
}


/**
 * function gets data from the various forms
 * @param {object} data - data payload from form
 */
async function getFormData(data) {
    //capture details
    if (data.formType == 'cover details') {
        formData.value.coverDetails = data.data
        store.motorInsuranceData = formData.value
    } else if (data.formType == 'vehicle details') {
        formData.value.vehicleDetails = data.data
        store.motorInsuranceData = formData.value
        await store.getMotorPremium()

        //Navigate user to premium page
        if (store.success) {
            await router.push({ name: 'Premium', 'params': { insuranceType: route.meta.insuranceType } })
        } else {
            toastStore.addToastMessage('danger', 'Failed', 'Something Went Wrong')
        }
    }
    console.log(formData.value)
}

onMounted(() => {
    // checks if there is query params and assigns cover_details if there are none
    if (Object.keys(route.query).length === 0) {
        router.replace({ name: 'MotorInsurance', query: { form: 'cover_details' } })
    }

    //this function runs to display form based on query params
    updateForm()
})

</script>

<template>
    <div class="">
        <KeepAlive>
            <component :is="forms[activeForm]" :form-data="formData" @sendFormData="getFormData">
            </component>
        </KeepAlive>
    </div>
</template>
