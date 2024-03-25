// Importing Dependencies //
import React, { useState } from 'react';
import Image from 'next/image';

//import Link from "next/link";
import { Link } from "react-scroll/modules";

// Importing Images SRC //
import HomeLogo from '../../content/images/logos/airval-logo-white.svg';
import ArrowIcon from '../../content/images/icons/arrow-icon.svg';

export function Header() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header id="top">
        <div className="container">
          <div className="container-block">
            {/* MENU */}
            <div className="header-menu-block">
              <a href="/" spy={true} smooth={true} offset={0} duration={300}>
                <Image className="header-logo" alt="Airval Logo White" src={HomeLogo}/>
              </a>
              {/* OPEN MENU BUTTON */}
              <div className={`hamburger-menu ${showMenu ? 'show' : ''}`} onClick={toggleMenu}>
                <div className="hamburger-menu-line"></div>
                <div className="hamburger-menu-line"></div>
              </div>
            
              <div className={`menu-block ${showMenu ? 'show' : ''}`}>
                <div className="menu-block-background"></div>
                <nav>
                  <Image className="menu-close-button" alt="Close Menu Button" src={ArrowIcon} onClick={toggleMenu}/>
                  <ul className="header-menu">
                    <li className="header-menu-button"><Link to="realisations" spy={true} smooth={true} offset={0} duration={300} onClick={toggleMenu}>Réalisations</Link></li>
                    <li className="header-menu-button"><Link to="services" spy={true} smooth={true} offset={0} duration={300} onClick={toggleMenu}>Services</Link></li>
                    <li className="header-menu-button"><Link to="materiel" spy={true} smooth={true} offset={0} duration={300} onClick={toggleMenu}>Matériel</Link></li>
                    <li className="header-menu-button"><Link to="contact" spy={true} smooth={true} offset={0} duration={300} onClick={toggleMenu}>Contact</Link></li>
                  </ul>
                </nav>
              </div>
              
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
}

export default Header;