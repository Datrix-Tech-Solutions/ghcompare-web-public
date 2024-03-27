import { defineStore } from "pinia";
import { ref } from "vue";
import { api, star_api } from "../api/api";
import dayjs from "dayjs";

export const useFormDataStore = defineStore(
  "formData",
  () => {
    /**
     * Api call wass successful
     */
    const success = ref(false);

    /**
     * Api call failed
     */
    const err = ref(false);

    /**
     * Motor insurance Data to be sent to server
     */
    const motorInsuranceData = ref({
      coverDetails: {
        prefered_cover: "",
        period_cover: "",
        start_date: "",
      },
      vehicleDetails: {
        vehicle_use: "",
        vehicle_class: "",
        number_of_seats: "",
        vehicle_reg_year: "",
        year_of_manufacture: "",
        vehicle_value: "",
      },
    });

    const motorInsurancePremium = ref(null);

    const getMotorPremium = async () => {
      try {
        gettingPremium.value = true;

        //fetching data
        const data = (
          await api.post("motor/getpremium", {
            ...motorInsuranceData.value.coverDetails,
            ...motorInsuranceData.value.vehicleDetails,
          })
        ).data;
        console.table(data);
        // get total premium for home insurance
        motorInsurancePremium.value = data;
        gettingPremium.value = false;
        success.value = true;
        err.value = false;
      } catch (error) {
        console.error(error);
        gettingPremium.value = false;
        err.value = true;
        success.value = false;
      }
    };

    /**
     * Home insurance Data to be sent to server
     */
    const homeInsuranceData = ref({
      fullName: "",
      phone: "",
      email: "",
      product: "3004",
      currency: "GHS",
      homeRisks: [
        {
          sectionCode: "1", // Building
          startDate: dayjs().format(),
          endDate: dayjs().add(1, "y").format(),
          sumInsured: 10000,
        },
      ],
    });

    /**
     * Premium for home Insurance after generation
     */
    const homeInsurancePremium = ref();

    /**
     * fetching premium
     */
    const gettingPremium = ref(false);

    /**
     * @function
     * function to get home premium and assign homeInsurancePremium
     */
    async function getHomePremium() {
      try {
        gettingPremium.value = true;

        //fetching data
        const data = (
          await star_api.post("premium/homeowners", homeInsuranceData.value)
        ).data;
        //   console.log(data);
        // get total premium for home insurance
        homeInsurancePremium.value = data.data.TotalPremium.toFixed(2);
        gettingPremium.value = false;
        success.value = true;
        err.value = false;
      } catch (error) {
        console.error(error);
        gettingPremium.value = false;
        err.value = true;
        success.value = false;
      }
    }

    return {
      success,
      err,
      gettingPremium,
      motorInsuranceData,
      homeInsuranceData,
      homeInsurancePremium,
      getHomePremium,
      getMotorPremium,
      motorInsurancePremium,
    };
  },
  { persist: true }
);
