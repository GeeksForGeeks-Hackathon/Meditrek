import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/FooterComp/FooterComp";
import Services from "../../components/Services/Services";
const Home = () => {
  return (
    <div>
      <section id="">
      <HeroSection />
      </section>
      <section id="aboutus"> 
      <AboutUs />
      </section>
      <section id="services">
        <Services/>
      </section>
      <section id="contactus">
      <Footer/>
      </section>
    </div>
  );
};

export default Home;
