import { motion } from "framer-motion";

function SquareAni() {
  return (
    <div>
      <motion.div
        className="squareani"
        initial={{ scale: 0 }}
        animate={{ x: 100, scale: 1, rotate: 360 }}
        transition={{ repeat: 2, repeatType: "loop", duration: 2 }}
      ></motion.div>
    </div>
  );
}

export default SquareAni;
