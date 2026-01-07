import React from "react";
import card from "../assets/tc1.png";
import card1 from "../assets/tc2.png";
import card2 from "../assets/tc3.png";
import card3 from "../assets/tc4.png";
import card4 from "../assets/tc9.png";
import card5 from "../assets/tc10.png";
import card6 from "../assets/tc5.png";
import card7 from "../assets/tc6.png";
import card8 from "../assets/tc7.png";
import hero from "../assets/tc8.png";

const Trending = () => {
  return (
    <div style={{ padding: "0 40px", maxWidth: "1440px", margin: "0 auto" }}>
      
      {/* Trending Fabrics */}
      <div>
        <h1 style={{ fontWeight: "bold", fontSize: "70px", lineHeight: "1.2", marginTop: "100px" }}>
          Trending Fabrics
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 350px)", justifyContent:"flex-start", gap: "80px", marginTop: "50px" }}>
          {[{img: card, name:"Lilan Cloth", price:"1000RS"}, {img: card1, name:"Wool Cloth", price:"2500RS"}].map((c, index) => (
            <div key={index} style={{ display: "flex", flexDirection: "column", width:"350px", height: "500px" }}>
              <img src={c.img} alt={c.name} style={{ height: "250px", objectFit: "cover", borderRadius:"10px" }} />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding:"15px" }}>
                <div>
                  <h5 style={{ fontSize:"28px", fontWeight:"bold" }}>{c.name}</h5>
                  <p style={{ fontSize:"20px" }}>Price</p>
                  <h6 style={{ fontSize:"22px" }}>{c.price}</h6>
                </div>
                <button
                  style={{
                    backgroundColor:"#7303a0ff",
                    color:"black",
                    padding:"12px 30px",
                    fontSize:"18px",
                    border:"none",
                    borderRadius:"5px",
                    fontWeight:"bold",
                    cursor:"pointer",
                    alignSelf:"flex-end",
                    transition:"all 0.3s ease"
                  }}
                  onMouseEnter={(e)=>{e.target.style.backgroundColor="black"; e.target.style.color="#7303a0ff"}}
                  onMouseLeave={(e)=>{e.target.style.backgroundColor="#7303a0ff"; e.target.style.color="black"}}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Colors */}
      <div>
        <h1 style={{ fontWeight: "bold", fontSize: "70px", lineHeight: "1.2", marginTop: "100px" }}>
          Trending Colors
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 350px)", justifyContent:"flex-start", gap: "80px", marginTop: "50px" }}>
          {[{img: card2, name:"Wool Cloth", price:"2500RS"}, {img: card3, name:"Lilan Cloth", price:"1000RS"}].map((c, index)=>(
            <div key={index} style={{ display: "flex", flexDirection: "column", width:"350px", height:"450px" }}>
              <img src={c.img} alt={c.name} style={{ height:"250px", objectFit:"cover", borderRadius:"10px"}}/>
              <div style={{ flex:1, display:"flex", flexDirection:"column", justifyContent:"space-between", padding:"15px" }}>
                <div>
                  <h5 style={{ fontSize:"28px", fontWeight:"bold"}}>{c.name}</h5>
                  <p style={{ fontSize:"20px"}}>Price</p>
                  <h6 style={{ fontSize:"22px"}}>{c.price}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Styles */}
      <div>
        <h1 style={{ fontWeight: "bold", fontSize: "70px", lineHeight: "1.2", marginTop: "100px" }}>
          Trending Styles
        </h1>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(2, 300px)", justifyContent:"flex-start", gap:"80px", marginTop:"50px" }}>
          {[{img: card4, name:"Long Frock", price:"900RS"}, {img: card5, name:"Short Kameez", price:"900RS"}].map((c,index)=>(
            <div key={index} style={{ position:"relative", width:"300px", height:"300px", borderRadius:"10px", overflow:"hidden" }}>
              <div style={{
                backgroundImage:`url(${c.img})`,
                backgroundSize:"cover",
                backgroundPosition:"center",
                width:"100%",
                height:"100%",
                position:"absolute",
                top:0,
                left:0,
                zIndex:1
              }}></div>
              <div style={{
                backgroundColor:"rgba(0,0,0,0.4)",
                position:"absolute",
                top:0,
                left:0,
                width:"100%",
                height:"100%",
                zIndex:2
              }}></div>
              <div style={{
                position:"relative",
                zIndex:3,
                height:"100%",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center",
                padding:"20px",
                color:"white",
                textAlign:"center"
              }}>
                <h5 style={{ fontSize:"28px", fontWeight:"bold", marginBottom:"10px"}}>{c.name}</h5>
                <p style={{ fontSize:"18px", marginBottom:"5px"}}>Sewing Price</p>
                <h6 style={{ fontSize:"20px"}}>{c.price}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Design */}
      <div>
        <h1 style={{ fontWeight: "bold", fontSize:"70px", lineHeight:"1.2", marginTop:"100px" }}>Trending Design</h1>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 300px)", justifyContent:"flex-start", gap:"50px", marginTop:"50px" }}>
          {[card6, card7, card8].map((img, index)=>(
            <div key={index} style={{ position:"relative", width:"300px", height:"250px", borderRadius:"10px", overflow:"hidden" }}>
              <img src={img} style={{ width:"100%", height:"100%", position:"absolute", top:0, left:0 }} />
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", marginTop:"100px", paddingBottom:"40px" }}>
        <div style={{ maxWidth:"600px" }}>
          <h1 style={{ fontWeight:"bold", fontSize:"70px", lineHeight:"1.2" }}>
            <span style={{ color:"#7303a0ff" }}>Loved </span> What You <br /> Saw?
          </h1>
          <p style={{ fontSize:"35px", lineHeight:"2", color:"#444"}}>Let your next outfit set the trend</p>
          <button style={{
            backgroundColor:"#7303a0ff",
            color:"black",
            border:"none",
            borderRadius:"8px",
            padding:"15px 40px",
            fontSize:"18px",
            fontWeight:"bold",
            marginTop:"30px",
            cursor:"pointer",
            transition:"all 0.3s ease"
          }}
          onMouseEnter={(e)=>{e.target.style.backgroundColor="#b800bd"; e.target.style.color="white"}}
          onMouseLeave={(e)=>{e.target.style.backgroundColor="#7303a0ff"; e.target.style.color="black"}}
          >Order Now</button>
        </div>
        <div>
          <img src={hero} alt="Hero" style={{ maxWidth:"600px", width:"100%", borderRadius:"10px" }} />
        </div>
      </div>

    </div>
  );
};

export default Trending;

