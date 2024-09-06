import "../maternity/maternity.css";
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

export const MaternityContent = () => {
  return (
    <>
      <div className="maternity-content">
        <MaternityFirstSection />
      </div>
      <MaternityImagesGallery />

      <ContactSession />
    </>
  );
};

const MaternityFirstSection = () => {
  return (
    <div className="maternity-firstSection-container">
      <h1 className="maternity-title">Fotografía embarazo Mendoza</h1>
      <p className="maternity-text">
        Me encantaría que la sesión refleje una naturalidad auténtica. Más allá
        de capturar imágenes, busco captar las sensaciones, los sentimientos,
        los pequeños detalles y la pureza de cada momento. Mis sesiones son
        fluidas y espontáneas. Aunque te guiaré en todo momento, no me enfocaré
        solo en las poses. Mi objetivo es capturar esa sonrisa nerviosa, el
        toque de mano o la mirada cómplice con tu pareja o hijos. Quiero que
        recuerdes esta etapa de la manera más especial y significativa posible.
      </p>
    </div>
  );
};

const MaternityImagesGallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories: ImagesSeccionProps[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1493101670003-a9c7db5858b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0ZXJuaXR5fGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1664053011441-e61b42285903?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1555961064-4bc7ec634bbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hdGVybml0eXxlbnwwfDB8MHx8fDA%3D",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1664994524000-f753aaa0a594?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1hdGVybml0eXxlbnwwfDB8MHx8fDA%3D",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1566780760836-c405d35230b1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <div className="maternity-gallery-container">
        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid item xs={12} sm={4} key={category.id}>
              <Card className="maternity-gallery-card">
                <CardMedia
                  className="maternity-gallery-card_media"
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
