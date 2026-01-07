import React from "react";
import about from "../../assets/about.png";

const About = () => {
  return (
    <div
      className="d-flex flex-column flex-md-row align-items-center justify-content-between px-3 px-md-5"
      style={{
        minHeight: "90vh",
        paddingBottom: "40px",
        marginTop: "120px",
      }}
    >
      {/* Left - Text Section */}
      <div className="mb-4 mb-md-0" style={{ maxWidth: "600px", width: "100%" }}>
        <h1 className="fw-bold display-4 display-md-1">
          Why Choose Us?
        </h1>

        <p className="mt-3" style={{ color: "#444", fontSize: "1.2rem", lineHeight: "1.6" }}>
          At Fabrico, we don’t just stitch clothes — we craft your style. Every outfit is made with your chosen fabric, personalized design, and precise measurements to ensure the perfect fit.
        </p>
      </div>

      {/* Right - Image Section */}
      <div className="text-center text-md-start" style={{ width: "100%", maxWidth: "600px" }}>
        <img
          src={about}
          alt="About"
          className="img-fluid rounded shadow"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default About;


