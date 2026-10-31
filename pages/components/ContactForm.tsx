
"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "An error occurred.");
            }

            setStatus("MESSAGE ENVOYÉ AVEC SUCCÈS !");
            form.reset();

        } catch (error) {
            setStatus(
                error instanceof Error
                    ? error.message
                    : "UNE ERREUR EST SURVENUE."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="contact-form-section" id="contact">

            <div className="contact-info">

                <span className="contact-form-eyebrow">
                    AIRVAL STUDIO — CONTACT
                </span>

                <div className="contact-info-details">

                    <div className="contact-info-item">
                        <span className="contact-info-label">ADRESSE</span>
                        <Link
                            href="https://maps.app.goo.gl/Rp8Jdm5u6cJLYaXi6"
                            target="_blank"
                        >
                            La Valocherie<br />
                            Rochefort-sur-Loire, 49190 ↗
                        </Link>
                    </div>

                    <div className="contact-info-item">
                        <span className="contact-info-label">EMAIL</span>
                        <Link href="mailto:contact@airvalstudio.com">
                            contact@airvalstudio.com
                        </Link>
                    </div>

                    <div className="contact-info-item">
                        <span className="contact-info-label">TÉLÉPHONE</span>
                        <Link href="tel:+33614190507">
                            +33 6 14 19 05 07
                        </Link>
                    </div>

                </div>

                <div className="contact-info-socials">
                    <Link href="https://instagram.com/airvalstudio" target="_blank">
                        INSTAGRAM ↗
                    </Link>

                    <Link href="https://linkedin.com/company/airvalstudio" target="_blank">
                        LINKEDIN ↗
                    </Link>
                </div>

            </div>


            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                    <div className="contact-field">
                        <label htmlFor="contact-name">NOM</label>
                        <input
                            id="contact-name"
                            name="name"
                            type="text"
                            placeholder="Votre nom"
                            required
                            maxLength={100}
                        />
                    </div>

                    <div className="contact-field">
                        <label htmlFor="contact-email">ADRESSE MAIL</label>
                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            placeholder="votre@email.com"
                            required
                            maxLength={254}
                        />
                    </div>
                </div>

                <div className="contact-field">
                    <label htmlFor="contact-subject">SUJET</label>
                    <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        placeholder="Objet de votre demande"
                        required
                        maxLength={150}
                    />
                </div>

                <div className="contact-field">
                    <label htmlFor="contact-message">MESSAGE</label>
                    <textarea
                        id="contact-message"
                        name="message"
                        placeholder="Parlez-nous de votre projet..."
                        rows={5}
                        required
                        maxLength={5000}
                    />
                </div>

                <div className="contact-form-bottom">
                    <button type="submit" disabled={loading}>
                        {loading ? "ENVOI EN COURS..." : "ENVOYER LE MESSAGE"}
                        <span aria-hidden="true">↗</span>
                    </button>

                    {status && (
                        <p className="contact-form-status" role="status">
                            {status}
                        </p>
                    )}
                </div>
            </form>
        </section>
    );
}
