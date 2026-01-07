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
import FadeInSection from "../Components/FadeInSection/FadeInSection"; // responsive fade

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <FadeInSection delay={0.2}>
        <Hero />
      </FadeInSection>

      {/* Steps Section */}
      <FadeInSection delay={0.4}>
        <div style={{ padding: "0 1.5rem", marginTop: "80px" }}>
          <Steps />
        </div>
      </FadeInSection>

      {/* Cards Section */}
      <FadeInSection delay={0.6}>
        <div style={{ padding: "0 1.5rem", marginTop: "80px" }}>
          <Card />
        </div>
      </FadeInSection>

      {/* About Section */}
      <FadeInSection delay={0.8}>
        <div style={{ padding: "0 1.5rem", marginTop: "80px" }}>
          <About />
        </div>
      </FadeInSection>

      {/* Testimonials Section */}
      <FadeInSection delay={1}>
        <div style={{ padding: "0 1.5rem", marginTop: "80px" }}>
          <Testimonials />
        </div>
      </FadeInSection>

      {/* Banner Section */}
      <FadeInSection delay={1.2}>
        <div style={{ padding: "0 1.5rem", marginTop: "80px" }}>
          <Banner />
        </div>
      </FadeInSection>

      {/* FAQs Section */}
      <FadeInSection delay={1.4}>
        <div style={{ padding: "0 1.5rem", marginTop: "80px" }}>
          <Faqs />
        </div>
      </FadeInSection>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

