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

    // Motor insurance Data to be sent to server
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

    // const underwritingData = ref({
    //   personalData: {
    //     first_name: "Francis",
    //     last_name: "Doh",
    //     mobile_number: "0242762412",
    //     email: "camoakohene84@gmail.com",
    //     id_type: "",
    //     id_number: "GHA-00000000-9",
    //     branch: "",
    //   },
    //   vehicleData: {
    //     vehicle_make: "",
    //     vehicle_model: "",
    //     registration_number: "GW 147-V",
    //     vehicle_colour: "White",
    //     chassis_number: "8743923472497429",
    //     body_type: "",
    //     body_type_code: "",
    //     model_code: "",
    //     customer_code: "ID0134348",
    //     vehicle_risk: "AMBULANCE",
    //   },
    // });

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

    // const submitUnderwritingData = async (premiumData, id) => {
    //   let underwriting = {
    //     buyerData: {
    //       ...underwritingData.value.vehicleData,
    //       ...underwritingData.value.personalData,
    //     },
    //     premiumData,
    //     generatePremiumData: {
    //       ...motorInsuranceData.value.coverDetails,
    //       ...motorInsuranceData.value.vehicleDetails,
    //     },
    //   };
    //   try {
    //     processing.value = true;
    //     const { data } = await api.post(
    //       `motor/underwriting/${id}`,
    //       underwriting
    //     );
    //     processing.value = false;
    //     return data;
    //   } catch (error) {
    //     console.log(error);
    //     processing.value = false;
    //   }
    // };

    // const getCarBrands = async () => {
    //   try {
    //     processing.value = true;
    //     const { data } = await api.get(`/vehicle/brands`);
    //     processing.value = false;
    //     return data;
    //   } catch (error) {
    //     console.log(error);
    //     processing.value = false;
    //   }
    // };

    // const getVehicleMake = async (id, brand) => {
    //   try {
    //     processing.value = true;
    //     const { data } = await api.get(`/vehicle/make/${id}/${brand}`);
    //     processing.value = false;
    //     return data;
    //   } catch (error) {
    //     console.log(error);
    //     processing.value = false;
    //   }
    // };

    // const getVehicleModel = async (id, brand) => {
    //   try {
    //     processing.value = true;
    //     const { data } = await api.get(`/vehicle/model/${id}/${brand}`);
    //     processing.value = false;
    //     return data;
    //   } catch (error) {
    //     console.log(error);
    //     processing.value = false;
    //   }
    // };

    // const getVehicleBodyType = async (id) => {
    //   try {
    //     processing.value = true;
    //     const { data } = await api.get(`/vehicle/body-types/${id}`);
    //     processing.value = false;
    //     return data;
    //   } catch (error) {
    //     console.log(error);
    //     processing.value = false;
    //   }
    // };

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
      processing,
      gettingPremium,
      motorInsuranceData,
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
      // submitUnderwritingData,
    };
  },
  {
    persist: {
      paths: ["motorInsuranceData", "motorInsurancePremium"],
    },
  }
);
