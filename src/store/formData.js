import { defineStore } from "pinia";
import { ref } from "vue";

export const useFormDataStore = defineStore('formData', () => {
    const motorInsuranceData = ref(Object)

    return {motorInsuranceData, }
})