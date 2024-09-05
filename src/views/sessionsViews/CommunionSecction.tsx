import { ImagesSliderComunion } from "../../apis/ApiSliders";
import { Slider } from "../../components/slider/Slider";
import { CommunionContent } from "../../components/secctions/communion/CommunionContent";

export const CommunionSecction = () => {
  return (
    <>
      <Slider ImagesSlider={ImagesSliderComunion} />

      <CommunionContent />
    </>
  );
};
