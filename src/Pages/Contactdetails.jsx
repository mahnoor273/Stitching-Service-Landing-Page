import React from 'react'

const Contactdetails = () => {
  return (
    <div style={{ padding: "50px 150px" }}>
      <div style={{ maxWidth: "600px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>Give Your Contact Details</h1>
        <form
          action=""
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "70px",
            color: "#ccc",
            fontWeight: "bold"
          }}
        >
          <h1 style={{ fontWeight: "bold", fontSize: "40px", color: "black" }}>Detail Form</h1>

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
          <input
            type="tel"
            placeholder="Phone Number"
            style={{
              padding: "15px",
              fontSize: "18px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="text"
            placeholder="Home Address"
            style={{
              padding: "15px",
              fontSize: "18px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </form>

        {/* Right-aligned button with consistent gap */}
        <div
          className="d-flex"
          style={{
            gap: "40px",
            width: "15%",
            height: "100px",
            paddingTop: "50px",
            marginLeft: "auto", // ye ensure karta hai ke right side me gap same ho
          }}
        >
          <button
            className="btn px-8 py-2 fw-bold fs-5 flex-fill"
            style={{
              backgroundColor: "#D100D9",
              color: "black",
              border: "none",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#b800bd";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#D100D9";
              e.target.style.color = "black";
            }}
          >
            Place Your Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contactdetails;


