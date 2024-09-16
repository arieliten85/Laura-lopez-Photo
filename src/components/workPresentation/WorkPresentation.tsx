import React from "react";
import "./workPresentation.css";
import { Link } from "react-router-dom";
export const WorkPresentation: React.FC = () => {
  return (
    <div className="galerySection-container">
      <div className="content-text">
        <h1>Mi trabajo, tus recuerdos</h1>
        <h2>
          Te invito a guardar los mejores recuerdos de tu familia, el mejor
          regalo que te puedes hacer a ti mismo y a los tuyos.
        </h2>
      </div>
      <div className="content-data">
        <p>
          La fotografía es una forma de capturar los recuerdos de las diferentes
          etapas de la vida. Desde la infancia hasta la vejez, las fotografías
          nos permiten revivir momentos especiales, compartirlos con los demás y
          crear un legado para las generaciones futuras. <br />
          <br /> Las fotografías son un tesoro que nos ayuda a recordar el
          pasado y nos da consuelo en los momentos difíciles. Son una forma
          maravillosa de preservar los recuerdos y conectarnos con nuestro
          pasado.
        </p>
        <Link to={"/gallery"}>
          <button className="customButton content-data-button">
            Imagenes que identifican mi estilo
          </button>
        </Link>
      </div>
    </div>
  );
};
