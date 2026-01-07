import React from "react";
import { Link } from "react-router-dom";
import card from "../../assets/Card.png";
import card1 from "../../assets/Card1.png";
import card2 from "../../assets/Card2.png";
import card3 from "../../assets/Card3.png";

const Card = () => {
  return (
    <div className="container py-5">
      <h1
        className="fw-bold text-center mb-5"
        style={{
          fontSize: "clamp(2rem, 5vw, 4rem)",
          lineHeight: "1.2",
        }}
      >
        Design Your Dress in 4 Easy Steps
      </h1>

      {/* CARDS ROW */}
      <div className="row g-4 justify-content-center">
        {/* CARD 1 */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="card h-100 text-center">
            <img src={card} className="card-img-top" alt="Choose Fabric" />
            <div className="card-body">
              <Link
                to="/chooseyourfabric"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h5
                  className="fw-bold"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
                >
                  Choose Your Fabric
                </h5>
              </Link>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="card h-100 text-center">
            <img src={card1} className="card-img-top" alt="Select Style" />
            <div className="card-body">
              <Link
                to="/chooseyourstyle"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h5
                  className="fw-bold"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
                >
                  Select Your Style
                </h5>
              </Link>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="card h-100 text-center">
            <img src={card2} className="card-img-top" alt="Design Outfit" />
            <div className="card-body">
              <Link
                to="/designyouroutfit"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h5
                  className="fw-bold"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
                >
                  Design Your Outfit
                </h5>
              </Link>
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="card h-100 text-center">
            <img src={card3} className="card-img-top" alt="Add Measurements" />
            <div className="card-body">
              <Link
                to="/addyourmeasurements"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h5
                  className="fw-bold"
                  style={{ fontSize: "clamp(0.9rem, 2vw, 1.5rem)" }}
                >
                  Add Your Measurements
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;


