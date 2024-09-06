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
      <div className="footer__container">
        <div className="footer__column">
          <h3 className="footer__heading">Redes</h3>
          <div className="footer__social">
            <Link to="/instagram" className="footer__social-link">
              <FaInstagram className="footer__social-icon" />
            </Link>
            <Link to="/facebook" className="footer__social-link">
              <FaFacebookF className="footer__social-icon" />
            </Link>
            <Link to="/whatsapp" className="footer__social-link">
              <FaWhatsapp className="footer__social-icon" />
            </Link>
          </div>
        </div>
        <div className="footer__column">
          <h3 className="footer__heading">Accesibilidad</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/mapa-del-sitio" className="footer__list-link">
                Mapa del sitio <FaMapMarkerAlt className="footer__icon" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__heading">Contacto</h3>
          <ul className="footer__list">
            <li className="footer__item">Tel: +54-15-888-888</li>
            <li className="footer__item">Lun - Vie: 09:00 AM - 19:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copy-text">
          Copyright © 2024. Todos los derechos reservados. creado por AriDev
        </p>
      </div>
    </footer>
  );
};
