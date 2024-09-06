import "../newBorn/newBorn.css";
import {
  Grid,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import { ImagesSeccionProps } from "../../../interfaces/imagesSecction";
import { ContactSession } from "../../contactSession/ContactSession";

export const NewBornContent = () => {
  return (
    <>
      <div className="newBorn-content">
        <NewBornFirstSection />
      </div>
      <NewBornImagesGallery />

      <ContactSession />
    </>
  );
};

const NewBornFirstSection = () => {
  return (
    <div className="newBorn-firstSection-container">
      <h1 className="newBorn-title">Sesión fotografía new born en Mendoza</h1>
      <p className="newBorn-text">
        Fotografia New born en Mendoza. <br></br> <br></br>
        Cuando nace un bebé, nace una mamá y un papá. Los primeros días de
        vuestro bebé recién nacido pasan volando y son un momento único e
        irrepetible, por eso no hay nada más bonito que recordarlo para siempre.
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
        aseguramos de tener un espacio disponible, ya que la sesión se llevará a
        cabo en los primeros días de vida del bebé.
      </p>
      <br></br> <br></br>
      <h1 className="newBorn-text-question">¿DÓNDE SE REALIZA LA SESIÓN?</h1>
      <p className="newBorn-text">
        Estas sesiones siempre las realizo en mi estudio en la ciudad de Godoy
        Cruz, Mendoza, de 10:00 a 14:00. Aquí tengo todo preparado para que se
        sientan como en casa, con una temperatura ideal para que todos estén
        cómodos. Mi estudio está ubicado en una zona céntrica de Godoy Cruz, lo
        que garantiza un ambiente relajado y acogedor para capturar esos
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
        ¡Definitivamente! La participación de los hermanos mayores dependerá en
        gran medida de su edad. Cuando son pequeños, puede ser un desafío que
        cooperen, ya que aún no pueden sostener al bebé y han experimentado
        muchos cambios recientemente. Pasan de ser el centro de atención a
        compartir el cariño de la familia, ¡lo cual puede ser un gran ajuste! A
        pesar de todo lo nuevo que están viviendo, su amor por el nuevo
        integrante de la familia es inmenso, y no faltarán los besos y abrazos.
        Esos momentos espontáneos y llenos de ternura son ideales para capturar
        fotos que atesorarás por siempre.
      </p>
    </div>
  );
};

const NewBornImagesGallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories: ImagesSeccionProps[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1542644384-49f9febd8443?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1676400361902-3968d3bc4bd4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1630650916169-87efcfd2cd3a?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1611883916975-459a79cd0ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1605988178022-c85ec62c7267?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/flagged/photo-1551367361-c4fde64cd97d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handleClickOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="newBorn-gallery-container">
        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid item xs={12} sm={4} key={category.id}>
              <Card className="newBorn-gallery-card">
                <CardMedia
                  className="newBorn-gallery-card_media"
                  component="img"
                  image={category.image}
                  onClick={() => handleClickOpen(category.image)}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogContent className="MuiDialogContent-root">
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              zIndex: 1300,
            }}
          >
            <AiOutlineClose size={24} color="#fff" />
          </IconButton>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Expanded"
              className="expanded-image"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
