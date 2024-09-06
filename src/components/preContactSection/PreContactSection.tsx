import React from "react";
import "./preContactSection.css";
import { Link } from "react-router-dom";

export const PreContactSection: React.FC = () => {
  return (
    <div className="preContactSection-container">
      <div className="preContactSection-content">
        <div className="preContactSection-preContentWrap">
          <h2 className="preContactSection-preContentTitle">
            ¡Déjame contar tu historia!
          </h2>
          <p className="preContactSection-preContentText">
            Si te has conectado con mi trabajo y sientes una afinidad con las
            imágenes que has visto, no esperes más para dar el siguiente paso.
            Estoy emocionada por la oportunidad de conocerte, escuchar tus
            historias y ser parte de los momentos especiales de tu vida.
            Permíteme capturar la belleza y la magia de tu familia, embarazo,
            recién nacido o cualquier otro momento importante que desees
            inmortalizar. ¡Contáctame hoy mismo para agendar una sesión y
            descubrir cómo puedo transformar esos momentos en recuerdos que
            atesorarás para siempre!
          </p>
          <Link to={"/contacto"}>
            <button className="customButton preContactSection-button">
              contactar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
