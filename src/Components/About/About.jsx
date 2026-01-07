import React from "react";
import about from "../../assets/about.png";

const About = () => {
  return (
    <div
      className="d-flex flex-column flex-md-row align-items-center justify-content-between px-5"
      style={{
        minHeight: "90vh",
        paddingBottom: "40px",
        marginTop: "120px", // 👈 TOP GAP added
      }}
    >
      {/* Left - Text Section */}
      <div style={{ maxWidth: "600px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "70px", lineHeight: "1.2" }}>
          Why Choose Us?
        </h1>

        <p
          className="mt-4"
          style={{ fontSize: "32px", lineHeight: "1.8", color: "#444" }}
        >
          At Fabrico, we don’t just stitch clothes — we craft your style.
          Every outfit is made with your chosen fabric, personalized design,
          and precise measurements to ensure the perfect fit.
        </p>
      </div>

      {/* Right - Image Section */}
      <div>
        <img
          src={about}
          alt="About"
          className="img-fluid rounded shadow"
          style={{ maxWidth: "600px", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default About;

