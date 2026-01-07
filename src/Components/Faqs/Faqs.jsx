import React from "react";

const Faqs = () => {
  return (
    <div style={{ marginTop: "120px" }}>
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "80px" }}>FAQS</h1>
        <p style={{ fontSize: "40px" }}>
          Find answers to your questions
        </p>
      </div>

      {/* FAQ CARD */}
      <div style={faqCardStyle}>
        <h2>How do I place an order on Fabrico?</h2>
        <p style={faqTextStyle}>
          Simply follow 4 easy steps: Choose your fabric, select your style,
          customize the design, and add your measurements. Once done, submit
          your order and we’ll take care of the rest!
        </p>
      </div>

      <div style={faqCardStyle}>
        <h2>What types of fabrics do you offer?</h2>
        <p style={faqTextStyle}>
          We offer a wide range including cotton, lawn, silk, chiffon, linen,
          and more. Each fabric is carefully selected for quality and comfort.
        </p>
      </div>

      <div style={faqCardStyle}>
        <h2>How do I give my measurements?</h2>
        <p style={faqTextStyle}>
          You can either fill in your measurements manually during the order
          process, or upload a picture/chart of your preferred size. You’ll
          also find a simple guide on our website to help.
        </p>
      </div>
    </div>
  );
};

const faqCardStyle = {
  border: "4px solid #ccc",
  padding: "35px 45px",
  borderRadius: "12px",
  width: "65%",        // 👈 width control (change to 60% / 70%)
  margin: "0 auto 40px",
};

const faqTextStyle = {
  fontSize: "28px",
  lineHeight: "1.6",
  marginTop: "15px",
};

export default Faqs;

