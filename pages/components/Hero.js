// Importing Dependencies //
import React, { useRef, useState } from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { Link } from "react-scroll/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Importing Images SRC
import HeroImage1 from '../../content/images/Accueil 1.png';
import HeroImage2 from '../../content/images/home-image-studio-5.webp';
import HeroImage3 from '../../content/images/home-image-studio-1.webp';
import HeroImage4 from '../../content/images/home-image-studio-3.webp';
import HeroImage5 from '../../content/images/Intime.jpg';
import HeroImage6 from '../../content/images/Extérieur.jpg';

export function Hero() {
  ;

  return (
    <section className="hero" id="hero">
      <div className="hero-block">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay, EffectFade]}
          loop={true}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={1000}
        >
          <SwiperSlide>
            <Image
              className="hero-image"
              alt="Photo Studio 1"
              src={HeroImage1}
              quality={85}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              className="hero-image"
              alt="Photo Studio 2"
              src={HeroImage2}
              quality={85}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              className="hero-image"
              alt="Photo Studio 3"
              src={HeroImage3}
              quality={85}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              className="hero-image"
              alt="Photo Studio 4"
              src={HeroImage4}
              quality={85}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              className="hero-image"
              alt="Photo Studio 5"
              src={HeroImage5}
              quality={85}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              className="hero-image"
              alt="Photo Studio 6"
              src={HeroImage6}
              quality={85}
            />
          </SwiperSlide>
        </Swiper>

        <div className="hero-image-shadow">
          <Link
            to="realisations"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
          >
            <div className="scroll-button">
              <div className="scroll-button-circle"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;