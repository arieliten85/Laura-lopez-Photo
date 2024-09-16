import { Link } from "react-router-dom";
import "./contactSession.css";
import React from "react";

export const ContactSession: React.FC = () => {
  return (
    <div className="contact-session">
      <h1 className="contact-session__title">Reserva tu cita ahora</h1>
      <p className="contact-session__text">
        Puedes pedir cita para una sesión de comunión o bien contactar conmigo
        para solicitar más información.
      </p>
      <Link to={"/contacto"}>
        <button className="contact-session__button customButton">
          Contactar
        </button>
      </Link>
    </div>
  );
};
