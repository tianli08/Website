import React from "react";
import Cursor from "../Cursor.jsx";
import Starfield from "../Starfield";
import Sublogo from "./SubLogo";
import SubFooter from "./SubFooter";
import Footer from "../Footer";
import Menu from "../Menu.jsx";
import SubStarfield from "./SubStarfield";

function Media() {
  return (
    <div>
      <SubStarfield />
      <Menu />
      <Cursor />
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
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Box 1*/}
          <div
            style={{
              background: "linear-gradient(135deg, #ff9966, #ff5e62)",

              height: "250px",
              width: "250px",
              borderRadius: "32px",
              margin: "20px",
              boxShadow:
                "5px 5px 15px hsla(0, 0%, 100%, 0.3), 10px 10px 20px hsla(0, 0%, 100%, 0.2)",
              transform: "translateY(200%)",
            }}
          />
          {/* Box 2*/}
          <div
            style={{
              background: "linear-gradient(135deg, #6a11cb, #2575fc)",
              height: "250px",
              width: "250px",
              borderRadius: "32px",
              margin: "20px",
              boxShadow:
                "5px 5px 15px hsla(0, 0%, 100%, 0.3), 10px 10px 20px hsla(0, 0%, 100%, 0.2)",
              transform: "translateY(200%)",
            }}
          />
          {/* Box 3*/}
          <div
            style={{
              background: "linear-gradient(135deg, #ffafbd, #ffc3a0)",
              height: "250px",
              width: "250px",
              borderRadius: "32px",
              margin: "20px",
              boxShadow:
                "5px 5px 15px hsla(0, 0%, 100%, 0.3), 10px 10px 20px hsla(0, 0%, 100%, 0.2)",
              transform: "translateY(200%)",
            }}
          />
        </div>
      </div>

      <SubFooter />
    </div>
  );
}

export default Media;
