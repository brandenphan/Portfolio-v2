import React from "react";
import { projects } from "../../utils/projects";
import "./projects.css";

const Projects: React.FC = () => {
  return (
    <div className="ProjectsContainer">
      <p className="Header">Projects</p>

      <div className="ProjectBoxSection">
        {projects.map((project, index) => (
          <a key={index} className="ProjectBox" href={project.link} target="_blank" rel="noreferrer">
            <p className="ProjectHeader">{project.name}</p>
            <p className="ProjectDesc">{project.desc}</p>
            <div className="LanguageContainer">
              {project.languages.map((language, languageIndex) => (
                <div key={languageIndex} className="Language">
                  <p className="LanguageText">{language}</p>
                </div>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;