import "./babySixMoths.css";
import { ContactSession } from "../../contactSession/ContactSession";
import { ImageCategoryFilter } from "../../../utilities/ImageCategoryFilter";
import React from "react";

export const BabySixMothsContent: React.FC = () => {
  return (
    <>
      <SixMothsFirstSection />
      <ImageCategoryFilter categoryName="babySixMoths" />
      <ContactSession />
    </>
  );
};

const SixMothsFirstSection = () => {
  return (
    <div className="babySixMoths-container">
      <div className="babySixMoths-firstSection-container">
        <h1 className="babySixMoths-title">
          Sesiones de bebé de 6 a 9 meses en estudio
        </h1>
        <p className="babySixMoths-text">
          Lo más esencial para estas sesiones de bebés de 6 a 9 meses en estudio
          es que ya se mantengan sentados por sí mismos, pero que aún no estén
          gateando, ¡así evitamos que se escapen del escenario! Este tipo de
          sesión es una de mis favoritas, ya que los bebés suelen reírse
          muchísimo y sus expresiones son adorables. Nos divertimos tanto con
          ellos, y las fotos resultan tan hermosas como las que ves en este
          post. Cuando realizas tu sesión de recién nacido, ya puedes reservar
          la sesión para cuando el bebé tenga entre 6 y 9 meses. Generalmente, a
          partir de los 4 meses, los papás se ponen en contacto conmigo para
          reservar la sesión, y juntos vamos viendo cuándo el bebé ya se sienta
          para concretar la cita. En estas sesiones de 6 a 9 meses en estudio,
          las risas están garantizadas, junto con los balbuceos y, sobre todo,
          las caras de felicidad de los papás.
        </p>
      </div>
    </div>
  );
};
