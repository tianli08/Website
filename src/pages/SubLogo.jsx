import { motion } from "framer-motion";

function Sublogo() {
  return (
    <main
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", padding: "4px 10px" }}
      >
        <motion.a
          className="menuname"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "40px",
            fontWeight: "900",
          }}
        >
          TLi.
        </motion.a>
      </div>
    </main>
  );
}

export default Sublogo;
