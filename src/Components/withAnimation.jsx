// src/Components/withAnimation.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const withAnimation = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      AOS.init({ duration: 1000, once: false });
      AOS.refresh();
    }, []);

    return (
      // Ye div saare page ke content ko wrap karega
      // Aur scroll ke saath animation apply karega
      <div data-aos="fade-up" data-aos-once="false">
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withAnimation;




