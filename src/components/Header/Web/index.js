import React from 'react';
import './web.css';
import project from '../../../images/blueprint.png';
import skills from '../../../images/logical-thinking.png';
import contact from '../../../images/contact.png';
import aboutMe from '../../../images/aboutMe.png';

const Web = () => (
  <div className="web">
    <div className="web-option">
      <a href="#projects">
        <img
          className="option-icon"
          src={ project }
          alt="projects-icon"
        />
        Projects
      </a>
    </div>
    <div className="web-option">
      <a href="#skills">
        <img
          className="option-icon"
          src={ skills }
          alt="skills-icon"
        />
        Skills
      </a>
    </div>
    <div className="web-option">
      <a href="#aboutMe">
        <img
          className="option-icon"
          src={ aboutMe }
          alt="aboutMe-icon"
        />
        About Me
      </a>
    </div>
    <div className="web-option">
      <a href="#contact">
        <img
          className="option-icon"
          src={ contact }
          alt="contact-icon"
        />
        Contact
      </a>
    </div>
  </div>
);

export default Web;
