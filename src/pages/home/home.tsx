import React from "react";
import Header from "../../components/Header"

import Landing from "../../components/Landing";
import Education from "../../components/Education";
import Skills from "../../components/Skills";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";

import Footer from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <div style={{ width: "100%", top: "0", left: "0", position: "absolute", backgroundColor: "#D9D9D9"}}>
      <Header />

      <div id="Home" />
      <Landing />

      <div id="Education" />
      <Education />
      <Skills />

      <div id="Experience" />
      <Experience />

      <div id="Projects" />
      <Projects />

      <div id="Contact" />
      <Footer />
    </div>
  )
}

export default Home;