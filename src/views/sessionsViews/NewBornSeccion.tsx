import { ImagesHeadLineSlider } from "../../apis/ImagesHeadLineSlider";
import { NewBornContent } from "../../components/secctions/newBorn/NewBornContent";
import { Slider } from "../../components/slider/Slider";
import React from "react";
export const NewBornSeccion: React.FC = () => {
  return (
    <>
      <Slider
        ImagesHeadLineSlider={ImagesHeadLineSlider}
        filterName="newBorn"
      />
      <NewBornContent />
    </>
  );
};
