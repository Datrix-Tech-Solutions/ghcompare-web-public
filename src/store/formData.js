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

    const homeInsuranceData = ref({
        "fullName": "",
        "phone": "",
        "email": "",
        "product": "3004", //product code for homeowners
        "currency": "GHS",
        "homeRisks": [
            // Any combination between the home sections can be used. However, every combination must include either BUILDING or CONTENT or both. Each section in a combination has its own 
            // object in the homeRisks collection. this example is for a BUILDING and RENT combination
            {
                "sectionCode": "1", // Building
                "startDate": "2021-07-22T00:00:00",
                "endDate": "2022-07-21T00:00:00",
                "sumInsured": 10000
            },
            // {
            //     "sectionCode": "5", // rent (loss of rent)
            //     "startDate": "2021-07-22T00:00:00",
            //     "endDate": "2022-07-21T00:00:00",
            //     "sumInsured": 500000
            // }
        ]
    })

    return {motorInsuranceData, homeInsuranceData }
})