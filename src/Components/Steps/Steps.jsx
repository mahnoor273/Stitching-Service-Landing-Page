import React from "react";

const Steps = () => {
  return (
    <div
      style={{
        padding: "0 3rem", // 👈 same as px-5 (hero section)
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "70px",
          lineHeight: "1.2",
          marginBottom: "30px",
        }}
      >
        How to Design Your Cloths
      </h1>

      <ul
        style={{
          fontSize: "50px",
          lineHeight: "2",
          listStyle: "none",
          paddingLeft: "0px",
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

