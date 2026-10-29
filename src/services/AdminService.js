import axios from "axios";
import { ADDCAT, ADMINBASEURL } from "../../endpoint";
function getToken(){
const token=localStorage.getItem("token")
return{
  headers:{
    Authorization:token
  }
  
}
}
export  function Addcateogry (data){
return axios.post(ADMINBASEURL+ADDCAT,data,getToken())}