import React from "react";
import { FormContact } from "../formulario/FormContact";
import "./contact.css";

export const ContactContent: React.FC = () => {
  return (
    <>
      <WeddingSecondSection />
    </>
  );
};

export const WeddingSecondSection = () => {
  return (
    <div className="contact-content__second-section">
      <div className="contact-content__second-section-title-container">
        <h1 className="contact-content__second-section-title">
          Contacta ahora
        </h1>
        <h2 className="contact-content__second-section-subtitle">
          Si tienes dudas, preguntas o sugerencias no dudes en contactar, estaré
          encantada de atenderte
        </h2>
      </div>
      <div className="contact-content__second-section-text-container">
        <FormContact />
      </div>
    </div>
  );
};
