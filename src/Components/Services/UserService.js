import axios from "axios";
import { BASEURL, LOGIN, REGISTER } from "../../endpoint";


export function  login(data){
  return axios.post(BASEURL+LOGIN,data)
}
export function Register(data){
  return axios.post(BASEURL+REGISTER,data)
}