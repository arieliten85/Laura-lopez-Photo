import { ImagesSliderWeddingSeccion } from "../apis/ApiSliders";

import { Slider } from "../components/slider/Slider";
import { WeddingContent } from "../components/wedding/WeddingContent";

export const Wedding = () => {
  return (
    <>
      <Slider ImagesSlider={ImagesSliderWeddingSeccion} />
      <WeddingContent />
    </>
  );
};
