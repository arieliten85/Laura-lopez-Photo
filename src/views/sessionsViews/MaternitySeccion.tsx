import React from "react";
import { ImagesHeadLineSlider } from "../../apis/ImagesHeadLineSlider";
import { MaternityContent } from "../../components/secctions/maternity/MaternityContent";
import { Slider } from "../../components/slider/Slider";

export const MaternitySeccion: React.FC = () => {
  return (
    <>
      <Slider
        ImagesHeadLineSlider={ImagesHeadLineSlider}
        filterName="maternity"
      />
      <MaternityContent />
    </>
  );
};
