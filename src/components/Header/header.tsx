import React, { useState, useEffect, useContext } from "react";
import WindowWidthContext from "../../context/windowWidth";
import Hamburger from "./hamburger";
import { Breakpoints } from "../../global/breakpoints";
import "./header.css";
import "./../../global/global.css";

const Header: React.FC = () => {
  const context = useContext(WindowWidthContext);
  if (!context) throw new Error("Window Width Context Error");
  const { windowWidth } = context;


  const [isScrolled, setIsScolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className={`NavContainer ${isScrolled ? "NavContainerScroll" : "NavContainerNoScroll"}`}>
      <div className={`NavContent ${isScrolled ? "NavContentScroll" : "NavContentNoScroll"}`}>
        <div className="NavSections">
          <a href="#Home" className="NavButtons">Branden Phan</a>
        </div>

        {windowWidth >= Breakpoints.tablet ?
          <div className="NavSections">
            <a href="#Education" className="NavButtons">Education</a>
            <a href="#Experience" className="NavButtons">Experience</a>
            <a href="#Projects" className="NavButtons">Projects</a>
          </div>
        :
          <div>
            <Hamburger />
          </div>
        }

        {windowWidth >= Breakpoints.desktop &&
          <div className="NavSections">
            <a href="#Contact" className="ContactButton">Contact</a>
          </div>
        }
      </div>
    </div>
  )
}

export default Header;