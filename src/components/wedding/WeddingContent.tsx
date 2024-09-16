import "./wedding.css";
import "../workPresentation/workPresentation.css";
import { Testimonials } from "../testimonialSection/TestimonialSection";
import { ImageCategoryFilter } from "../../utilities/ImageCategoryFilter";
import React from "react";
import { Link } from "react-router-dom";

export const WeddingContent: React.FC = () => {
  return (
    <>
      <div className="wedding-intro">
        <h1 className="wedding-intro__title">Fotógrafo de bodas en Mendoza</h1>
        <h3 className="wedding-intro__subtitle">
          Recuerdos vivos en cada fotografía
        </h3>
        <p className="wedding-intro__description">
          Soy Laura López, y esta web es mi espacio para compartir mi amor por
          la fotografía de bodas. Desde mi estudio en Godoy Cruz (Mendoza),
          viajo por toda la cuidad para capturar los momentos más especiales de
          tu gran día.
        </p>
      </div>
      <WorkPresentation />
      <ImageCategoryFilter categoryName="wedding" />

      <Testimonials />
    </>
  );
};

const WorkPresentation = () => {
  return (
    <div className="galerySection-container">
      <div className="content-text">
        <h1>Mi trabajo, tus recuerdos</h1>
        <h2>
          Te invito a poder guardar cada emoción, cada mirada y cada gesto del
          día de tu Boda, para que con el paso del tiempo se te siga erizando la
          piel.
        </h2>
      </div>
      <div className="content-data">
        <p>
          Sumérgete en una selección especial de 100 imágenes cautivadoras que
          reflejan mi estilo como fotógrafa de bodas. Cada fotografía captura
          momentos auténticos, abrazos llenos de amor y emociones genuinas.
          Estas imágenes son una representación de mi compromiso de crear
          recuerdos inolvidables para cada pareja que tengo el privilegio de
          fotografiar. Explora esta galería y déjate llevar por la belleza y la
          espontaneidad de cada historia de amor que he tenido el honor de
          documentar. Estas fotografías muestran mi enfoque en convertir cada
          instante en una obra de arte fotográfica. Bienvenidos a esta
          colección, donde podrás sentirte identificado/a con cada imagen y
          descubrir si mi estilo como fotógrafa de bodas resuena con tus deseos
          y emocione
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
