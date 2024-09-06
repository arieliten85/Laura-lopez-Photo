import "../family/family.css";

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

export const FamilyContent = () => {
  return (
    <>
      <div className="family-content">
        <FamilyFirstSection />
      </div>
      <FamilyImagesGallery />

      <ContactSession />
    </>
  );
};

const FamilyFirstSection = () => {
  return (
    <div className="family-firstSection-container">
      <h1 className="family-title">Sesión fotográfica de familia en Mendoza</h1>
      <p className="family-text">
        La familia es el pilar central de nuestras vidas, y no hay nada más
        preciado que preservar esos instantes únicos juntos. Piensa en tener
        fotografías que capturen la esencia y la unión de tu familia. Desde
        retratos familiares cuidadosamente elaborados hasta tomas espontáneas
        que muestran la auténtica personalidad de cada miembro, mi objetivo es
        crear recuerdos que perduren a lo largo del tiempo. Elijo los lugares
        más encantadores de Mendoza para ofrecer un entorno ideal para tus
        sesiones fotográficas familiares. Mi enfoque es completamente
        personalizado, asegurándome de que cada imagen refleje tus gustos y
        necesidades, haciendo que cada fotografía sea especial y llena de
        significado. Comprendo el valor que tiene la familia para ti, y me
        comprometo a brindarte un servicio impecable, entregándote fotos de la
        más alta calidad que apreciarás por siempre.
      </p>
    </div>
  );
};

const FamilyImagesGallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories: ImagesSeccionProps[] = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1661475948697-d810b6d36888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFtaWx5fGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1661906824543-cd944c5f628c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhbWlseXxlbnwwfDB8MHx8fDA%3D",
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1661281339432-2521e2775419?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      image:
        "https://plus.unsplash.com/premium_photo-1661281211518-7bc99840fe64?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      image:
        "https://plus.unsplash.com/premium_photo-1680720885676-81e3bdee4237?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      image:
        "https://plus.unsplash.com/premium_photo-1681997327084-3e4c4b737269?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <div className="family-gallery-container">
        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid item xs={12} sm={4} key={category.id}>
              <Card className="family-gallery-card">
                <CardMedia
                  className="family-gallery-card_media"
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
