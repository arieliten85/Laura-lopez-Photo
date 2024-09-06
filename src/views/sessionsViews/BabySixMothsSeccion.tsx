import { ImagesSliderBabySixMonthsSeccion } from "../../apis/ApiSliders";
import { BabySixMothsContent } from "../../components/secctions/babySixMoths/BabySixMothsContent";

import { Slider } from "../../components/slider/Slider";

export const BabySixMothsSeccion = () => {
  return (
    <>
      <Slider ImagesSlider={ImagesSliderBabySixMonthsSeccion} />
      <BabySixMothsContent />
    </>
  );
};
