import { defineStore } from "pinia";
import { ref } from "vue";

export const useFormDataStore = defineStore('formData', () => {
    const motorInsuranceData = ref({
        coverDetails: {
            coverType: '',
            duration: '',
        },
        vehicleDetails: {
            vehicleUse: 'N/A',
            riskType: 'N/A',
            numberOfSeats: 'N/A',
            amountInsured: null,
        },
    })

    return {motorInsuranceData, }
})