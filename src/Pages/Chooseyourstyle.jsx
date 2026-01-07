import React from "react";
import card from "../assets/ts1.png";
import card1 from "../assets/tc9.png";
import card2 from "../assets/ts2.png";
import card3 from "../assets/ts3.png";
import card4 from "../assets/ts4.png";
import card5 from "../assets/tc10.png";
import card6 from "../assets/ts5.png";
import card7 from "../assets/ts6.png";

const Chooseyourstyle = () => {
  const styles = [
    card, card1, card2, card3,
    card4, card5, card6, card7
  ];

  return (
    <section
      style={{
        maxWidth: "1440px",   // 👈 HERO JESA CONTAINER
        margin: "0 auto",
        padding: "0 40px",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "70px",
          marginTop: "120px",
        }}
      >
        Choose Your Style
      </h1>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(240px, 1fr))", // 👈 FIX
          gap: "40px",
          marginTop: "70px",
        }}
      >
        {styles.map((img, index) => (
          <div
            key={index}
            className="card"
            style={{
              position: "relative",
              height: "260px",
              borderRadius: "14px",
              overflow: "hidden",
              margin: "0 auto", // center card
            }}
          >
            <img
              src={img}
              alt="style"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chooseyourstyle;

