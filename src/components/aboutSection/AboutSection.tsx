import React from "react";
import "./aboutSection.css";

export const AboutSection: React.FC = () => {
  return (
    <div className="about-section">
      <p className="about-section__subtitle">
        Estudio de fotografía en Mendoza, Argentina.
      </p>
      <h1 className="about-section__title">Laura López.</h1>
      <p className="about-section__description">
        Mi pasión es capturar los momentos más preciados de la vida familiar.
        Desde los tiernos primeros días de los recién nacidos hasta la
        celebración de bodas y bautismos, me especializo en inmortalizar esos
        instantes que cuentan historias y crean recuerdos duraderos.
      </p>
    </div>
  );
};
