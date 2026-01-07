// src/Components/withAnimation.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const withAnimation = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      // Check screen size for responsive animation offset
      const isMobile = window.innerWidth < 768;

      AOS.init({
        duration: 1000,        // animation duration in ms
        once: false,           // repeat animation when scrolling
        offset: isMobile ? 50 : 120, // smaller offset for mobile
        easing: "ease-out-cubic",
      });

      AOS.refresh();
    }, []);

    return (
      <div
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom" // triggers animation naturally on all screens
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withAnimation;





