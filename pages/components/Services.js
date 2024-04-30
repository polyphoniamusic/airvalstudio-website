// Importing Dependencies //
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Importing Images SRC


export function Services() {;

  return (
    <section className="services" id="services">
        <div className="container">
            <div className="container-block">
                <h1 className="section-title">Situé en pleine nature,<br/>profitez d'un cadre idyllique pour vos sessions</h1>
                <div className="services-block">
                    <div className="services-block-item">
                        <h2 className="services-title">Enregistrement</h2>
                        <p className="services-text">Profitez de matériel professionnel et haut de gamme pour donner vie à vos projets.</p>{/* Profitez d'un cadre professionnel et de matériel haut de gamme pour donner vie à vos projets. */}
                        <a className="services-pricing">À partir de 
                            <span>210€
                                <span>HT
                                    <span>JOUR</span>
                                </span>
                            </span>
                        </a>
                        <a className="services-button" href="mailto:contact@airvalstudio.com">Nous contacter</a>
                    </div>

                    <div className="services-block-item">
                        <h2 className="services-title">Édition</h2>
                        <p className="services-text">Nous corrigeons et préparons vos projets pour qu'ils soient "prêts à être mixés".</p>
                        <a className="services-pricing">À partir de 
                            <span>75€
                                <span>HT</span>
                            </span>
                        </a>
                        <a className="services-button"  href="mailto:contact@airvalstudio.com">Nous contacter</a>
                    </div>

                    <div className="services-block-item">
                        <h2 className="services-title">Mixage</h2>
                        <p className="services-text">Au studio, ou à distance, nous réalisons et mixons vos projets avec expertise.</p>
                        <a className="services-pricing">À partir de 
                            <span>185€
                                <span>HT</span>
                            </span>
                        </a>
                        <a className="services-button"  href="mailto:contact@airvalstudio.com">Nous contacter</a>
                    </div>

                    {/*<div className="services-block-item">
                        <h2 className="services-title">Mastering</h2>
                        <p className="services-text">Nous boostons vos projets aux standards de l'industrie musicale pour une distribution globale !</p>
                        <a className="services-pricing">À partir de 
                            <span>45€
                                <span>HT</span>
                            </span>
                        </a>
                        <a className="services-button" href="mailto:contact@airval-studio.com">Nous contacter</a>
                    </div>*/}
                </div>
            </div>
        </div>
    </section>
  );
}

export default Services;