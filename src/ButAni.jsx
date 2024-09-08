import { motion } from "framer-motion";

function ButAni() {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="butani"
        onClick={() => null}
      ></motion.button>
    </div>
  );
}

export default ButAni;
