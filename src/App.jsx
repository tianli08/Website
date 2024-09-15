import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer.jsx";
import Menu from "./Menu.jsx";
import Logo from "./Logo.jsx";
import Starfield from "./Starfield.jsx";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Media from "./pages/Media";
import Count from "./Count.jsx";
import SubStarfield from "./pages/SubStarfield";
import Cursor from "./Cursor.jsx";

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
              </div>
              <div className="app">
                <Cursor />
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
