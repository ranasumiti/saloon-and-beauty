import UserFooter from "../../Layout/User/UserFooter";
import UserHeader from "../../Layout/User/UserHeader";
import AboutSection from "./AboutSection";
import BeautyAcademy from "./BeautyAcademy";
import ContactUs from "./Contactus";
import BeautyGallery from "./Contactus";
import CustomerReviews from "./CustomerReviews";
import HeroSection from "./HeroSection";


import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";


export default function Home() {
  return (
    <main className="glow-home">
     
      <HeroSection/>
     
      <AboutSection />
      <WhyChooseUs/>
      <Services/>
       
      <BeautyAcademy />
        <CustomerReviews />
      <ContactUs/>
    
     
     
    </main>
  );
}
