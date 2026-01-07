import React from "react";

import card0 from "../assets/do.png";
import card1 from "../assets/do1.png";
import card2 from "../assets/do2.png";
import card3 from "../assets/do3.png";
import card4 from "../assets/do4.png";
import card5 from "../assets/do5.png";
import card6 from "../assets/tc5.png";
import card7 from "../assets/do6.png";

import card8 from "../assets/do7.png";
import card9 from "../assets/do8.png";
import card10 from "../assets/do9.png";
import card11 from "../assets/do10.png";
import card12 from "../assets/tc6.png";
import card13 from "../assets/do11.png";
import card14 from "../assets/do12.png";
import card15 from "../assets/do13.png";

import card16 from "../assets/do14.png";
import card17 from "../assets/d20.png";
import card18 from "../assets/do15.png";
import card19 from "../assets/do116.png";
import card20 from "../assets/do17.png";
import card21 from "../assets/do18.png";
import card22 from "../assets/tc7.png";
import card23 from "../assets/do19.png";

const cardStyle = {
  height: "260px",
  borderRadius: "14px",
  overflow: "hidden",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(240px, 1fr))",
  gap: "40px",
  marginTop: "40px",
};

const Section = ({ title, images }) => (
  <>
    <h2 style={{ marginTop: "140px", fontWeight: "bold" }}>{title}</h2>
    <div style={gridStyle}>
      {images.map((img, i) => (
        <div key={i} style={cardStyle}>
          <img
            src={img}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  </>
);

const Designyouroutfit = () => {
  return (
    <section
      style={{
        maxWidth: "1440px",   // 🔥 HERO STYLE CONTAINER
        margin: "0 auto",
        padding: "0 40px",
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "70px",
          marginTop: "100px",
        }}
      >
        Design Your Outfit
      </h1>

      {/* NECK */}
      <Section
        title="Choose Your Neck Design"
        images={[card0, card1, card2, card3, card4, card5, card6, card7]}
      />

      {/* SLEEVES */}
      <Section
        title="Choose Your Sleeves Design"
        images={[card8, card9, card10, card11, card12, card13, card14, card15]}
      />

      {/* BOTTOM */}
      <Section
        title="Choose Your Bottom Edge Design"
        images={[card16, card17, card18, card19, card20, card21, card22, card23]}
      />

      {/* NEXT BUTTON */}
      <div style={{ display: "flex", justifyContent: "flex-end", margin: "120px 0" }}>
        <button
          style={{
            backgroundColor: "#7303a0ff",
            padding: "16px 60px",
            fontSize: "20px",
            fontWeight: "bold",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Designyouroutfit;
