import React from "react";
import { Link } from "react-router-dom";
import card from "../assets/tc1.png";
import card1 from "../assets/cc1.png";
import card2 from "../assets/cc2.png";
import card3 from "../assets/tc2.png";
import card4 from "../assets/cc3.png";
import card5 from "../assets/cc4.png";
import card6 from "../assets/cc5.png";
import card7 from "../assets/cc6.png";

const ChooseYourFabric = () => {
  return (
    <section
      style={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "0 40px",
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "70px",
          marginTop: "120px",
        }}
      >
        Choose Your Fabric
      </h1>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(260px, 1fr))", // 👈 FIX
          gap: "30px",
          marginTop: "60px",
        }}
      >
        {[
          { img: card, name: "Lilan Cloth", price: "1000RS", link: "/liloncloth" },
          { img: card1, name: "Cotton Cloth", price: "1200RS", link: "/Cottoncloth" },
          { img: card2, name: "Silk Cloth", price: "1500RS", link: "/silkcloth" },
          { img: card3, name: "Wool Cloth", price: "2500RS", link: "/woolcloth" },
          { img: card4, name: "Organza Cloth", price: "1100RS", link: "/organzacloth" },
          { img: card5, name: "Velvet Cloth", price: "3000RS", link: "/velvetcloth" },
          { img: card6, name: "Satin Cloth", price: "1800RS", link: "/satincloth" },
          { img: card7, name: "Rayon Cloth", price: "1500RS", link: "/rayoncloth" },
        ].map((item, i) => (
          <Link
            key={i}
            to={item.link}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className="card"
              style={{
                maxWidth: "280px",        // 👈 CARD CHOTI
                height: "470px",
                margin: "0 auto",        // center inside grid
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  height: "230px",
                  objectFit: "cover",
                }}
              />

              <div
                className="card-body"
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h5 style={{ fontSize: "32px", fontWeight: "bold" }}>
                  {item.name}
                </h5>

                <p style={{ fontSize: "16px" }}>Price</p>
                <h6 style={{ fontSize: "20px" }}>{item.price}</h6>

                <div style={{ marginTop: "auto", textAlign: "right" }}>
                  <button
                    style={{
                      backgroundColor: "#7303a0ff",
                      padding: "10px 24px",
                      fontSize: "16px",
                      border: "none",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ChooseYourFabric;

