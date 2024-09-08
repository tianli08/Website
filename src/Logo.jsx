import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const cursorVariants = {
  blink: {
    opacity: [0, 1],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.5,
    },
  },
};

function Logo() {
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = ["T", "i", "a", "n", "-", "L", "i", "."];

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, Math.random() * 400 + 300); // Random delay between 200ms and 500ms for typing effect
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, text.length]);

  return (
    <div
      className="logo-container no-select"
      style={{ fontSize: "2rem", color: "white" }}
    >
      <div className="logo">
        {text.map((char, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              color: char === "-" ? "#181818" : "inherit",
            }}
          >
            {index < currentIndex ? char : ""}
          </span>
        ))}
        {isTyping && (
          <motion.span
            className="cursor"
            variants={cursorVariants}
            animate="blink"
          >
            |
          </motion.span>
        )}
      </div>
    </div>
  );
}

export default Logo;
