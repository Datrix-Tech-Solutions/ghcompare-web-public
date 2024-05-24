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

        title: "Mr",
        gender: "1",
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
        vehicle_cc: 3500,
        vehicle_drive_type: "",
        vehicle_engine_no: "",
      },
    });

    function $reset() {
      underwritingData.value = {
        personalData: {
          account_type: "",
          first_name: "John",
          last_name: "Doe",
          mobile_number: "0242762412",
          email: formDataStore.motorInsuranceDataSaved?.coverDetails?.email,
          id_type: "",
          id_number: "",
          branch: "",
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
          vehicle_cc: 3500,
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

    // const getVehicleMake = async (id, slug, brand) => {
    //   try {
    //     processing.value = true;
    //     const { data } = await api.get(`/vehicle/make/${id}/${brand}`);
    //     processing.value = false;
    //     // return data;
    //     switch (slug) {
    //       case "enterprise":
    //         return data;
    //       // break;
    //       case "star-assurance":
    //         return data.data;
    //       // break;
    //       case "phoenix":
    //         return data.vehiclemake;
    //       // break;
    //       default:
    //         return data;
    //     }
    //   } catch (error) {
    //     console.log(error);
    //     processing.value = false;
    //   }
    // };

    // const getVehicleModel = async (id, slug, brand) => {
    //   try {
    //     processing.value = true;
    //     const { data } = await api.get(`/vehicle/model/${id}/${brand}`);
    //     processing.value = false;
    //     switch (slug) {
    //       case "enterprise":
    //         return data;
    //       // break;
    //       case "star-assurance":
    //         return data.data;
    //       // break;
    //       case "phoenix":
    //         return data.vehModel;
    //       // break;
    //       default:
    //         return data;
    //     }
    //     // return data;
    //   } catch (error) {
    //     console.log(error);
    //     processing.value = false;
    //   }
    // };

    // const getVehicleBodyType = async (id, slug) => {
    //   try {
    //     processing.value = true;
    //     const { data } = await api.get(`/vehicle/body-types/${id}`);
    //     processing.value = false;
    //     switch (slug) {
    //       case "enterprise":
    //         return data;
    //       // break;
    //       case "star-assurance":
    //         return data.data;
    //       // break;
    //       case "phoenix":
    //         return data.vehicleBody;
    //       // break;
    //       default:
    //         return data;
    //     }
    //     // if (id === 4) {
    //     //   return data.data;
    //     // }
    //     // return data;
    //   } catch (error) {
    //     console.log(error);
    //     processing.value = false;
    //   }
    // };

    // const getVehicleColors = async () => {
    //   try {
    //     processing.value = true;
    //     const { data } = await api.get(`/vehicle/colors`);
    //     processing.value = false;
    //     return data.vehColor;
    //   } catch (error) {
    //     console.log(error);
    //     processing.value = false;
    //   }
    // };

    // const getIdTypes = async () => {
    //   try {
    //     processing.value = true;
    //     const { data } = await api.get(`/policies/id-types`);
    //     processing.value = false;
    //     return data.ids;
    //   } catch (error) {
    //     console.log(error);
    //     processing.value = false;
    //   }
    // };

    // const getBranches = async () => {
    //   try {
    //     processing.value = true;
    //     const { data } = await api.get(`/institution/branches`);
    //     processing.value = false;
    //     return data.data.entries;
    //   } catch (error) {
    //     console.log(error);
    //     processing.value = false;
    //   }
    // };

    return {
      success,
      err,
      processing,
      underwritingData,
      underwritingParams,
      submitUnderwritingData,
      checkFormField,
      $reset,
    };
  }
  //   {
  //     persist: {
  //       paths: ["motorInsuranceData", "motorInsurancePremium"],
  //     },
  //   }
);
