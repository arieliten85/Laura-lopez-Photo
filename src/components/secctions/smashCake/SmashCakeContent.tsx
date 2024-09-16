import "../smashCake/smashCake.css";

import { ContactSession } from "../../contactSession/ContactSession";
import { ImageCategoryFilter } from "../../../utilities/ImageCategoryFilter";
import React from "react";

export const SmashCakeContent: React.FC = () => {
  return (
    <>
      <SmashCakeFirstSection />
      <ImageCategoryFilter categoryName="smashCake" />
      <ContactSession />
    </>
  );
};

const SmashCakeFirstSection = () => {
  return (
    <div className="smashCake-content">
      <div className="smashCake-firstSection-container">
        <h1 className="smashCake-title">sesión de fotos smash cake Mendoza</h1>
        <p className="smashCake-text">
          Celebrar el primer año de tu bebé es un acontecimiento muy especial, y
          ¿qué mejor manera de conmemorarlo que con una sesión de fotos llena de
          diversión y dulzura? En una sesión Smash Cake, tu pequeño disfruta
          explorando y saboreando su pastel de cumpleaños, ¡y yo estaré ahí para
          capturar cada instante de alegría y travesura! Utilizo un entorno
          encantador en Castellón para crear un ambiente festivo y lleno de
          color que hará de estas fotos algo verdaderamente único. Mi enfoque es
          totalmente personalizado, adaptándome a tus gustos y necesidades.
          Quiero que esta sesión sea una experiencia inolvidable para tu bebé y
          toda la familia. Cada imagen reflejará la personalidad y la felicidad
          de tu pequeño en su primer cumpleaños.
        </p>
      </div>
    </div>
  );
};
