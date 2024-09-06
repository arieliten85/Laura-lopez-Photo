import "./babySixMoths.css";
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

export const BabySixMothsContent = () => {
  return (
    <>
      <div className="sixMothns-content">
        <SixMothnsFirstSection />
      </div>
      <SixMothnsImagesGallery />

      <ContactSession />
    </>
  );
};

const SixMothnsFirstSection = () => {
  return (
    <div className="sixMothns-firstSection-container">
      <h1 className="sixMothns-title">
        Sesiones de bebé de 6 a 9 meses en estudio
      </h1>
      <p className="sixMothns-text">
        Lo más esencial para estas sesiones de bebés de 6 a 9 meses en estudio
        es que ya se mantengan sentados por sí mismos, pero que aún no estén
        gateando, ¡así evitamos que se escapen del escenario! Este tipo de
        sesión es una de mis favoritas, ya que los bebés suelen reírse muchísimo
        y sus expresiones son adorables. Nos divertimos tanto con ellos, y las
        fotos resultan tan hermosas como las que ves en este post. Cuando
        realizas tu sesión de recién nacido, ya puedes reservar la sesión para
        cuando el bebé tenga entre 6 y 9 meses. Generalmente, a partir de los 4
        meses, los papás se ponen en contacto conmigo para reservar la sesión, y
        juntos vamos viendo cuándo el bebé ya se sienta para concretar la cita.
        En estas sesiones de 6 a 9 meses en estudio, las risas están
        garantizadas, junto con los balbuceos y, sobre todo, las caras de
        felicidad de los papás.
      </p>
    </div>
  );
};

const SixMothnsImagesGallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories: ImagesSeccionProps[] = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1695879245513-44030c0c949a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1445796886651-d31a2c15f3c9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1453342664588-b702c83fc822?q=80&w=1718&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      image:
        "https://plus.unsplash.com/premium_photo-1665296635115-abf751f95e55?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1586537333626-238ebc85e19f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
