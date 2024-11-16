import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./header.css";
import "./hamburger.css"

const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  }


  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(event.target as Node)
      ) setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div className="HamburgerContainer">
      <button className="NavButtons ContainerCenter" onClick={toggleOpen} ref={buttonRef}>
        <GiHamburgerMenu color="white" size="20px" style={{ transition: "0.2s linear", transform: `${isOpen ? "rotate(90deg)" : "rotate(0)"}`}} />
      </button>
      
      {isOpen &&
        <div ref={menuRef} className="Hamburger">
          <a href="#Education" onClick={toggleOpen}>Education</a>
          <a href="#Experience" onClick={toggleOpen}>Experience</a>
          <a href="#Projects" onClick={toggleOpen}>Projects</a>
          <a href="#Contact" onClick={toggleOpen}>Contact</a>
        </div>
      }
    </div>
  )
};

export default Hamburger;