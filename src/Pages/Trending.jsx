import React from "react";
import card from "../assets/tc1.png";
import card1 from "../assets/tc2.png";
import card2 from "../assets/tc3.png";
import card3 from "../assets/tc4.png";
import card4 from "../assets/tc9.png";
import card5 from "../assets/tc10.png";
import card6 from "../assets/tc5.png";
import card7 from "../assets/tc6.png";
import card8 from "../assets/tc7.png";
import hero from "../assets/tc8.png";

const container = {
  padding: "0 24px",
  maxWidth: "1440px",
  margin: "0 auto",
};

const gridAuto = (min = "260px") => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, minmax(${min}, 1fr))`,
  gap: "40px",
  marginTop: "50px",
});

const heading = {
  fontWeight: "bold",
  fontSize: "clamp(36px, 6vw, 70px)",
  lineHeight: "1.2",
  marginTop: "100px",
};

const Trending = () => {
  return (
    <div style={container}>

      {/* Trending Fabrics */}
      <h1 style={heading}>Trending Fabrics</h1>

      <div style={gridAuto("280px")}>
        {[{ img: card, name: "Lilan Cloth", price: "1000RS" },
          { img: card1, name: "Wool Cloth", price: "2500RS" }].map((c, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column" }}>
            <img src={c.img} alt={c.name} style={{ height: "250px", objectFit: "cover", borderRadius: "10px" }} />
            <div style={{ padding: "15px" }}>
              <h5 style={{ fontSize: "22px", fontWeight: "bold" }}>{c.name}</h5>
              <p>Price</p>
              <h6>{c.price}</h6>
            </div>
          </div>
        ))}
      </div>

      {/* Trending Colors */}
      <h1 style={heading}>Trending Colors</h1>

      <div style={gridAuto("280px")}>
        {[{ img: card2, name: "Wool Cloth", price: "2500RS" },
          { img: card3, name: "Lilan Cloth", price: "1000RS" }].map((c, i) => (
          <div key={i}>
            <img src={c.img} style={{ height: "250px", width: "100%", objectFit: "cover", borderRadius: "10px" }} />
            <div style={{ padding: "15px" }}>
              <h5 style={{ fontSize: "22px", fontWeight: "bold" }}>{c.name}</h5>
              <h6>{c.price}</h6>
            </div>
          </div>
        ))}
      </div>

      {/* Trending Styles */}
      <h1 style={heading}>Trending Styles</h1>

      <div style={gridAuto("220px")}>
        {[{ img: card4, name: "Long Frock", price: "900RS" },
          { img: card5, name: "Short Kameez", price: "900RS" }].map((c, i) => (
          <div key={i} style={{ position: "relative", height: "280px", borderRadius: "10px", overflow: "hidden" }}>
            <img src={c.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white"
            }}>
              <h5>{c.name}</h5>
              <p>{c.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Trending Design */}
      <h1 style={heading}>Trending Design</h1>

      <div style={gridAuto("220px")}>
        {[card6, card7, card8].map((img, i) => (
          <img key={i} src={img} style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "10px" }} />
        ))}
      </div>

      {/* Hero Section */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "40px",
        marginTop: "100px",
      }}>
        <div style={{ flex: 1, minWidth: "280px" }}>
          <h1 style={{ fontSize: "clamp(32px, 6vw, 70px)", fontWeight: "bold" }}>
            <span style={{ color: "#7303a0ff" }}>Loved </span> What You Saw?
          </h1>
          <p style={{ fontSize: "clamp(18px, 3vw, 32px)" }}>
            Let your next outfit set the trend
          </p>
        </div>

        <img src={hero} style={{ flex: 1, maxWidth: "100%", borderRadius: "10px" }} />
      </div>

    </div>
  );
};

export default Trending;


