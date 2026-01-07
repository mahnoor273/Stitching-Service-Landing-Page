import React from 'react'
import icons from '../../assets/icons.png'
const Footer = () => {
  return (
 <div style={{ display: "flex", justifyContent: "space-between", padding: "50px" , marginTop: "60pxn"}}>
  {/* QUICK LINKS SECTION */}
  <div style={{ listStyle: "none" }}>
    <ul style={{ marginLeft: "60px" }}>
      <h1>Quick Links</h1>
    </ul>
    <div style={{ fontSize: "30px", lineHeight: "2", marginLeft: "90px" }}>
      <li>About Us</li>
      <li>Features</li>
      <li>Testimonials</li>
      <li>FAQS</li>
      <li>Contact Us</li>
    </div>
    <div style={{ marginLeft: "90px", marginTop: "70px" }}>
      <p>Copyright © 2025 Fabrico. All rights reserved.</p>
    </div>
  </div>

  {/* REVIEW FORM SECTION */}
  <div style={{ marginRight: "100px" }}>
    <div>
      <h1>Submit Your Reviews/Complain</h1>
    </div>

    <form
      action=""
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "20px",
        width: "60%",
        color: "#ccc",
        fontWeight: "bold",
      }}
    >
      <input
        type="text"
        placeholder="Name"
        style={{
          padding: "15px",
          fontSize: "18px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="email"
        placeholder="Email"
        style={{
          padding: "15px",
          fontSize: "18px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <textarea
        placeholder="Reviews/Complain"
        rows={5}
        style={{
          padding: "15px",
          fontSize: "18px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          resize: "vertical",
        }}
      />
    </form>

    {/* ICONS + BUTTON */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-start", // icons ke top ke sath align
        gap: "20px", // icon aur button ke beech ka gap
        marginTop: "20px",
      }}
    >
      {/* Icons */}
      <img src={icons} alt="" style={{ height: "43px" }} />

      {/* Button */}
      <button
        style={{
          backgroundColor: "#7303a0ff",
          color: "black",
          padding: "12px 30px",
          fontSize: "18px",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "all 0.3s ease",
          marginTop: "60px", // thoda neeche shift
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "black";
          e.target.style.color = "#7303a0ff";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "purple";
          e.target.style.color = "#7303a0ff";
        }}
      >
        Submit
      </button>
    </div>
  </div>
</div>


  )
}

export default Footer
