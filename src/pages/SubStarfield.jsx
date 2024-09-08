import React from "react";

const stars = 350;
const depth = 300;
const speed = 3;
const width = 3000;
const height = 960;

const generateBoxShadow = (numStars) => {
  let boxShadow = "";
  for (let i = 0; i <= numStars; i++) {
    const x = Math.floor(Math.random() * width) - width / 2;
    const y = Math.floor(Math.random() * height) - height / 2;
    const color = `hsl(90, 0%, ${75 + Math.random() * 25}%)`;
    boxShadow += `${x}px ${y}px ${color}, `;
  }
  return boxShadow.slice(0, -2);
};

const StarsWrapper = {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  background: "#181818",
  perspective: "340px",
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "-1",
};

const StarsStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "2px",
  height: "2px",
  borderRadius: "50%",
  boxShadow: generateBoxShadow(stars),
  animation: `fly ${speed}s linear infinite`,
  transformStyle: "preserve-3d",
};

const SubStarfield = () => (
  <div style={StarsWrapper}>
    <div style={StarsStyle}>
      <div
        style={{
          position: "absolute",
          width: "inherit",
          height: "inherit",
          boxShadow: "inherit",
          transform: `translateZ(-${depth}px)`,
          animation: `fade1 ${speed}s linear infinite`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "inherit",
          height: "inherit",
          boxShadow: "inherit",
          transform: `translateZ(-${depth * 2}px)`,
          animation: `fade2 ${speed}s linear infinite`,
        }}
      />
    </div>
  </div>
);

export default SubStarfield;
