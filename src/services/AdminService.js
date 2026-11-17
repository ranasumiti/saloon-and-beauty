import axios from "axios";
import {
  ADMIN_BASE_URL,
  ALLSERVICES,
  SERVICES,
  SINGLESERVICE,
  UPDATESERVICE,
  HARDDELETE,
  SOFTDELETE,
  COURSESALL,
  SINGLECOURSE,
  COURSESOFTDELETE,
  
  UPDATECOURSE,
  ADDAPOINTMENT,
  ALLADDAPOINTMENT,
  UPDATEADDAPOINTMENT,
  SOFTDELETEADDAPOINTMENT,
} from "../endpoints";

function getToken() {
  return {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  };
}

export function AddServices(data) {
  return axios.post(ADMIN_BASE_URL + SERVICES, data, getToken());
}

export function AllServices(data = {}) {
  return axios.post(ADMIN_BASE_URL + ALLSERVICES, data, getToken());
}

export function SingleService(data) {
  return axios.post(ADMIN_BASE_URL + SINGLESERVICE, data, getToken());
}

export function UpdateService(data) {
  return axios.post(ADMIN_BASE_URL + UPDATESERVICE, data, getToken());
}

export function HardDeleteService(data) {
  return axios.post(ADMIN_BASE_URL + HARDDELETE, data, getToken());
}

export function SoftDeleteService(data) {
  return axios.post(ADMIN_BASE_URL + SOFTDELETE, data, getToken());
}


export function Courseadd(data) {
  return axios.post(ADMIN_BASE_URL + COURSES, data, getToken());
}


export function AllCourse(data) {
  return axios.post(ADMIN_BASE_URL + COURSESALL, data, getToken());
}
export function Singlecourse(data) {
  return axios.post(ADMIN_BASE_URL + SINGLECOURSE, data, getToken());
}

export function SoftDeletecourse(data) {
  return axios.post(ADMIN_BASE_URL + COURSESOFTDELETE, data, getToken());
}

export function Updatecoure(data) {
  return axios.post(ADMIN_BASE_URL + UPDATECOURSE, data, getToken());
}

// appointments

export function addappointment(data) {
  return axios.post(ADMIN_BASE_URL + ADDAPOINTMENT, data, getToken());
}
export function allappointment(data) {
  return axios.post(ADMIN_BASE_URL + ALLADDAPOINTMENT, data, getToken());
}
export function updateappointment(data) {
  return axios.post(ADMIN_BASE_URL + UPDATEADDAPOINTMENT, data, getToken());
}
export function softdeleteappointment(data) {
  return axios.post(ADMIN_BASE_URL + SOFTDELETEADDAPOINTMENT, data, getToken());
}