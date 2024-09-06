import "../communion/communion.css";
import cameraIcon from "../../../assets/icono-camera.png";
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

export const CommunionContent = () => {
  return (
    <>
      <div className="communion-content">
        <CommunionFirstSection />
        <CommunionSecondSection />
      </div>
      <CommunionImagesGallery />

      <ContactSession />
    </>
  );
};

const CommunionFirstSection = () => {
  return (
    <div className="communion-firstSection-container">
      <h1 className="communion-title">Fotógrafo de comuniones en Mendoza</h1>
      <p className="communion-text">
        ¡Hola! Soy Laura López, y sería un honor ser tu fotógrafa de comuniones
        en Mendoza. Mi pasión es inmortalizar esos momentos tan especiales en la
        vida de tus hijos y transformarlos en recuerdos que perdurarán por
        siempre. Imagina tener fotografías que narren la historia única de ese
        día tan especial. Desde retratos individuales hasta fotos familiares, mi
        objetivo es capturar la esencia de tu hijo o hija en un ambiente
        relajado y lleno de alegría. Trabajo en los lugares más bellos de
        Mendoza para darle un toque especial y auténtico a tus fotos de
        comunión. Sé lo importante que es este día para ti y tu familia. Por
        eso, mi enfoque es totalmente personalizado, adaptándome a tus gustos y
        necesidades. Cada detalle cuenta, y me comprometo a ofrecerte un
        servicio excepcional y fotografías de alta calidad que siempre
        recordarás con cariño.
      </p>
      <div className="communion-content-icon">
        <img
          className="communion-firstSection-icon"
          src={cameraIcon}
          alt="Logo"
        />
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

const CommunionImagesGallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories: ImagesSeccionProps[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1478906401794-436b072d8452?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1681828890437-004a8b5eec7e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1505377059067-e285a7bac49b?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1515563562861-4d2514edb3e3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1516207336710-1631c23cdc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1509388677691-f96d7931d63b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <div className="communion-gallery-container">
        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid item xs={12} sm={4} key={category.id}>
              <Card className="communion-gallery-card">
                <CardMedia
                  className="communion-gallery-card_media"
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
