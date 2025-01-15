import { defineStore } from "pinia";
import { ref } from "vue";
import { api, star_api } from "../api/api";
import dayjs from "dayjs";

export const useFormDataStore = defineStore(
  "formData",
  () => {
    // /Api call wass successful
    const success = ref(false);
    // Api call failed
    const err = ref(false);
    // fetching premium
    const gettingPremium = ref(false);
    const motorInsurancePremium = ref(null);
    const processing = ref(false); //for when api is being hit
    const motorInsuranceDataSaved = ref({});
    // Motor insurance Data to be sent to server
    const motorInsuranceData = ref({
      coverDetails: {
        // email: "",
        prefered_cover: "",
        period_cover: "",
        start_date: new Date().toJSON().slice(0, 10),
      },
      vehicleDetails: {
        vehicle_use: "",
        vehicle_class: "",
        number_of_seats: "",
        vehicle_reg_year: "",
        year_of_manufacture: "",
        vehicle_value: "20000",
      },
    });

    const $reset = () => {
      motorInsuranceData.value = {
        coverDetails: {
          email: "",
          prefered_cover: "",
          period_cover: "",
          start_date: new Date().toJSON().slice(0, 10),
        },
        vehicleDetails: {
          vehicle_use: "",
          vehicle_class: "",
          number_of_seats: "",
          vehicle_reg_year: "",
          year_of_manufacture: "",
          vehicle_value: "20000",
        },
      };
    };

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
        // console.table(data);
        motorInsuranceDataSaved.value = { ...motorInsuranceData.value };
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
        //   // console.log(data);
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
      processing,
      gettingPremium,
      motorInsuranceData,
      motorInsuranceDataSaved,
      // underwritingData,
      // getCarBrands,
      // getVehicleMake,
      // getVehicleModel,
      // getVehicleBodyType,
      homeInsuranceData,
      homeInsurancePremium,
      getHomePremium,
      getMotorPremium,
      motorInsurancePremium,
      $reset,
      // submitUnderwritingData,
    };
  },
  {
    persist: {
      paths: ["motorInsurancePremium", "motorInsuranceDataSaved"],
    },
  }
);
