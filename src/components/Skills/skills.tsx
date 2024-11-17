import React from "react";
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiPython  } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import "./skills.css";
import "../../global/global.css";

const iconData = [
  { icon: <SiTypescript color="#358EF1" />, className: 'IconTypeScript' },
  { icon: <SiJavascript color="#F0DB4F" />, className: 'IconJavaScript' },
  { icon: <SiHtml5 color="#f06529" />, className: 'IconHTML' },
  { icon: <SiCss3 color="#264de4" />, className: 'IconCSS' },
  { icon: <SiPython color="#ffde57" />, className: 'IconPython' },
  { icon: <FaJava color="#f89820" />, className: 'IconJava' },
]

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
        {iconData.map((icon, index) => (
          <div key={index} className={`IconBox ContainerCenter ${icon.className}`}>
            {icon.icon}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;