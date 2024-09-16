import { Slider } from "../../components/slider/Slider";
import { CommunionContent } from "../../components/secctions/communion/CommunionContent";
import { ImagesHeadLineSlider } from "../../apis/ImagesHeadLineSlider";
import React from "react";

export const CommunionSecction: React.FC = () => {
  return (
    <>
      <Slider
        ImagesHeadLineSlider={ImagesHeadLineSlider}
        filterName="communion"
      />
      <CommunionContent />
    </>
  );
};
