import axios from "axios";
import { CUSTOMER_BASE_URL, LOGIN, REGISTER } from "../endpoints";


export const setData = (data) => {
    localStorage.setItem("token", data.token)
    localStorage.setItem("email", data.email)
    localStorage.setItem("userType", data.userType)
    localStorage.setItem("name", data.name)

}

export const Register = async (data) => {
    const result = await axios.post(`${CUSTOMER_BASE_URL}${REGISTER}`, data);
    return result.data;
};
export const login = async (data) => {
    const result = await axios.post(`${CUSTOMER_BASE_URL}${LOGIN}`, data);
    return result.data;
};