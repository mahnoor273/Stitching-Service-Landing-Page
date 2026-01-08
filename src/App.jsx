import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import withAnimation from './Components/withAnimation';

import Navbar from './Components/Navbar/Navbar';
import Scroll from './Components/Scroll';
import Footer from './Components/Footer/Footer';
import './index.css'
// Pages import
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Trending from './Pages/Trending';
import ChooseYourFabric from './Pages/Chooseyourfabric';
import ChooseYourStyle from './Pages/Chooseyourstyle';
import Designyouroutfit from './Pages/Designyouroutfit';
import Addyourmeasurements from './Pages/Addyourmeasurements';
import Contactdetails from './Pages/Contactdetails';
import Liloncloth from './Pages/Liloncloth';
import Cottoncloth from './Pages/Cottoncloth';
import Organzacloth from './Pages/Organzacloth';
import Velvetcloth from './Pages/Velvetcloth';
import Silkcloth from './Pages/Silkcloth';
import Woolcloth from './Pages/Woolcloth';
import Rayoncloth from './Pages/Rayoncloth';
import Satincloth from './Pages/Satincloth';

// Animated components
const AnimatedHome = withAnimation(Home);
const AnimatedAbout = withAnimation(About);
const AnimatedContact = withAnimation(Contact);
const AnimatedTrending = withAnimation(Trending);
const AnimatedChooseYourFabric = withAnimation(ChooseYourFabric);
const AnimatedChooseYourStyle = withAnimation(ChooseYourStyle);
const AnimatedDesignyouroutfit = withAnimation(Designyouroutfit);
const AnimatedAddyourmeasurements = withAnimation(Addyourmeasurements);
const AnimatedContactdetails = withAnimation(Contactdetails);
const AnimatedLiloncloth = withAnimation(Liloncloth);
const AnimatedCottoncloth = withAnimation(Cottoncloth);
const AnimatedOrganzacloth = withAnimation(Organzacloth);
const AnimatedVelvetcloth = withAnimation(Velvetcloth);
const AnimatedSilkcloth = withAnimation(Silkcloth);
const AnimatedWoolcloth = withAnimation(Woolcloth);
const AnimatedRayoncloth = withAnimation(Rayoncloth);
const AnimatedSatincloth = withAnimation(Satincloth);

function App() {
  const location = useLocation();

  // Initialize AOS only once
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  // Scroll to top & refresh AOS on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [location]);

  return (
    <>
      <Navbar />
      <Scroll />
      <Routes>
        <Route path="/" element={<AnimatedHome />} />
        <Route path="/about" element={<FadeInSection delay={0.5}><AnimatedAbout /></FadeInSection>} />
        <Route path="/contact" element={<AnimatedContact />} />
        <Route path="/trending" element={<AnimatedTrending />} />
        <Route path="/chooseyourfabric" element={<AnimatedChooseYourFabric />} />
        <Route path="/chooseyourstyle" element={<AnimatedChooseYourStyle />} />
        <Route path="/Designyouroutfit" element={<AnimatedDesignyouroutfit />} />
        <Route path="/Addyourmeasurements" element={<AnimatedAddyourmeasurements />} />
        <Route path="/Contactdetails" element={<AnimatedContactdetails />} />
        <Route path="/Liloncloth" element={<AnimatedLiloncloth />} />
        <Route path="/Cottoncloth" element={<AnimatedCottoncloth />} />
        <Route path="/Organzacloth" element={<AnimatedOrganzacloth />} />
        <Route path="/Velvetcloth" element={<AnimatedVelvetcloth />} />
        <Route path="/Silkcloth" element={<AnimatedSilkcloth />} />
        <Route path="/Satincloth" element={<AnimatedSatincloth />} />
        <Route path="/Rayoncloth" element={<AnimatedRayoncloth />} />
        <Route path="/Woolcloth" element={<AnimatedWoolcloth />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


