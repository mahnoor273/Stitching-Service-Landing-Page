import React from "react";
import { Link } from "react-router-dom";
import card from "../../assets/Card.png";
import card1 from "../../assets/Card1.png";
import card2 from "../../assets/Card2.png";
import card3 from "../../assets/Card3.png";

const Card = () => {
  return (
    <div style={{ padding: "0 3rem" }}>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "70px",
          lineHeight: "1.2",
          marginTop: "100px",
          marginBottom: "70px",
        }}
      >
        Design Your Dress in 4 Easy Steps
      </h1>

      {/* CARDS ROW */}
      <div
        className="d-flex justify-content-between"
        style={{ gap: "30px" }}
      >
        {/* CARD 1 */}
        <div className="card" style={{ width: "23%" }}>
          <img src={card} className="card-img-top" alt="" />
          <div className="card-body text-center">
            <Link to="/chooseyourfabric" style={{ textDecoration: "none", color: "inherit" }}>
              <h5 className="fw-bold" style={{ fontSize: "32px" }}>
                Choose Your Fabric
              </h5>
            </Link>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="card" style={{ width: "23%" }}>
          <img src={card1} className="card-img-top" alt="" />
          <div className="card-body text-center">
            <Link to="/chooseyourstyle" style={{ textDecoration: "none", color: "inherit" }}>
              <h5 className="fw-bold" style={{ fontSize: "32px" }}>
                Select Your Style
              </h5>
            </Link>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="card" style={{ width: "23%" }}>
          <img src={card2} className="card-img-top" alt="" />
          <div className="card-body text-center">
            <Link to="/designyouroutfit" style={{ textDecoration: "none", color: "inherit" }}>
              <h5 className="fw-bold" style={{ fontSize: "32px" }}>
                Design Your Outfit
              </h5>
            </Link>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="card" style={{ width: "23%" }}>
          <img src={card3} className="card-img-top" alt="" />
          <div className="card-body text-center">
            <Link to="/addyourmeasurements" style={{ textDecoration: "none", color: "inherit" }}>
              <h5 className="fw-bold" style={{ fontSize: "28px" }}>
                Add Your Measurements
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

