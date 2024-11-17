import React from "react";
import { experienceInfo } from "../../utils/experience";
import "./experience.css";

const Experience: React.FC = () => {
  return (
    <div className="ExperienceContainer">
      <p className="Header">Experience</p>

      {experienceInfo.map((experience, index) => (
        <a key={index} className="BoxContainer" href={experience.link} target="_blank" rel="noreferrer">
          <div className="DateContainer">
            <p className="ExperienceHeader">{experience.name}</p>
            <p className="DateHeader">{experience.date}</p>
          </div>

          <p className="SubHeader">{experience.role}</p>
          <p className="ExperienceContentHeader">{experience.desc}</p>
        </a>
      ))}
    </div>
  );
}

export default Experience;