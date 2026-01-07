import React from 'react'
import banner from '../../assets/banner.png'
const Banner = () => {
  return (
    <div
  style={{
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  }}
>
  {/* Background Image */}
  <img
    src={banner}
    alt="Background"
    style={{
      position: "absolute",
      top: "12%",
      left: "8%", // 👈 image ko thoda right shift kar diya
      width: "80%",
      height: "70%",
      objectFit: "cover",
      zIndex: 1,
    }}
  />

  {/* Centered Text and Button */}
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)", // 👈 full center alignment
      zIndex: 2,
      color: "white",
      textAlign: "center",
    }}
  >
    <h1 style={{ fontSize: "60px", fontWeight: "bold", lineHeight: "1.2",  }}>
      Your Style, Your Fit,
      <br /> Your Way.
    </h1>
    <p style={{ fontSize: "20px", margin: "40px 0" }}>
      Design your dream outfit today — with Fabrico,
      <br />
      it's stitched to perfection
    </p>
 <button
  style={{
    backgroundColor: "white",
    color: "black",
    padding: "12px 30px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "60px", // 👈 Ye line button ko p tag se neeche push karti hai
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "white";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
  }}
>
  Start Now
</button>

  </div>
</div>

  )
}

export default Banner
