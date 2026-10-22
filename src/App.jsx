
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutSection/>} />
           <Route path="beauty" element={<BeautyAcademy/>} />
         
           <Route path="/chooseus" element ={<WhyChooseUs/>}/>
            <Route path="/review" element ={<CustomerReviews/>}/>
             <Route path="/contact" element ={<ContactUs/>}/>
              <Route path="/services" element ={<Services/>}/>
              <Route path="/bokappointment" element={<BookAppointment/>}/>
              <Route path="servicedetail/:id" element={<ServiceDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
