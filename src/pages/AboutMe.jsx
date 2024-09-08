import React from "react";
import Starfield from "../Starfield";
import Sublogo from "./SubLogo";
import SubFooter from "./SubFooter";
import Footer from "../Footer";
import SubStarfield from "./SubStarfield";

function AboutMe() {
  return (
    <div>
      <SubStarfield />
      <Sublogo />
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          color: "white",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #2c3e50, #4ca1af)",
            padding: "1%",
            borderRadius: "32px",
            maxWidth: "800px",
            boxShadow:
              "5px 5px 15px hsla(0, 0%, 100%, 0.3), 10px 10px 20px hsla(0, 0%, 100%, 0.2)",
            marginTop: "20px",
            width: "80%",
            textAlign: "left",
            display: "flex",
            justifyContent: "center",
            position: "relative", // Ensure positioning is relative for transform
            transform: "translate(0%, 10%)", // Adjust 'x' and 'y' here
          }}
        >
          <div style={{ maxWidth: "90%", margin: "1%" }}>
            <h1
              style={{
                fontSize: "48px",
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
                marginTop: "0%",
                marginBottom: "0%",
              }}
            >
              About Me
            </h1>
            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.6,
                color: "#ffffff",
              }}
            >
              Hello! My name is Tian, and I am a 3rd year student majoring in
              Electrical Engineering with a minor in Computer Science at the
              University of Ottawa. My creations include websites, virtual
              reality products, accessibility products, and games.
            </p>
          </div>
        </div>
        {/* Divider 1 */}
        <div
          style={{
            background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
            padding: "1%",
            borderRadius: "32px",
            maxWidth: "800px",
            boxShadow:
              "5px 5px 15px hsla(0, 0%, 100%, 0.3), 10px 10px 20px hsla(0, 0%, 100%, 0.2)",
            marginTop: "20px",
            width: "80%",
            textAlign: "left",
            display: "flex",
            justifyContent: "center",
            position: "relative", // Ensure positioning is relative for transform
            transform: "translate(0%, 20%)", // Adjust 'x' and 'y' here
          }}
        >
          <div style={{ maxWidth: "90%", margin: "1%" }}>
            <h1
              style={{
                fontSize: "48px",
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
                marginTop: "0%",
                marginBottom: "0%",
              }}
            >
              Goals and Extracurricular
            </h1>
            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.6,
                color: "#ffffff",
              }}
            >
              I aim to blend my software and hardware knowledge with creativity
              to craft unique and confident products. Outside of engineering, I
              enjoy sports, music, arts, and gaming.
            </p>
          </div>
        </div>

        <SubFooter />
      </div>
    </div>
  );
}

export default AboutMe;
