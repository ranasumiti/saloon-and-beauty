
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Components/User/Home";

import UserLayout from "./Layout/User/UserLayout";

import BeautyAcademy from "./Components/User/BeautyAcademy";




import Services from "./Components/User/Services";
import ContactUs from "./Components/User/Contactus";
import BookAppointment from "./Components/User/BookAppointment";
import AboutSection from "./Components/User/AboutSection";
import CustomerReviews from "./Components/User/CustomerReviews";
import WhyChooseUs from "./Components/User/WhyChooseUs";
import ServiceDetails from "./Components/User/ServiceDetails";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import AdminLayout from "./Layout/Admin/AdminLayout";
import Dashboard from "./Components/Admin/Dashboard";
import ManageServices from "./Components/Admin/ManageServices";
import ManageCourses from "./Components/Admin/ManageCourses";
import ManageUsers from "./Components/Admin/ManageUsers";
import ManageAppointments from "./Components/Admin/ManageAppointments";
import ManagePayments from "./Components/Admin/ManagePayments";
import ManageBeauticians from "./Components/Admin/ManageBeauticians";
import ManageStudents from "./Components/Admin/ManageStudents";
import AddService from "./Components/Admin/Service/AddService";
import AddCourse from "./Components/Admin/Service/AddCourse";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutSection/>} />
           <Route path="/beauty" element={<BeautyAcademy/>} />
         
           <Route path="/chooseus" element ={<WhyChooseUs/>}/>
            <Route path="/review" element ={<CustomerReviews/>}/>
             <Route path="/contact" element ={<ContactUs/>}/>
              <Route path="/services" element ={<Services/>}/>
              <Route path="/bookappointment" element={<BookAppointment/>}/>
              <Route path="servicedetail/:id" element={<ServiceDetails/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
        </Route>

        <Route path="/admin" element={<AdminLayout/>}>
  <Route index element={<Dashboard/>} />
  <Route path="services"element={<ManageServices/>}/>
    <Route path="courses"element={<ManageCourses/>}/>import ManageUsers from "./admin/ManageUsers";

<Route path="users" element={<ManageUsers />} />
<Route path="appointments" element={<ManageAppointments />} />
<Route path="payments" element={<ManagePayments />} />
<Route path="beauticians" element={<ManageBeauticians />} />

<Route path="students" element={<ManageStudents />} />

<Route path="Add" element={<AddService />} />
<Route path="addcourse" element={<AddCourse />} />
</Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
}
