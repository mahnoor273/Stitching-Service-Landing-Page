import React, { useState } from "react";
import measurement from "../assets/am.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Addyourmeasurements = () => {
  const fields = [
    "Shoulder Width",
    "Chest",
    "Waist",
    "Hips",
    "Sleeve Length",
    "Kameez Length",
    "Armhole",
    "Neck Circumference",
  ];

  const [data, setData] = useState(fields);
  const [editIndex, setEditIndex] = useState(null);

  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 40px" }}>
      
      {/* ===== Heading Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ marginTop: "80px" }}
      >
        <h1 style={{ fontSize: "55px" }}>Add Your Measurements</h1>

        <h2 style={{ fontSize: "35px", marginTop: "60px" }}>
          Required Measurements
        </h2>

        <ul style={{ fontSize: "25px" }}>
          {fields.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </motion.div>

      {/* ===== Guidelines ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ marginTop: "70px" }}
      >
        <h2 style={{ fontSize: "35px" }}>Guidelines</h2>
        <ul style={{ fontSize: "25px" }}>
          <li>Use a soft measuring tape for best accuracy.</li>
          <li>Ask someone to help you for shoulder and back measurements.</li>
          <li>Don’t pull the tape too tight — keep it snug but comfortable.</li>
          <li>Stand straight and relaxed during measurement.</li>
          <li>Take measurements in inches (or cm).</li>
        </ul>
      </motion.div>

      {/* ===== Image ===== */}
     <motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  style={{
    marginTop: "80px",
    display: "flex",
    justifyContent: "center",
  }}
>
  <img
    src={measurement}
    alt="measurement guide"
    style={{
      width: "100%",
      maxWidth: "500px",
      height: "auto",
    }}
  />
</motion.div>


      {/* ===== Editable Measurements ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ marginTop: "80px" }}
      >
        <h1 style={{ fontSize: "55px" }}>Add Your Measurements</h1>

        <ul style={{ fontSize: "25px", lineHeight: "3" }}>
          {data.map((item, i) => (
            <li
              key={i}
              onClick={() => setEditIndex(i)}
              style={{
                borderBottom: "2px solid black",
                cursor: "pointer",
                width: "fit-content",
              }}
            >
              {editIndex === i ? (
                <input
                  autoFocus
                  defaultValue={item}
                  style={{
                    fontSize: "25px",
                    border: "none",
                    outline: "none",
                  }}
                  onBlur={(e) => {
                    const updated = [...data];
                    updated[i] = e.target.value || item;
                    setData(updated);
                    setEditIndex(null);
                  }}
                />
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* ===== Button ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link to="/contactdetails">
          <button
            style={{
              backgroundColor: "#7303a0",
              color: "black",
              border: "none",
              borderRadius: "8px",
              padding: "16px 60px",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
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
            Next
          </button>
        </Link>
      </motion.div>

    </div>
  );
};

export default Addyourmeasurements;

