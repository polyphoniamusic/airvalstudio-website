// Importing Dependencies //
import React, { useRef, useState } from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-scroll/modules";

// Import Swiper styles
/*import 'swiper/css';
import 'swiper/css/navigation';*/

// import required modules
import { Navigation } from 'swiper/modules';

// Importing Images SRC
import HeroImage1 from '../../content/images/home-image-studio-1.webp';
import HeroImage2 from '../../content/images/home-image-studio-2.webp';
import HeroImage3 from '../../content/images/home-image-studio-3.webp';
import HeroImage4 from '../../content/images/home-image-studio-4.webp';
import HeroImage5 from '../../content/images/home-image-studio-5.webp';

export function Hero() {;

  return (
    <section className="hero" id="hero">
      <Swiper navigation={true} modules={[Navigation]} className="hero-block"
          loop={true}
          effect='fade'>
        <SwiperSlide>
          <Image className="hero-image" alt="Photo Studio 1" src={HeroImage1} quality={85}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="hero-image" alt="Photo Studio 2" src={HeroImage2} quality={85}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="hero-image" alt="Photo Studio 3" src={HeroImage3} quality={85}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="hero-image" alt="Photo Studio 4" src={HeroImage4} quality={85}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="hero-image" alt="Photo Studio 5" src={HeroImage5} quality={85}/>
        </SwiperSlide>
        <div className="hero-image-shadow">
          <Link to="realisations" spy={true} smooth={true} offset={0} duration={300}>
            <div className="scroll-button">
              <div className="scroll-button-circle"></div>
            </div>
          </Link>
        </div>
      </Swiper>
    </section>
  );
}

export default Hero;