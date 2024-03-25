// Importing Dependencies //
import React from "react";
import Image from 'next/image';

// Importing Images SRC
import BackgroundImage from '../../content/images/home-image-studio.webp';

export function Hero() {;

  return (
    <section className="hero" id="hero">
      <div className="hero-block">
          <Image className="hero-image" alt="Photo Studio" src={BackgroundImage} quality={100}/>
          <div className="hero-image-shadow"></div>
      </div>
    </section>
  );
}

export default Hero;