import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { fetchImagesSession } from "../apis/fetchImagesSession";

interface ImageCategoryFilterProps {
  categoryName: string;
}

export const ImageCategoryFilter: React.FC<ImageCategoryFilterProps> = ({
  categoryName,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = fetchImagesSession.filter(
    (image) => image.category === categoryName
  );

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
          {filteredImages.map((image) => (
            <Grid item xs={12} sm={4} key={image.id}>
              <Card className="smashCake-gallery-card">
                <CardMedia
                  className="smashCake-gallery-card_media"
                  component="img"
                  image={image.img}
                  onClick={() => handleClickOpen(image.img)}
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
