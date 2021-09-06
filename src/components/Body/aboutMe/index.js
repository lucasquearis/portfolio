import React from 'react';
import Separator from '../../common/separator';
import trybe from '../../../images/trybe.png';
import './aboutMe.css';

const AboutMe = () => (
  <div className="aboutMe">
    <Separator />
    <h1 className="section-title">About Me</h1>
    <div className="aboutMe-container">
      <div className="aboutMe-left">
        <p>
          I&apos;m Brazilian, I live in Curitiba, Paraná. 🏠
        </p>
        <p>
          Trybe student, currently in the backend module 👨‍💻
        </p>
        <p>Very excited to become a developer ⌨</p>
        <p>I&apos;m passionate about technology and games! 🎮</p>
      </div>
      <div className="aboutMe-rigth">
        <img className="trybe-img" src={ trybe } alt="trybe" />
      </div>
    </div>
  </div>
);

export default AboutMe;
