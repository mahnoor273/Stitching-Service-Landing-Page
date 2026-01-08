import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Steps from "../Components/Steps/Steps";
import Card from "../Components/Card/Card";
import About from "../Components/About/About";
import Testimonials from "../Components/Testimonials/Testimonials";
import Banner from "../Components/Banner/Banner";
import Faqs from "../Components/Faqs/Faqs";
import Footer from "../Components/Footer/Footer";
import FadeInSection from "../Components/FadeInSection";

const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
     

      {/* Hero Section */}
      <FadeInSection delay={0.2}>
        <div className="px-3 px-md-5 mt-5">
          <Hero />
        </div>
      </FadeInSection>

      {/* Steps Section */}
      <FadeInSection delay={0.4}>
        <div className="px-3 px-md-5 mt-5">
          <Steps />
        </div>
      </FadeInSection>

      {/* Cards Section */}
      <FadeInSection delay={0.6}>
        <div className="px-3 px-md-5 mt-5">
          <Card />
        </div>
      </FadeInSection>

      {/* About Section */}
      <FadeInSection delay={0.8}>
        <div className="px-3 px-md-5 mt-5">
          <About />
        </div>
      </FadeInSection>

      {/* Testimonials Section */}
      <FadeInSection delay={1}>
        <div className="px-3 px-md-5 mt-5">
          <Testimonials />
        </div>
      </FadeInSection>

      {/* Banner Section */}
      <FadeInSection delay={1.2}>
        <div className="px-3 px-md-5 mt-5">
          <Banner />
        </div>
      </FadeInSection>

      {/* FAQs Section */}
      <FadeInSection delay={1.4}>
        <div className="px-3 px-md-5 mt-5 mb-5">
          <Faqs />
        </div>
      </FadeInSection>

    
    </div>
  );
};

export default Home;


