import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function Count() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 175000, { duration: 4 });

    return () => {
      animation.stop();
    };
  }, [count]);

  return <motion.h1>{rounded}</motion.h1>;
}
