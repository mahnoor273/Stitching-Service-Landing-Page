import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children, delay = 0, yOffsetDesktop = 80, yOffsetMobile = 50 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Detect small screens
  const isMobile = window.innerWidth < 768;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: isMobile ? yOffsetMobile : yOffsetDesktop }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;

