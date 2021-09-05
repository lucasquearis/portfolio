import React, { useState } from 'react';
import './Header.css';
import Mobile from './Mobile';
import Web from './Web';
import menu from '../../images/menu.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">Lucas de Almeida Santos</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <button
            className="button-menu"
            type="button"
            onClick={ () => setIsOpen(!isOpen) }
          >
            <img className="icon-menu" src={ menu } alt="logo-mobile" />
          </button>
          {isOpen && <Mobile isOpen={ isOpen } setIsOpen={ setIsOpen } />}
        </div>
      </div>
    </div>
  );
};

export default Header;
