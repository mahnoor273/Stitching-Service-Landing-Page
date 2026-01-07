import React from 'react';

const Contact = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      {/* Center Container */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",   // 🔥 left/right gap controlled
        }}
      >
        <div>
          {/* Heading */}
          <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>
            We’re Here to <br /> Help You
          </h1>

          {/* Form */}
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "70px",
              width: "60%",
              fontWeight: "bold",
            }}
          >
            <h1 style={{ fontWeight: "bold", fontSize: "40px", color: "black" }}>
              Contact Form
            </h1>

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

          {/* Support Info */}
          <div>
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "40px",
                color: "black",
                marginTop: "80px",
                lineHeight: "1.4",
              }}
            >
              Support Email & <br /> Helpline Number
            </h1>

            <p
              style={{
                fontSize: "30px",
                color: "black",
                marginTop: "30px",
                lineHeight: "2",
              }}
            >
              📧 Email us at: support@fabrico.com <br />
              📞 Helpline: +92 3XX XXXXXXX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

