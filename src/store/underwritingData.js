import { defineStore } from "pinia";
import { ref } from "vue";
import { api, star_api } from "../api/api";
import dayjs from "dayjs";

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
        email: "",
        id_type: "",
        id_number: "GHA-00000000-0",
        branch: "",

        title: "Mr",
        gender: "1",
        dob: "2001-10-10",
        marital_status: "Single",
        profession: "teacher",
        address: "accra",
        gps_code: "GS-101-1011",
      },
      vehicleData: {
        vehicle_brand: "",
        vehicle_make: "",
        vehicle_model: "",
        registration_number: "GW 147-V",
        vehicle_colour: "",
        chassis_number: "8743923472497429",
        body_type: "",
        body_type_code: "SALOON",
        model_code: "100269",
        customer_code: "ID0134348",
        vehicle_risk: "AMBULANCE",

        vehicle_trim: "Auto BMW",
        vehicle_fuel_type: "Petrol",
        vehicle_no_cylinders: 2,
        vehicle_cc: 3500,
        vehicle_drive_type: "4 Wheel",
        vehicle_engine_no: "13323",
      },
    });

    function $reset() {
      underwritingData.value = {
        personalData: {
          account_type: "",
          first_name: "John",
          last_name: "Doe",
          mobile_number: "0242762412",
          email: "sombody@gmail.com",
          id_type: "",
          id_number: "GHA-00000000-0",
          branch: "",
        },
        vehicleData: {
          vehicle_brand: "",
          vehicle_make: "",
          vehicle_model: "",
          registration_number: "GW 147-V",
          vehicle_colour: "",
          chassis_number: "8743923472497429",
          body_type: "",
          body_type_code: "SALOON",
          model_code: "100269",
          customer_code: "ID0134348",
          vehicle_risk: "AMBULANCE",
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
      console.log(buyerData);

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
        console.log(underwriting);
        processing.value = false;
        return data;
      } catch (error) {
        console.log(error);
        processing.value = false;
      }
    };

    const getCarBrands = async () => {
      try {
        processing.value = true;
        const { data } = await api.get(`/vehicle/brands`);
        processing.value = false;
        return data;
      } catch (error) {
        console.log(error);
        processing.value = false;
      }
    };

    const getVehicleMake = async (id, slug, brand) => {
      try {
        processing.value = true;
        const { data } = await api.get(`/vehicle/make/${id}/${brand}`);
        processing.value = false;
        // return data;
        switch (slug) {
          case "enterprise":
            return data;
          // break;
          case "star-assurance":
            return data.data;
          // break;
          case "phoenix":
            return data.vehiclemake;
          // break;
          default:
            return data;
        }
      } catch (error) {
        console.log(error);
        processing.value = false;
      }
    };

    const getVehicleModel = async (id, slug, brand) => {
      try {
        processing.value = true;
        const { data } = await api.get(`/vehicle/model/${id}/${brand}`);
        processing.value = false;
        switch (slug) {
          case "enterprise":
            return data;
          // break;
          case "star-assurance":
            return data.data;
          // break;
          case "phoenix":
            return data.vehModel;
          // break;
          default:
            return data;
        }
        // return data;
      } catch (error) {
        console.log(error);
        processing.value = false;
      }
    };

    const getVehicleBodyType = async (id, slug) => {
      try {
        processing.value = true;
        const { data } = await api.get(`/vehicle/body-types/${id}`);
        processing.value = false;
        switch (slug) {
          case "enterprise":
            return data;
          // break;
          case "star-assurance":
            return data.data;
          // break;
          case "phoenix":
            return data.vehicleBody;
          // break;
          default:
            return data;
        }
        // if (id === 4) {
        //   return data.data;
        // }
        // return data;
      } catch (error) {
        console.log(error);
        processing.value = false;
      }
    };

    const getVehicleColors = async () => {
      try {
        processing.value = true;
        const { data } = await api.get(`/vehicle/colors`);
        processing.value = false;
        return data.vehColor;
      } catch (error) {
        console.log(error);
        processing.value = false;
      }
    };

    const getIdTypes = async () => {
      try {
        processing.value = true;
        const { data } = await api.get(`/policies/id-types`);
        processing.value = false;
        return data.ids;
      } catch (error) {
        console.log(error);
        processing.value = false;
      }
    };

    const getBranches = async () => {
      try {
        processing.value = true;
        const { data } = await api.get(`/institution/branches`);
        processing.value = false;
        return data.data.entries;
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
      getCarBrands,
      getVehicleMake,
      getVehicleModel,
      getVehicleBodyType,
      getVehicleColors,
      getBranches,
      getIdTypes,
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
