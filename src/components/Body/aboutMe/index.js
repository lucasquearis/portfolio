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
          Sou de Curitiba 🏠
        </p>
        <p>
          Estudante da Trybe, atualmente no módulo de back-end 👨‍💻
        </p>
        <p>Muito animado para entrar no mercado de trabalho ⌨</p>
        <p>Sou apaiconado por técnologia e jogos! 🎮</p>
      </div>
      <div className="aboutMe-rigth">
        <img className="trybe-img" src={ trybe } alt="trybe" />
      </div>
    </div>
  </div>
);

export default AboutMe;
