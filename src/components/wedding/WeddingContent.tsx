import { useState } from "react";
import { ImagesSeccionProps } from "../../interfaces/imagesSecction";
import "./wedding.css";
import {
  Grid,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";

export const WeddingContent = () => {
  return (
    <>
      <div className="wedding-content__first-section">
        <h1 className="wedding-content__title">
          Fotógrafo de bodas en Mendoza
        </h1>
        <h3 className="wedding-content__subtitle">
          Recuerdos vivos en cada fotografía
        </h3>
        <p className="wedding-content__description">
          Soy Laura López, y esta web es mi espacio para compartir mi amor por
          la fotografía de bodas. Desde mi estudio en Godoy Cruz (Mendoza),
          viajo por toda la cuidad para capturar los momentos más especiales de
          tu gran día.
        </p>
      </div>

      <WeddingSecondSection />

      <WeddingImagesGallery />
    </>
  );
};

export const WeddingSecondSection = () => {
  return (
    <div className="wedding-content__second-section">
      <div className="wedding-content__second-section-title-container">
        <h1 className="wedding-content__second-section-title">
          Mi trabajo, tus recuerdos
        </h1>
        <h2 className="wedding-content__second-section-subtitle">
          Te invito a guardar los mejores recuerdos de tu familia, el mejor
          regalo que te puedes hacer a ti mismo y a los tuyos.
        </h2>
      </div>
      <div className="wedding-content__second-section-text-container">
        <p className="wedding-content__second-section-description">
          La fotografía es una forma de capturar los recuerdos de las diferentes
          etapas de la vida. Desde la infancia hasta la vejez, las fotografías
          nos permiten revivir momentos especiales, compartirlos con los demás y
          crear un legado para las generaciones futuras. <br />
          <br /> Las fotografías son un tesoro que nos ayuda a recordar el
          pasado y nos da consuelo en los momentos difíciles. Son una forma
          maravillosa de preservar los recuerdos y conectarnos con nuestro
          pasado.
        </p>

        <button className="customButton contact-session-button">
          Imágenes que identifican mi estilo
        </button>
      </div>
    </div>
  );
};

const WeddingImagesGallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories: ImagesSeccionProps[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1519379169146-d4b170447caa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1664530452597-fc48cc4a4e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1681841585407-8cc4d427783c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1505427438062-ad01a5cad565?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      image:
        "https://plus.unsplash.com/premium_photo-1661326211451-83c3cefe9402?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <div className="sixMothns-gallery-container">
        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid item xs={12} sm={4} key={category.id}>
              <Card className="sixMothns-gallery-card">
                <CardMedia
                  className="sixMothns-gallery-card_media"
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
