import React from 'react';
import card1 from "../assets/Cotton.png";
import card2 from "../assets/c1.png";
import card3 from "../assets/c2.png";
import card4 from "../assets/c3.png";
import card5 from "../assets/c4.png";
import card6 from "../assets/c5.png";
import card7 from "../assets/c6.png";
import card8 from "../assets/cc7.png";
import card9 from "../assets/cc8.png";
import card10 from "../assets/cc9.png";
import card11 from "../assets/cc10.png";
import card12 from "../assets/cc11.png";

const cards = [
  card1, card2, card3, card4,
  card5, card6, card7, card8,
  card9, card10, card11, card12
];

const Cottoncloth = () => {
  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 40px" }}>
      
      {/* Heading */}
      <div style={{ marginTop: "100px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "70px", lineHeight: 1.2 }}>
          Cotton Cloth
        </h1>
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
          gap: "40px", // horizontal + vertical gap
          marginTop: "50px",
        }}
      >
        {cards.map((img, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={img}
              alt={`Cotton Cloth ${index + 1}`}
              style={{ height: "250px", objectFit: "cover", width: "100%" }}
            />
            <div style={{ padding: "15px", textAlign: "center" }}>
              <h5 style={{ fontSize: "28px", fontWeight: "bold", margin: "10px 0" }}>
                Cotton Cloth
              </h5>
              <p style={{ fontSize: "20px", margin: "5px 0" }}>Price</p>
              <h6 style={{ fontSize: "22px", margin: 0 }}>1200RS</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cottoncloth;

