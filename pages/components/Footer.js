
import React from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="container-block">

          <ContactForm />

          {/* FOOTER COPYRIGHT */}
          <div className="footer-block footer-block-legal">
            <div>
              <span className="footer-copyright">
                © {new Date().getFullYear()} Airval Studio, par POLYPHONIA MUSIC.
              </span>

              <span className="footer-cgv">
                <Link href="cgv">Légal & CGV</Link>
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
