import { defineStore } from "pinia";
import { ref } from "vue";
import { star_api } from "../api/api";

export const useFormDataStore = defineStore("formData", () => {
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
      coverType: "",
      duration: "",
    },
    vehicleDetails: {
      vehicleUse: "",
      riskType: "",
      numberOfSeats: "",
      amountInsured: "",
    },
  });

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
        startDate: "2021-07-22T00:00:00",
        endDate: "2022-07-21T00:00:00",
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
      homeInsurancePremium.value = data.data.homeRisks[0].premium.toFixed(2);
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
  };
});
