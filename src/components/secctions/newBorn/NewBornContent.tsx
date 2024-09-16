import "../newBorn/newBorn.css";
import { ContactSession } from "../../contactSession/ContactSession";
import { ImageCategoryFilter } from "../../../utilities/ImageCategoryFilter";
import React from "react";

export const NewBornContent: React.FC = () => {
  return (
    <>
      <NewBornFirstSection />
      <ImageCategoryFilter categoryName="newBorn" />
      <ContactSession />
    </>
  );
};

const NewBornFirstSection = () => {
  return (
    <div className="newBorn-content">
      <div className="newBorn-firstSection-container">
        <h1 className="newBorn-title">Sesión fotografía new born en Mendoza</h1>
        <p className="newBorn-text">
          Fotografia New born en Mendoza. <br></br> <br></br>
          Cuando nace un bebé, nace una mamá y un papá. Los primeros días de
          vuestro bebé recién nacido pasan volando y son un momento único e
          irrepetible, por eso no hay nada más bonito que recordarlo para
          siempre.
        </p>
        <br></br> <br></br>
        <h1 className="newBorn-text-question">
          EN QUÉ MOMENTO SE REALIZA UNA SESIÓN NEWBORN?
        </h1>
        <p className="newBorn-text">
          Siempre realizo las sesiones de recién nacido durante sus 10 primeros
          días de vida (concretamente entre los días 7 y 10). Aún conserva la
          posición fetal y su sueño es más profundo y será mucho más fácil hacer
          la sesión.
        </p>
        <br></br> <br></br>
        <h1 className="newBorn-text-question">
          ¿CUÁNDO HAY QUE HACER LA RESERVA DE LA FOTOGRAFIA NEWBORN EN MENDOZA?
        </h1>
        <p className="newBorn-text">
          Es fundamental que te pongas en contacto conmigo durante el embarazo
          para conocernos y estimar la fecha aproximada del parto, así podremos
          reservar el día ideal para realizar la sesión. De esta manera, nos
          aseguramos de tener un espacio disponible, ya que la sesión se llevará
          a cabo en los primeros días de vida del bebé.
        </p>
        <br></br> <br></br>
        <h1 className="newBorn-text-question">¿DÓNDE SE REALIZA LA SESIÓN?</h1>
        <p className="newBorn-text">
          Estas sesiones siempre las realizo en mi estudio en la ciudad de Godoy
          Cruz, Mendoza, de 10:00 a 14:00. Aquí tengo todo preparado para que se
          sientan como en casa, con una temperatura ideal para que todos estén
          cómodos. Mi estudio está ubicado en una zona céntrica de Godoy Cruz,
          lo que garantiza un ambiente relajado y acogedor para capturar esos
          momentos tan especiales.
        </p>
        <br></br> <br></br>
        <h1 className="newBorn-text-question">¿PUEDEN PARTICIPAR LOS PAPÁS?</h1>
        <p className="newBorn-text">
          Por su puesto que pueden participar. Yo lo aconsejo porque es un
          recuerdo super bonito, y siempre podréis recordar como cogían entre
          vuestras manos, son tan pequeñines. Para estas fotos os recomiendo que
          traigáis ropa en tonos claritos y, si hacemos alguna foto de familia,
          que vayáis todos conjuntados.
        </p>
        <br></br> <br></br>
        <h1 className="newBorn-text-question">¿Y LOS HERMANOS?</h1>
        <p className="newBorn-text">
          ¡Definitivamente! La participación de los hermanos mayores dependerá
          en gran medida de su edad. Cuando son pequeños, puede ser un desafío
          que cooperen, ya que aún no pueden sostener al bebé y han
          experimentado muchos cambios recientemente. Pasan de ser el centro de
          atención a compartir el cariño de la familia, ¡lo cual puede ser un
          gran ajuste! A pesar de todo lo nuevo que están viviendo, su amor por
          el nuevo integrante de la familia es inmenso, y no faltarán los besos
          y abrazos. Esos momentos espontáneos y llenos de ternura son ideales
          para capturar fotos que atesorarás por siempre.
        </p>
      </div>
    </div>
  );
};
