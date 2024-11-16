import React from "react";
import "./experience.css";

const Experience: React.FC = () => {
  return (
    <div className="ExperienceContainer">
      <p className="Header">Experience</p>

      <a className="BoxContainer" href="https://yumebini.ca/" target="_blank" rel="noreferrer">
        <div className="DateContainer">
          <p className="ExperienceHeader">Yumebini</p>
          <p className="DateHeader">Mar 2024 - June 2024</p>
        </div>

        <p className="SubHeader">Full-stack Developer</p>
        <p className="ExperienceContentHeader">Designed and implemented an e-commerce web app on Shopify, expanding the company's digital presence with a modern UI.</p>
      </a>

      <a className="BoxContainer" href="https://guelphdental.com/" target="_blank" rel="noreferrer">
        <div className="DateContainer">
          <p className="ExperienceHeader">Guelph Dental</p>
          <p className="DateHeader">May 2022 - June 2022</p>
        </div>

        <p className="SubHeader">Full-stack Developer</p>
        <p className="ExperienceContentHeader">Re-engineered a local dentistry web app, designing a new and intuitive UI, building 7 scalable pages in React.</p>
      </a>

      <a className="BoxContainer" href="https://lotusrestaurant.ca/" target="_blank" rel="noreferrer">
        <div className="DateContainer">
          <p className="ExperienceHeader">Lotus</p>
          <p className="DateHeader">Dec 2021 - Mar 2022</p>
        </div>

        <p className="SubHeader">Front-end Developer</p>
        <p className="ExperienceContentHeader">Developed a React web app, collaborating in a cross-functional team to create an accessible and functional app.</p>
      </a>
    </div>
  );
}

export default Experience;