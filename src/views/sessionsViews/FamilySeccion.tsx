import React from "react";
import { ImagesHeadLineSlider } from "../../apis/ImagesHeadLineSlider";
import { FamilyContent } from "../../components/secctions/family/FamilyContent";
import { Slider } from "../../components/slider/Slider";

export const FamilySeccion: React.FC = () => {
  return (
    <>
      <Slider ImagesHeadLineSlider={ImagesHeadLineSlider} filterName="family" />
      <FamilyContent />
    </>
  );
};
