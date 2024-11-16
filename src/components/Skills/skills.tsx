import React from "react";
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiPython  } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import "./skills.css";
import "../../global/global.css";

const Skills: React.FC = () => {
  return (
    <div className="SkillsContainer">
      <div className="ContainerCenter DividerContainer">
        <div className="Line" />
        <div className="ContainerCenter DividerContent">
          <p>Skills</p>
        </div>
      </div>

      <div className="IconContainer">
        <div className="IconBox ContainerCenter IconTypeScript">
          <SiTypescript color="#358EF1" />
        </div>
        <div className="IconBox ContainerCenter IconJavaScript">
          <SiJavascript color="#F0DB4F" />
        </div>
        <div className="IconBox ContainerCenter IconHTML">
          <SiHtml5 color="#f06529" />
        </div>
        <div className="IconBox ContainerCenter IconCSS">
          <SiCss3 color="#264de4" />
        </div>
        <div className="IconBox ContainerCenter IconPython">
          <SiPython color="#ffde57" />
        </div>
        <div className="IconBox ContainerCenter IconJava">
          <FaJava color="#f89820" />
        </div>
      </div>
    </div>
  )
}

export default Skills;