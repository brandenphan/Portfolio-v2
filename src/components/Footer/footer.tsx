import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import resume from "../../assets/resume.pdf";
import "./footer.css";
import "../../global/global.css";

const Footer: React.FC = () => {
  return (
    <div className="FooterContainer">
      <div className="FooterContent">
        <p>Branden Phan - 2024</p>
        
        <div className="ButtonContainer">
          <a className="FooterButtons" href="https://www.linkedin.com/in/brandenphan/" target="_blank" rel="noreferrer">
            <FaLinkedin size="20px" color="white" />
          </a>
          <a className="FooterButtons" href="https://github.com/brandenphan" target="_blank" rel="noreferrer">
            <FaGithub size="20px" color="white" />
          </a>
          <a className="FooterButtons" href="mailto: branden.phan@gmail.com" target="_blank" rel="noreferrer">
            <MdEmail size="20px" color="white" />
          </a>
          <a className="FooterButtons" href={resume} target="_blank" rel="noreferrer">
            <TbFileCv size="20px" color="white" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;