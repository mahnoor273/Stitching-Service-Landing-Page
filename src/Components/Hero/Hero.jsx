import React from "react";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <div
      className="d-flex flex-column flex-md-row align-items-center justify-content-between px-3 px-md-5"
      style={{ minHeight: "90vh" }}
    >
      {/* Left - Text Section */}
      <div className="mb-4 mb-md-0" style={{ maxWidth: "600px", width: "100%" }}>
        <h1
          className="fw-bold"
          style={{
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            lineHeight: "1.2",
          }}
        >
          Tailor-Made <span style={{ color: "#7303a0ff" }}>Style,</span>
          <br />
          Just A Click <span style={{ color: "#7303a0ff" }}>Away</span>
        </h1>

        <p
          className="mt-3"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            lineHeight: "1.8",
            color: "#444",
          }}
        >
          From fabric to fit — design your perfect <br /> outfit in 7 days
        </p>

        {/* Buttons */}
        <div className="d-flex flex-column flex-sm-row mt-4 gap-3">
          <button
            className="btn fw-bold"
            style={{
              backgroundColor: "#7303a0ff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "12px 30px",
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
            }}
          >
            Get Started
          </button>

          <button
            className="btn fw-bold"
            style={{
              backgroundColor: "transparent",
              color: "#7303a0ff",
              border: "2px solid #7303a0ff",
              borderRadius: "8px",
              padding: "12px 30px",
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Right - Image Section */}
      <div className="text-center text-md-end" style={{ width: "100%", maxWidth: "600px" }}>
        <img
          src={hero}
          alt="Hero"
          className="img-fluid"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Hero;


