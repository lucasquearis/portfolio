import React from 'react';
import PropTypes from 'prop-types';
import './mobile.css';
import close from '../../../images/cancel.png';
import project from '../../../images/blueprint.png';
import skills from '../../../images/logical-thinking.png';
import contact from '../../../images/contact.png';
import aboutMe from '../../../images/aboutMe.png';

const Mobile = ({ isOpen, setIsOpen }) => (
  <div className="mobile">
    <button
      type="button"
      className="close-icon"
      onClick={ () => setIsOpen(!isOpen) }
    >
      <img
        className="close-icon"
        src={ close }
        alt="close-menu-icon"
      />
    </button>
    <div className="mobile-options">
      <div className="mobile-option">
        <a href="#projects">
          <img
            className="option-icon"
            src={ project }
            alt="projects-icon"
          />
          Projects
        </a>
      </div>
      <div className="mobile-option">
        <a href="#skills">
          <img
            className="option-icon"
            src={ skills }
            alt="skills-icon"
          />
          Skills
        </a>
      </div>
      <div className="mobile-option">
        <a href="#aboutMe">
          <img
            className="option-icon"
            src={ aboutMe }
            alt="aboutMe-icon"
          />
          About Me
        </a>
      </div>
      <div className="mobile-option">
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
  </div>
);

Mobile.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
}.isRequired;

export default Mobile;
