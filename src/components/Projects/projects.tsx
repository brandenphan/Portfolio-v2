import React, { useContext } from "react";
import WindowWidthContext from "../../context/windowWidth";
import "./projects.css";

const Projects: React.FC = () => {
  const context = useContext(WindowWidthContext);
  if (!context) throw new Error("Window Width Context Error");
  const { windowWidth } = context;

  return (
    <div className="ProjectsContainer">
      <p className="Header">Projects</p>

      <div className="ProjectBoxSection">
        <a className="ProjectBox" href="https://github.com/L-Michael1/Recapify" target="_blank" rel="noreferrer">
          <p className="ProjectHeader">Recapify</p>
          <p className="ProjectDesc">Google Chrome extension that allows users to quickly summarize highlighted text using GPT-3.5 with OpenAI's LangChain API.</p>
          <div className="LanguageContainer">
            <div className="Language">
              <p className="LanguageText">JavaScript</p>
            </div>
            <div className="Language">
              <p className="LanguageText">Python</p>
            </div>
            {windowWidth > 400 &&
            <>
              <div className="Language">
                <p className="LanguageText">HTML</p>
              </div>
              <div className="Language">
                <p className="LanguageText">CSS</p>
              </div>
            </>
            }
          </div>
            {windowWidth <= 400 &&
              <div className="LanguageContainer">
                <div className="Language">
                  <p className="LanguageText">HTML</p>
                </div>
                <div className="Language">
                  <p className="LanguageText">CSS</p>
                </div>
              </div>
            }
        </a>

        <a className="ProjectBox" href="https://github.com/brandenphan/Course-Search" target="_blank" rel="noreferrer">
          <p className="ProjectHeader">Course Search</p>
          <p className="ProjectDesc">Web app that gives users the ability to search courses, degrees, and prerequisite trees from the University of Guelph and British Columbia.</p>
          <div className="LanguageContainer">
            <div className="Language">
              <p className="LanguageText">JavaScript</p>
            </div>
            <div className="Language">
              <p className="LanguageText">HTML</p>
            </div>
            <div className="Language">
              <p className="LanguageText">CSS</p>
            </div>
          </div>
        </a>

        <a className="ProjectBox" href="https://github.com/brandenphan/Schedule-Maker" target="_blank" rel="noreferrer">
          <p className="ProjectHeader">Schedule Maker</p>
          <p className="ProjectDesc">Full-stack web app with the ability to create unique schedules, saved under personal user accounts.</p>
          <div className="LanguageContainer">
            <div className="Language">
              <p className="LanguageText">JavaScript</p>
            </div>
            <div className="Language">
              <p className="LanguageText">HTML</p>
            </div>
            <div className="Language">
              <p className="LanguageText">CSS</p>
            </div>
          </div>
        </a>

        <a className="ProjectBox" href="https://github.com/brandenphan/Pami-Bot" target="_blank" rel="noreferrer">
          <p className="ProjectHeader">Discord Bot</p>
          <p className="ProjectDesc">Discord bot featuring various features such as, Google Searching, Trivia, and To do lists.</p>
          <div className="LanguageContainer">
            <div className="Language">
              <p className="LanguageText">Python</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;