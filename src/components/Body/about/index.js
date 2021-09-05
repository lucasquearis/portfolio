import React from 'react';
import './about.css';
import profilePhoto from '../../../images/profilePhoto.jpg';
import SocialContact from '../../common/social-contact';

const About = () => (
  <div className="about">
    <div className="about-top">
      <div className="about-photo">
        <img className="picture" src={ profilePhoto } alt="Myself" />
      </div>
      <div className="about-info">
        Hello There, I am;
        <br />
        <span className="info-name">Lucas A. Santos</span>
        .
        <br />
        {' '}
        and you are welcome to my portfolio
      </div>
    </div>
    <SocialContact />
  </div>
);

export default About;
