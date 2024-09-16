import "../maternity/maternity.css";
import { ContactSession } from "../../contactSession/ContactSession";
import { ImageCategoryFilter } from "../../../utilities/ImageCategoryFilter";
import React from "react";

export const MaternityContent: React.FC = () => {
  return (
    <>
      <MaternityFirstSection />
      <ImageCategoryFilter categoryName="maternity" />
      <ContactSession />
    </>
  );
};

const MaternityFirstSection = () => {
  return (
    <div className="maternity-content">
      <div className="maternity-firstSection-container">
        <h1 className="maternity-title">Fotografía embarazo Mendoza</h1>
        <p className="maternity-text">
          Me encantaría que la sesión refleje una naturalidad auténtica. Más
          allá de capturar imágenes, busco captar las sensaciones, los
          sentimientos, los pequeños detalles y la pureza de cada momento. Mis
          sesiones son fluidas y espontáneas. Aunque te guiaré en todo momento,
          no me enfocaré solo en las poses. Mi objetivo es capturar esa sonrisa
          nerviosa, el toque de mano o la mirada cómplice con tu pareja o hijos.
          Quiero que recuerdes esta etapa de la manera más especial y
          significativa posible.
        </p>
      </div>
    </div>
  );
};
