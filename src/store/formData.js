import { defineStore } from "pinia";
import { ref } from "vue";

export const useFormDataStore = defineStore('formData', () => {
    const motorInsuranceData = ref({
        coverDetails: {
            coverType: '',
            duration: '',
        },
        vehicleDetails: {
            vehicleUse: '',
            riskType: '',
            numberOfSeats: '',
            amountInsured: '',
        },
    })

    return {motorInsuranceData, }
})