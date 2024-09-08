import React from "react";
import Menu from "../Menu";
import Sublogo from "./SubLogo";

function Projects() {
  return (
    <div
      style={{
        backgroundColor: "#131313",
        height: "100vh",
        color: "white",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Sublogo />
      <h1>Projects</h1>
      <p>Welcome to the Projects page!</p>
      <h2>Tian Li.</h2>
    </div>
  );
}

export default Projects;
