import React, { useContext } from "react";
import WindowWidthContext from "../../context/windowWidth";
import P1 from "../../assets/1.png";
import P2 from "../../assets/2.png";
import P3 from "../../assets/3.png";
import "./landing.css";

const Landing: React.FC = () => {
  const context = useContext(WindowWidthContext);
  if (!context) throw new Error("Window Width Context Error");
  const { windowWidth } = context;

  const getImageSize = () => {
    if (windowWidth > 1600) return 250;
    else if (windowWidth > 1280) return 200;
    else if (windowWidth > 1024) return 150;
    else if (windowWidth > 600) return 300;
    else return "";
  }

  return (
    <div className="LandingContainer">
      <p className="FirstHeader">Branden Phan</p>
      <p className="SecondHeader">Software Developer</p>
      <p className="ThirdHeader">University of Guelph Computer Science Alumni</p>
      
      <div className="ImageContainer">
        <img src={P3} alt="Image1" height={getImageSize()} className="Image1" />
        <img src={P1} alt="Image2" height={getImageSize()} />
        <img src={P2} alt="Image3" height={getImageSize()} className="Image3" />
      </div>
    </div>
  )
}

export default Landing;