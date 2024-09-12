// Concept by mattgperry for Framer Motion: Parallax
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Sublogo from "./SubLogo";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id, title, desc }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        scrollSnapAlign: "center",
        perspective: "500px",
      }}
    >
      <div
        ref={ref}
        style={{
          width: "300px",
          height: "400px",
          position: "relative",
          maxHeight: "90vh",
          margin: "20px",
          background: "var(--white)",
          overflow: "hidden",
        }}
      >
        <img
          src={`/${id}.jpg`}
          alt={`Image ${id}`}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <motion.h2
        style={{
          margin: "0",
          color: "var(--accent)",
          left: "calc(50% + 130px)",
          fontSize: "56px",
          fontWeight: "700",
          letterSpacing: "-3px",
          lineHeight: "1.2",
          position: "absolute",
          y,
        }}
      >
        {`${title}`}
        <p
          style={{
            marginTop: "1%",
            fontSize: "30px",
            fontWeight: "500",
            letterSpacing: "1px",
            marginRight: "8%",
          }}
        >
          {`${desc}`}
        </p>
      </motion.h2>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const descs = [
    "Displays a wide showcase of all my projects. Links can be found to the page on my Github.",
    "Made using Arduino Leonardo and C++, this is a fully functional wireless xBox controller with lots of specs.",
    "Virtual reality software made in Unity and C# used to promote anti-autonomous weapons in the future.",
    "Website development with seamless and dynamic user experience. Dynamic routing and API data fetching results in a more user friendly site.",
    "Founded ecommerce platform HypeRetrieve, using React and Next.js along with social media. Leveraging over $175,000 in total revenue.",
  ];

  const titles = [
    "Projects",
    "Accessibility xBox Controller",
    "Autonomous VR",
    "Website Coding",
    "HypeRetrieve",
  ];

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "1000",
          padding: "0%",
        }}
      >
        <Sublogo />
      </div>

      <style>{`
        body {
          --black: #181818;
          --ash-black: #222;
          --white: #fafafa;
          --sky: #00ccff;
          --green: #22dddd;
          --blue: #1300ff;
          --dusk: #6600ff;
          --purple: #9900ff;
          --pink: #ff0066;
          --red: #fe0222;
          --orange: #fd7702;
          --yellow: #ffbb00;

          --background: var(--black);
          --accent: var(--white);

          margin: 0;
          padding: 0;
          background-color: var(--background);
          color: var(--accent);
        }

        * {
          font-family: Satoshi;
          font-weight: 400;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
        }

        h1, h2, h3 {
          font-family: Satoshi;
          font-weight: 600;
          font-style: normal;
        }

        h1 {
          font-size: 36px;
          font-weight: 700;
          letter-spacing: -1px;
          line-height: 1.2;
          text-align: center;
          margin: 100px 0 40px;
        }

        p {
          margin: 0 0 30px 0;
          font-size: 18px;
        }

        ::-webkit-scrollbar {
          height: 5px;
          width: 5px;
          background: var(--background);
        }

        ::-webkit-scrollbar-thumb {
          background: var(--accent);
          -webkit-border-radius: 1ex;
        }

        ::-webkit-scrollbar-corner {
          background: var(--background);
        }

        html {
          scroll-snap-type: y mandatory;
        }
      `}</style>
      {descs.map((desc, index) => (
        <Image key={index} id={index + 1} title={titles[index]} desc={desc} />
      ))}

      <motion.div
        className="progress"
        style={{
          position: "fixed",
          left: "0",
          right: "0",
          height: "5px",
          background: "var(--accent)",
          bottom: "100px",
          scaleX,
        }}
      />
    </>
  );
}
