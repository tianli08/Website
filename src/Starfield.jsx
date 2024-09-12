// Based off Fisch0920
import React from "react";
import styled, { keyframes } from "styled-components";

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

const fly = keyframes`
  from {
    transform: translateZ(0px);
  }
  to {
    transform: translateZ(${depth}px);
  }
`;

const fade1 = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
`;

const fade2 = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
`;

const StarsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #181818;
  perspective: 340px;
  position: fixed; /* Use fixed positioning */
  top: 0;
  left: 0;
  z-index: -1; /* Ensure it stays behind other elements */
`;

const Stars = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  box-shadow: ${generateBoxShadow(stars)};
  animation: ${fly} ${speed}s linear infinite;
  transform-style: preserve-3d;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    box-shadow: inherit;
  }

  &:before {
    transform: translateZ(-${depth}px);
    animation: ${fade1} ${speed}s linear infinite;
  }

  &:after {
    transform: translateZ(-${depth * 2}px);
    animation: ${fade2} ${speed}s linear infinite;
  }
`;

const Starfield = () => (
  <StarsWrapper>
    <Stars />
  </StarsWrapper>
);

export default Starfield;
