import { Link } from "react-router-dom";

import "./contactSession.css";

export const ContactSession = () => {
  return (
    <div className="contact-session">
      <h1 className="contact-session-title">Reserva tu cita ahora</h1>
      <p className="contact-session-text">
        Puedes pedir cita para una sesión de comunión o bien contactar conmigo
        para solicitar más informació
      </p>
      <Link to={"/contacto"}>
        <button className="customButton contact-session-button">
          Contatar
        </button>
      </Link>
    </div>
  );
};
