
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// User Layout
import UserLayout from "./Layout/User/UserLayout";


// User Components
import Home from "./Components/User/Home";
import BeautyAcademy from "./Components/User/BeautyAcademy";
import Services from "./Components/User/Services";
import ContactUs from "./Components/User/Contactus";
import BookAppointment from "./Components/User/BookAppointment";
import AboutSection from "./Components/User/AboutSection";
import CustomerReviews from "./Components/User/CustomerReviews";
import WhyChooseUs from "./Components/User/WhyChooseUs";
import ServiceDetails from "./Components/User/ServiceDetails";

// Auth Components
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";



// Admin Components
import AdminLayout from "./Layout/Admin/AdminLayout";
import Dashboard from "./Components/Admin/Dashboard";
import ManageServices from "./Components/Admin/ManageServices";
import ManageCourses from "./Components/Admin/ManageCourses";
import ManageUsers from "./Components/Admin/ManageUsers";
import ManageAppointments from "./Components/Admin/ManageAppointments";
import ManagePayments from "./Components/Admin/ManagePayments";
import ManageBeauticians from "./Components/Admin/ManageBeauticians";
import ManageStudents from "./Components/Admin/ManageStudents";
import ManageEnquiries from "./Components/Admin/ManageEnquiries";

import AddService from "./Components/Admin/Service/AddService";
import AddCourse from "./Components/Admin/Service/AddCourse";
import EditService from "./Components/Admin/Service/EditService";
import EditCourse from "./Components/Admin/Service/EditCourse";
import EditStudent from "./Components/Admin/Service/EditStudent";
import EditBeautician from "./Components/Admin/Service/EditBeautician";
import AddBeautician from "./Components/Admin/Service/AddBeautician";
import AddStudent from "./Components/Admin/Service/AddStudent";


// Beautician Components

import BeauticianLayout from "./Layout/Beauticians/BeauticiansLayout";
import MyAppointments from "./Components/Beauticians/MyAppointments";
import MySchedule from "./Components/Beauticians/MySchedule";
import MyClients from "./Components/Beauticians/MyClients";
import MyEarnings from "./Components/Beauticians/MyEarnings";
import MyProfile from "./Components/Beauticians/MyProfile";
import BeauticianDashboard from "./Components/Beauticians/BeauticianDashboard";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* User Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutSection />} />
          <Route path="beauty" element={<BeautyAcademy />} />
          <Route path="chooseus" element={<WhyChooseUs />} />
          <Route path="review" element={<CustomerReviews />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="services" element={<Services />} />
          <Route path="bookappointment" element={<BookAppointment />} />
          <Route path="servicedetail/:id" element={<ServiceDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>


        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="services" element={<ManageServices />} />
          <Route path="courses" element={<ManageCourses />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="appointments" element={<ManageAppointments />} />
          <Route path="payments" element={<ManagePayments />} />
          <Route path="beauticians" element={<ManageBeauticians />} />
          <Route path="students" element={<ManageStudents />} />

          <Route path="add" element={<AddService />} />
          <Route path="addcourse" element={<AddCourse />} />
          <Route path="editservice/:id" element={<EditService />} />
          <Route path="editcourse/:id" element={<EditCourse />} />
          <Route path="editstudent/:id" element={<EditStudent />} />
          <Route path="editbeautician/:id" element={<EditBeautician />} />

          <Route path="addbeautician" element={<AddBeautician />} />
          <Route path="addstudent" element={<AddStudent />} />
          <Route path="enquiries" element={<ManageEnquiries />} />
        </Route>


        {/* Beautician Routes */}
        <Route path="/beautician" element={<BeauticianLayout />}>
          <Route index element ={<BeauticianDashboard />} />
          <Route path="appointments" element={<MyAppointments />} />
          <Route path="schedule" element={<MySchedule />} />
          <Route path="clients" element={<MyClients />} />
          <Route path="earnings" element={<MyEarnings />} />
          <Route path="profile" element={<MyProfile />} />
        </Route>

      </Routes>

      <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>
  );
}
