import { api } from "../api/api";

export const getCarBrands = async () => {
  try {
    const { data } = await api.get(`/vehicle/brands`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getVehicleMake = async (id, slug, brand) => {
  try {
    const { data } = await api.get(`/vehicle/make/${id}/${brand}`);
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
  }
};

export const getVehicleModel = async (id, slug, brand) => {
  try {
    const { data } = await api.get(`/vehicle/model/${id}/${brand}`);
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
  }
};

export const getVehicleBodyType = async (id, slug) => {
  try {
    const { data } = await api.get(`/vehicle/body-types/${id}`);
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
  }
};

export const getVehicleColors = async () => {
  try {
    const { data } = await api.get(`/vehicle/colors`);
    return data.vehColor;
  } catch (error) {
    console.log(error);
  }
};

export const getIdTypes = async () => {
  try {
    const { data } = await api.get(`/policies/id-types`);
    return data.ids;
  } catch (error) {
    console.log(error);
  }
};

export const getBranches = async () => {
  try {
    const { data } = await api.get(`/institution/branches`);
    return data.data.entries;
  } catch (error) {
    console.log(error);
  }
};
