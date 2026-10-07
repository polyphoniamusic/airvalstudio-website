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


export function Réalisations() {
    ;

    return (
        <section className="realisations" id="realisations">
            <h1 className="section-title">Live Sessions</h1>

            <div className="videos-grid">
                <div className="video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/mt0ocN5hAO4"
                        title="Airval Studio — Réalisation 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>

                <div className="video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/DcWmkfhTYYI"
                        title="Airval Studio — Réalisation 2"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
}

export default Réalisations;