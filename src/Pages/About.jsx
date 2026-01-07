import React from "react";
import { motion } from "framer-motion";

import hero from "../assets/Abouthero.png";
import features from "../assets/aboutfeature.png";
import about from "../assets/about.png";
import banner from "../assets/aboutbanner.png";

import "./About.css";

const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <>
      {/* SECTION 1 */}
      <section className="about-section">
        <div className="about-container">
          <motion.div className="about-text" {...{ variants: fadeInLeft, initial: "hidden", whileInView: "visible", viewport: { once: true } }}>
            <h1>
              Your <span className="highlight">Style,</span>
              <br />
              Our <span className="highlight">Craft</span>
            </h1>

            <p>
              At Fabrico, we blend craftsmanship with comfort, creating outfits
              that are made to measure and made to impress.
            </p>

            <div className="btn-wrapper">
              <button className="btn-main">Start Designing</button>
            </div>
          </motion.div>

          <motion.div className="about-img" {...{ variants: fadeInRight, initial: "hidden", whileInView: "visible", viewport: { once: true } }}>
            <img src={hero} alt="About" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="about-section">
        <div className="about-container">
          <motion.div className="about-text" {...{ variants: fadeInLeft, initial: "hidden", whileInView: "visible", viewport: { once: true } }}>
            <h1>Features</h1>
            <p className="features-text">
              ✂️ Tailored Just for You <br />
              🎨 Design Your Own Look <br />
              🧵 Premium Quality, Every Stitch
            </p>
          </motion.div>

          <motion.div className="about-img" {...{ variants: fadeInRight, initial: "hidden", whileInView: "visible", viewport: { once: true } }}>
            <img src={features} alt="Features" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="about-section">
        <div className="about-container">
          <motion.div className="about-text" {...{ variants: fadeInLeft, initial: "hidden", whileInView: "visible", viewport: { once: true } }}>
            <h1>Why Choose Us?</h1>
            <p className="why-text">
              At Fabrico, we don’t just stitch clothes <br />
              we craft your style with personalized design
              and precise measurements for the perfect fit.
            </p>
          </motion.div>

          <motion.div className="about-img" {...{ variants: fadeInRight, initial: "hidden", whileInView: "visible", viewport: { once: true } }}>
            <img src={about} alt="Why Us" />
          </motion.div>
        </div>
      </section>

      {/* BANNER */}
      <section className="banner-section">
        <img src={banner} alt="Banner" className="banner-img" />
        <div className="banner-overlay"></div>

        <div className="banner-content">
          <h1>Your Design, Our Stitching <br /> Delivered On Time</h1>
          <p>Trusted by hundreds for custom stitched wear</p>
          <button className="banner-btn">Design Now</button>
        </div>
      </section>
    </>
  );
};

export default About;



