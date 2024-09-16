import "../family/family.css";
import { ContactSession } from "../../contactSession/ContactSession";
import { ImageCategoryFilter } from "../../../utilities/ImageCategoryFilter";
import React from "react";

export const FamilyContent: React.FC = () => {
  return (
    <>
      <FamilyFirstSection />
      <ImageCategoryFilter categoryName="family" />
      <ContactSession />
    </>
  );
};

const FamilyFirstSection = () => {
  return (
    <div className="family-content">
      <div className="family-firstSection-container">
        <h1 className="family-title">
          Sesión fotográfica de familia en Mendoza
        </h1>
        <p className="family-text">
          La familia es el pilar central de nuestras vidas, y no hay nada más
          preciado que preservar esos instantes únicos juntos. Piensa en tener
          fotografías que capturen la esencia y la unión de tu familia. Desde
          retratos familiares cuidadosamente elaborados hasta tomas espontáneas
          que muestran la auténtica personalidad de cada miembro, mi objetivo es
          crear recuerdos que perduren a lo largo del tiempo. Elijo los lugares
          más encantadores de Mendoza para ofrecer un entorno ideal para tus
          sesiones fotográficas familiares. Mi enfoque es completamente
          personalizado, asegurándome de que cada imagen refleje tus gustos y
          necesidades, haciendo que cada fotografía sea especial y llena de
          significado. Comprendo el valor que tiene la familia para ti, y me
          comprometo a brindarte un servicio impecable, entregándote fotos de la
          más alta calidad que apreciarás por siempre.
        </p>
      </div>
    </div>
  );
};
