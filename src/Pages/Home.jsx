import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Steps from '../Components/Steps/Steps';
import Card from '../Components/Card/Card';
import About from '../Components/About/About';
import Testimonials from '../Components/Testimonials/Testimonials';
import Banner from '../Components/Banner/Banner';
import Faqs from '../Components/Faqs/Faqs';
import Footer from '../Components/Footer/Footer';
const Home = () => {
  return (
  <div>
 
      <Hero />
      <Steps />
      <Card />
      <About />
      <Testimonials />
      <Banner />
      <Faqs />
     
  </div>
  )
}

export default Home
