import { motion } from "framer-motion";

function Menu() {
  return (
    <main className="menu">
      <div className="menuwl">
        <motion.a
          className="menuname"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="/"
        >
          TLi.
        </motion.a>
        <div className="menulinks">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="/projects"
            rel="noopener noreferrer"
          >
            Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="/aboutme"
            rel="noopener noreferrer"
          >
            About Me
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="/media"
            rel="noopener noreferrer"
          >
            Media
          </motion.a>
        </div>
      </div>
    </main>
  );
}

export default Menu;
