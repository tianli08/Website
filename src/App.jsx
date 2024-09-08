import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer.jsx";
import Menu from "./Menu.jsx";
import Logo from "./Logo.jsx";
import Bar from "./Bar.jsx";
import Starfield from "./Starfield.jsx";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Media from "./pages/Media";
import SubStarfield from "./pages/SubStarfield";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Starfield />
              <div className="func">
                <Menu />
                <Bar />
              </div>
              <div className="app">
                <Logo />
                <Footer />
              </div>
            </main>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/media" element={<Media />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
