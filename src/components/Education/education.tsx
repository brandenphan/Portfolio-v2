import React, { useContext } from "react";
import WindowWidthContext from "../../context/windowWidth";
import { FiLink } from "react-icons/fi";
import transcript from "../../assets/transcript.pdf";
import "./education.css";

const Education: React.FC = () => {
  const context = useContext(WindowWidthContext);
  if (!context) throw new Error("Window Width Context Error");
  const { windowWidth } = context;

  return (
    <div className="EducationContainer">
      <p className="Header">EDUCATION</p>

      <div className="SectionContainer SectionHeader">
        <p>University of Guelph</p>
        <hr style={{ width: `${windowWidth > 600 ? "40px" : "20px"}`, border: "1px solid #707070" }} />
        {windowWidth > 600 ?
          <p>Sept 2019 - Apr 2024</p>
        :
          <p>Apr 2024</p>
        }
      </div>

      <div className="SectionContainer SectionContent">
        <p>Bachelor of Computing</p>
        <a className="LinkContainer" target="_blank" rel="noreferrer" href={transcript}>
          <p>Transcript</p>
          <FiLink className="Icon" />
        </a>
      </div>

      <div className="SectionContainer SectionContent">
        <p>Business Minor</p>
        <a className="LinkContainer" target="_blank" rel="noreferrer" href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2019-2020/c10/c10bcomp-sofs.shtml">
          <p>Degree Schedule</p>
          <FiLink className="Icon" />
        </a>
      </div>
    </div>
  )
}

export default Education;