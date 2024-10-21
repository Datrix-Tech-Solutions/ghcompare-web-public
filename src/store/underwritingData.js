import { defineStore } from "pinia";
import { ref } from "vue";
import { api, star_api } from "../api/api";
import dayjs from "dayjs";
import { useFormDataStore } from "../store/formData";

const formDataStore = useFormDataStore();

export const useUnderwritingDataStore = defineStore(
  "underwritingData",
  () => {
    // /Api call wass successful
    const success = ref(false);
    // Api call failed
    const err = ref(false);
    const processing = ref(false); //for when api is being hit
    const underwritingParams = ref();
    const paymentSuccessData = ref(null);
    const underwritingData = ref({
      personalData: {
        account_type: "",
        first_name: "",
        last_name: "",
        mobile_number: "",
        email: formDataStore.motorInsuranceDataSaved?.coverDetails?.email,
        id_type: "",
        id_number: "",
        branch: "",
        title: "",
        gender: "",
        dob: "",
        marital_status: "",
        profession: "",
        address: "",
        gps_code: "",
      },
      vehicleData: {
        vehicle_brand: "",
        vehicle_make: "",
        vehicle_model: "",
        registration_number: "",
        vehicle_colour: "",
        chassis_number: "",
        body_type: "",
        body_type_code: "",
        model_code: "",
        customer_code: "",
        vehicle_risk:
          formDataStore.motorInsuranceDataSaved?.vehicleDetails?.vehicle_class,

        vehicle_trim: "",
        vehicle_fuel_type: "",
        vehicle_no_cylinders: 2,
        vehicle_cc: "",
        vehicle_drive_type: "",
        vehicle_engine_no: "",
      },
    });

    function $reset() {
      paymentSuccessData.value = null;
      underwritingData.value = {
        personalData: {
          account_type: "",
          first_name: "",
          last_name: "",
          mobile_number: "",
          email: formDataStore.motorInsuranceDataSaved?.coverDetails?.email,
          id_type: "",
          id_number: "",
          branch: "",
          title: "",
          gender: "",
          dob: "",
          marital_status: "",
          profession: "",
          address: "",
          gps_code: "",
        },
        vehicleData: {
          vehicle_brand: "",
          vehicle_make: "",
          vehicle_model: "",
          registration_number: "",
          vehicle_colour: "",
          chassis_number: "",
          body_type: "",
          body_type_code: "",
          model_code: "",
          customer_code: "",
          vehicle_risk:
            formDataStore.motorInsuranceDataSaved?.vehicleDetails
              ?.vehicle_class,

          vehicle_trim: "",
          vehicle_fuel_type: "",
          vehicle_no_cylinders: 2,
          vehicle_cc: "",
          vehicle_drive_type: "",
          vehicle_engine_no: "",
        },
      };
    }

    const checkFormField = (field) => {
      return underwritingParams.value?.find((item) => item.params === field);
    };

    const submitUnderwritingData = async (
      premiumData,
      generatePremiumData,
      id
    ) => {
      // getting user data in one object
      let ddata = {
        ...underwritingData.value.vehicleData,
        ...underwritingData.value.personalData,
      };

      let buyerData = {}; //initializing object to be passed to api

      //   checking ddata against underwriting params of the institution to get only required fields to pass to api
      for (let item = 0; item < underwritingParams.value.length; item++) {
        // if key exists in ddata object, add it to buyerData
        if (underwritingParams.value[item].params in ddata) {
          buyerData[underwritingParams.value[item].params] =
            ddata[underwritingParams.value[item].params];
        }
      }
      // console.log(buyerData);

      let underwriting = {
        buyerData,
        premiumData,
        generatePremiumData,
      };
      try {
        processing.value = true;
        const { data } = await api.post(
          `motor/underwriting/${id}`,
          underwriting
        );
        // console.log(underwriting);
        processing.value = false;
        return data;
      } catch (error) {
        console.log(error);
        processing.value = false;
      }
    };

    return {
      success,
      err,
      processing,
      underwritingData,
      underwritingParams,
      submitUnderwritingData,
      checkFormField,
      paymentSuccessData,
      $reset,
    };
  }
  //   {
  //     persist: {
  //       paths: ["motorInsuranceData", "motorInsurancePremium"],
  //     },
  //   }
);
