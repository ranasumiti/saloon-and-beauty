import axios from "axios";
import { ALLSERVICES, BASE_URL, CUSTOMER_BASE_URL, LOGIN, REGISTER, SINGLESERVICE } from "../endpoints";


export const setData = (data) => {
  localStorage.setItem("token", data.token || "");
  localStorage.setItem("email", data.email || "");
  localStorage.setItem("userType", data.userType ?? "");
  localStorage.setItem("name", data.name || "");

  window.dispatchEvent(new Event("authChanged"));
};

export const Register = async (data) => {
    const result = await axios.post(`${CUSTOMER_BASE_URL}${REGISTER}`, data);
    return result.data;
};

export const login = async (data) => {
    const result = await axios.post(`${CUSTOMER_BASE_URL}${LOGIN}`, data);
    return result.data;
};

export function GetAllServices() {
  return axios.post(
    CUSTOMER_BASE_URL +ALLSERVICES ,
    {}
  );
}

export function GetSingleService(data) {
  return axios.post(
     CUSTOMER_BASE_URL+ SINGLESERVICE,
    data
  );
}