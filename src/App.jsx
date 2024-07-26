import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Hero /> <About /> <Skills /> <Projects /> <Resume />{" "}
                <Footer />
              </>
            }
          ></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/resume" element={<Resume/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
