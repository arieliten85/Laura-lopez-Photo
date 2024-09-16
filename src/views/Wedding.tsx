import React from "react";
import { ImagesHeadLineSlider } from "../apis/ImagesHeadLineSlider";

import { Slider } from "../components/slider/Slider";
import { WeddingContent } from "../components/wedding/WeddingContent";

export const Wedding: React.FC = () => {
  return (
    <>
      <Slider
        ImagesHeadLineSlider={ImagesHeadLineSlider}
        filterName="weddings"
      />
      <WeddingContent />
    </>
  );
};
