import React from 'react';
import './body.css';
import About from './about';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';
import AboutMe from './aboutMe';

const Body = () => (
  <div className="body">
    <section id="about">
      <About />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="aboutMe">
      <AboutMe />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </div>
);

export default Body;
