import "../smashCake/smashCake.css";
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

export const SmashCakeContent = () => {
  return (
    <>
      <div className="smashCake-content">
        <SmashCakeFirstSection />
      </div>
      <SmashCakeImagesGallery />

      <ContactSession />
    </>
  );
};

const SmashCakeFirstSection = () => {
  return (
    <div className="smashCake-firstSection-container">
      <h1 className="smashCake-title">sesión de fotos smash cake Mendoza</h1>
      <p className="smashCake-text">
        Celebrar el primer año de tu bebé es un acontecimiento muy especial, y
        ¿qué mejor manera de conmemorarlo que con una sesión de fotos llena de
        diversión y dulzura? En una sesión Smash Cake, tu pequeño disfruta
        explorando y saboreando su pastel de cumpleaños, ¡y yo estaré ahí para
        capturar cada instante de alegría y travesura! Utilizo un entorno
        encantador en Castellón para crear un ambiente festivo y lleno de color
        que hará de estas fotos algo verdaderamente único. Mi enfoque es
        totalmente personalizado, adaptándome a tus gustos y necesidades. Quiero
        que esta sesión sea una experiencia inolvidable para tu bebé y toda la
        familia. Cada imagen reflejará la personalidad y la felicidad de tu
        pequeño en su primer cumpleaños.
      </p>
    </div>
  );
};

const SmashCakeImagesGallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories: ImagesSeccionProps[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1504437484202-613bb51ce359?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1507946116609-bfed19728fdf?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1503463168353-9d883c7f5255?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1604824621328-5c03580f92bc?q=80&w=1708&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1595678399575-3b3cfe7c8864?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      image:
        "https://plus.unsplash.com/premium_photo-1676501714610-e2ac8cdca720?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <div className="smashCake-gallery-container">
        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid item xs={12} sm={4} key={category.id}>
              <Card className="smashCake-gallery-card">
                <CardMedia
                  className="smashCake-gallery-card_media"
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
              right: 25,
              zIndex: 1300,
              width: 50,
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
