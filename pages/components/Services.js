// Importing Dependencies //
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Importing Images SRC


export function Services() {
    ;

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="container-block">
                    <h1 className="section-title">Situé en pleine nature aux abords de la ville d'Angers, profitez d'un cadre idyllique pour vos sessions</h1>
                    <div className="services-block">
                        <div className="services-block-item">
                            <h2 className="services-title">Enregistrement</h2>
                            <p className="services-text">Choix des micros, prise de son, accompagnement technique et réalisation adaptés à votre projet.</p>{/* Profitez d'un cadre professionnel et de matériel haut de gamme pour donner vie à vos projets. */}
                            <a className="services-pricing">À partir de
                                <span>350€
                                    <span>TTC
                                        <span>JOUR</span>
                                    </span>
                                </span>
                            </a>
                            <a className="services-button" href="mailto:contact@airvalstudio.com">Nous contacter</a>
                        </div>

                        <div className="services-block-item">
                            <h2 className="services-title">Édition & Mixage</h2>
                            <p className="services-text">Nettoyage, traitement et mixage pour un résultat équilibré, vivant et cohérent..</p>
                            <a className="services-pricing">À partir de
                                <span>50€
                                    <span>TTC
                                        <span>HEURE</span>
                                    </span>
                                </span>
                            </a>
                            <a className="services-button" href="mailto:contact@airvalstudio.com">Nous contacter</a>
                        </div>

                        <div className="services-block-item">
                            <h2 className="services-title">Mastering</h2>
                            <p className="services-text">Equilibre, dynamique, niveau et cohérrence pour une diffusion professionnelle.</p>
                            <a className="services-pricing">À partir de
                                <span>50€
                                    <span>TTC
                                        <span>Titre</span>
                                    </span>
                                </span>
                            </a>
                            <a className="services-button" href="mailto:contact@airvalstudio.com">Nous contacter</a>
                        </div>

                        <div className="services-block-item">
                            <h2 className="services-title">Live session</h2>
                            <p className="services-text">Captation audio et vidéo au studio, post-production complète et étalonnage clé en main.</p>
                            <a className="services-pricing">À partir de
                                <span>500€
                                    <span>TTC
                                        <span>JOUR</span>
                                    </span>
                                </span>
                            </a>
                            <a className="services-button" href="mailto:contact@airvalstudio.com">Nous contacter</a>
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