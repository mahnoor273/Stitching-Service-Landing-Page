import React from "react";

const Faqs = () => {
  return (
    <div className="py-5" style={{ marginTop: "120px" }}>
      {/* Heading */}
      <div className="text-center mb-5 px-3">
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 5rem)",
            fontWeight: "bold",
          }}
        >
          FAQS
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 3vw, 2rem)",
            color: "#555",
          }}
        >
          Find answers to your questions
        </p>
      </div>

      {/* FAQ CARDS */}
      <div className="d-flex flex-column align-items-center gap-4 px-3">
        <div className="faq-card" style={faqCardStyle}>
          <h2>How do I place an order on Fabrico?</h2>
          <p style={faqTextStyle}>
            Simply follow 4 easy steps: Choose your fabric, select your style,
            customize the design, and add your measurements. Once done, submit
            your order and we’ll take care of the rest!
          </p>
        </div>

        <div className="faq-card" style={faqCardStyle}>
          <h2>What types of fabrics do you offer?</h2>
          <p style={faqTextStyle}>
            We offer a wide range including cotton, lawn, silk, chiffon, linen,
            and more. Each fabric is carefully selected for quality and comfort.
          </p>
        </div>

        <div className="faq-card" style={faqCardStyle}>
          <h2>How do I give my measurements?</h2>
          <p style={faqTextStyle}>
            You can either fill in your measurements manually during the order
            process, or upload a picture/chart of your preferred size. You’ll
            also find a simple guide on our website to help.
          </p>
        </div>
      </div>
    </div>
  );
};

const faqCardStyle = {
  border: "4px solid #ccc",
  padding: "30px 25px",
  borderRadius: "12px",
  width: "100%",
  maxWidth: "700px", // max width for large screens
  boxSizing: "border-box",
};

const faqTextStyle = {
  fontSize: "clamp(1rem, 2vw, 1.5rem)",
  lineHeight: "1.6",
  marginTop: "15px",
};

export default Faqs;


