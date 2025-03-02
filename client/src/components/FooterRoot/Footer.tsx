import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Nom de l'entreprise */}
        <div className="footer-brand">
          <h2>l'Atelier Photo Montpellier</h2>
        </div>

        {/* Liens utiles */}
        <div className="footer-links">
          <a href="/contact">Contact</a>
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/cgv">CGV</a>
        </div>

        {/* Réseaux sociaux */}
        <div className="footer-social">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} l'Atelier Photo Montpellier - Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
