import "./communion.css";
import cameraIcon from "../../../assets/icono-camera.png";
import { ContactSession } from "../../contactSession/ContactSession";
import { ImageCategoryFilter } from "../../../utilities/ImageCategoryFilter";
import React from "react";

export const CommunionContent: React.FC = () => {
  return (
    <>
      <CommunionFirstSection />
      <CommunionSecondSection />
      <ImageCategoryFilter categoryName="communion" />
      <ContactSession />
    </>
  );
};

const CommunionFirstSection = () => {
  return (
    <div className="communion-content">
      <div className="communion-firstSection-container">
        <h1 className="communion-title">Fotógrafo de comuniones en Mendoza</h1>
        <p className="communion-text">
          ¡Hola! Soy Laura López, y sería un honor ser tu fotógrafa de
          comuniones en Mendoza. Mi pasión es inmortalizar esos momentos tan
          especiales en la vida de tus hijos y transformarlos en recuerdos que
          perdurarán por siempre. Imagina tener fotografías que narren la
          historia única de ese día tan especial. Desde retratos individuales
          hasta fotos familiares, mi objetivo es capturar la esencia de tu hijo
          o hija en un ambiente relajado y lleno de alegría. Trabajo en los
          lugares más bellos de Mendoza para darle un toque especial y auténtico
          a tus fotos de comunión. Sé lo importante que es este día para ti y tu
          familia. Por eso, mi enfoque es totalmente personalizado, adaptándome
          a tus gustos y necesidades. Cada detalle cuenta, y me comprometo a
          ofrecerte un servicio excepcional y fotografías de alta calidad que
          siempre recordarás con cariño.
        </p>
        <div className="communion-icon-container">
          <img
            className="communion-firstSection-icon"
            src={cameraIcon}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

const CommunionSecondSection = () => {
  return (
    <div className="communion-secondSection-container">
      <h1 className="communion-title">Descubre mi estilo</h1>
      <p className="communion-text">
        La Primera Comunión es un momento crucial y muy esperado en la vida de
        los niños. Es un acontecimiento que la familia planea con dedicación y
        anticipación, llenos de emoción por lo que representa. Esto lo percibo
        en cada conversación que tengo cuando se realiza la reserva para la
        sesión de fotos. La fotografía de Comunión ha evolucionado, manteniendo
        siempre el deseo de conservar un recuerdo imborrable. No solo capturo la
        ceremonia en sí, sino también realizo una sesión especial dedicada a
        retratar al niño o niña, quienes son los protagonistas de este día tan
        significativo. Viven su Primera Comunión de una manera única, y mi
        objetivo es reflejar esa experiencia en cada imagen.
      </p>
    </div>
  );
};
