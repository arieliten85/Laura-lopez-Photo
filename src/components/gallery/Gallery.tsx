import React from "react";
import { ImageCategoryFilter } from "../../utilities/ImageCategoryFilter";

export const Gallery: React.FC = () => {
  return (
    <>
      <h1 className="gallery-title">Galaria</h1>
      <ImageCategoryFilter categoryName="gallery" />
    </>
  );
};
