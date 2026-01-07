import React from "react";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <div
      className="d-flex flex-column flex-md-row align-items-center justify-content-between px-5"
      style={{ minHeight: "90vh" }}
    >
      {/* Left - Text Section */}
      <div style={{ maxWidth: "600px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "70px", lineHeight: "1.2" }}>
          Tailor-Made <span style={{ color: "#7303a0ff" }}>Style,</span>
          <br />
          Just A Click <span style={{ color: "#7303a0ff" }}>Away</span>
        </h1>

        <p
          className="mt-4"
          style={{ fontSize: "22px", lineHeight: "1.8", color: "#444" }}
        >
          From fabric to fit — design your perfect <br /> outfit in 7 days
        </p>

        {/* Buttons */}
        <div className="d-flex mt-4" style={{ gap: "30px" }}>
          <button
            className="btn px-5 py-3 fw-bold fs-5"
            style={{
              backgroundColor: "#7303a0ff",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Get Started
          </button>

          <button
            className="btn px-5 py-3 fw-bold fs-5"
            style={{
              backgroundColor: "transparent",
              color: "#7303a0ff",
              border: "2px solid #7303a0ff",
              borderRadius: "8px",
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Right - Image Section */}
      <div>
        <img
          src={hero}
          alt="Hero"
          className="img-fluid"
          style={{ maxWidth: "600px", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Hero;

