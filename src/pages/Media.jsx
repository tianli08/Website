import React from "react";
import Starfield from "../Starfield";
import Sublogo from "./SubLogo";
import SubFooter from "./SubFooter";
import Footer from "../Footer";
import SubStarfield from "./SubStarfield";

function Media() {
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
            display: "flex", // Make boxes align horizontally
            flexDirection: "row", // Horizontal alignment
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            width: "100%", // Ensure it takes full width
          }}
        >
          {/* Box 1 - Move down */}
          <div
            style={{
              background: "linear-gradient(135deg, #ff9966, #ff5e62)",

              height: "250px", // Make it square
              width: "250px", // Equal width and height
              borderRadius: "32px",
              margin: "20px", // Space between boxes
              boxShadow:
                "5px 5px 15px hsla(0, 0%, 100%, 0.3), 10px 10px 20px hsla(0, 0%, 100%, 0.2)",
              transform: "translateY(200%)", // Move it down
            }}
          />
          {/* Box 2 - Keep in center */}
          <div
            style={{
              background: "linear-gradient(135deg, #6a11cb, #2575fc)",
              height: "250px",
              width: "250px",
              borderRadius: "32px",
              margin: "20px",
              boxShadow:
                "5px 5px 15px hsla(0, 0%, 100%, 0.3), 10px 10px 20px hsla(0, 0%, 100%, 0.2)",
            }}
          />
          {/* Box 3 - Move down */}
          <div
            style={{
              background: "linear-gradient(135deg, #ffafbd, #ffc3a0)",
              height: "250px",
              width: "250px",
              borderRadius: "32px",
              margin: "20px",
              boxShadow:
                "5px 5px 15px hsla(0, 0%, 100%, 0.3), 10px 10px 20px hsla(0, 0%, 100%, 0.2)",
              transform: "translateY(200%)", // Move it down
            }}
          />
        </div>
      </div>

      <SubFooter />
    </div>
  );
}

export default Media;
