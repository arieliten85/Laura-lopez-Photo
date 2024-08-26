import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "./footerSection.css";

export const FooterSection: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-heading">Redes</h3>
          <div className="footer-social">
            <Link to="/instagram" className="footer-social-link">
              <FaInstagram className="footer-social-icon" />
            </Link>
            <Link to="/facebook" className="footer-social-link">
              <FaFacebookF className="footer-social-icon" />
            </Link>
            <Link to="/whatsapp" className="footer-social-link">
              <FaWhatsapp className="footer-social-icon" />
            </Link>
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Accesibilidad</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <Link to="/instagram" className="footer-social-link">
                Mapa del sitio <FaMapMarkerAlt className="footer-icon" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Contacto</h3>
          <ul className="footer-list">
            <li className="footer-item">Tel: +54-15-888-888</li>
            <li className="footer-item">Lun - Vie: 09:00 AM - 19:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copy-text">
          Copyright © 2024. Todos los derechos reservados. creado por AriDev
        </p>
      </div>
    </footer>
  );
};
