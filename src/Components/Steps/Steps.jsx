import React from "react";

const Steps = () => {
  return (
    <div className="px-3 px-md-5">
      <h1
        className="fw-bold mb-4"
        style={{
          fontSize: "clamp(2rem, 6vw, 4rem)",
          lineHeight: "1.2",
        }}
      >
        How to Design Your Cloths
      </h1>

      <ul
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          lineHeight: "2",
          listStyle: "none",
          paddingLeft: "0",
          margin: "0",
        }}
      >
        <li>🧵 Choose Your Fabric</li>
        <li>👗 Select Your Style</li>
        <li>🎨 Design Your Outfit</li>
        <li>📏 Add Your Measurements</li>
      </ul>
    </div>
  );
};

export default Steps;


