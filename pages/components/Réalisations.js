// Importing Dependencies //
import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Importing Swiper Style Sheets
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Importing Album Covers
import CoverVondervalRelentless from '../../content/images/covers/vonderval-relentless-cover.webp';
import CoverVondervalWholelottalove from '../../content/images/covers/vonderval-wholelottalove-cover.webp';
import CoverSvenLesscarabees from '../../content/images/covers/sven-lesscarabees-cover.webp';
import CoverSvenSven from '../../content/images/covers/sven-sven-cover.webp';
import CoverBlurblurBlackanxiety from '../../content/images/covers/blurblur-blackanxiety-cover.webp';
import CoverMailowLaNuit from '../../content/images/covers/mailow-lanuit-cover.webp';


export function Réalisations() {;

  return (
    <section className="realisations" id="realisations">
        <div className="container">
            <div className="container-block">
                <h1 className="section-title">Nos réalisations</h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <div className="roll-swiper-shadow-left"></div>
                    <div className="roll-swiper-shadow-right"></div>
                    <SwiperSlide>
                        <Link href="https://youtu.be/jsWjvqx-Nxc?si=f7uJsd7yL4Bexksy" target="_blank">
                            <Image src={CoverSvenLesscarabees} alt="Cover Sven - Les Scarabées" />
                            <div>
                                <h2>Sven</h2>
                                <h3>Les Scarabées / Single</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="https://open.spotify.com/album/421KWbFwDSlVZGvirZ01bQ" target="_blank">
                            <Image src={CoverVondervalRelentless} alt="Cover Von Der Val - Relentless" />
                            <div>
                                <h2>Von Der Val</h2>
                                <h3>Relentless / EP</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="https://open.spotify.com/album/38UApMH3D9LIK4ApzPb7pb" target="_blank">
                            <Image src={CoverSvenSven}  alt="Cover Sven - Sven EP" />
                            <div>
                                <h2>Sven</h2>
                                <h3>Sven / EP</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="https://open.spotify.com/album/7nNJREmYLBDmXUw5fJZUnV" target="_blank">
                            <Image src={CoverVondervalWholelottalove}  alt="Cover Von Der Val - Whole Lotta Love" />
                            <div>
                                <h2>Von Der Val</h2>
                                <h3>Whole Lotta Love / Single</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="https://open.spotify.com/track/2m7z2u0770SxpkIpfEoMJZ" target="_blank">
                            <Image src={CoverMailowLaNuit}  alt="Cover Mailow - La Nuit" />
                            <div>
                                <h2>Mailow</h2>
                                <h3>Le jour / Single</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    {/*<div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>*/}
                </Swiper>
            </div>
        </div>
    </section>
  );
}

export default Réalisations;