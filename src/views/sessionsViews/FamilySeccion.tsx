import { ImagesSliderFamilySeccion } from "../../apis/ApiSliders";
import { FamilyContent } from "../../components/secctions/family/FamilyContent";
import { Slider } from "../../components/slider/Slider";

export const FamilySeccion = () => {
  return (
    <>
      <Slider ImagesSlider={ImagesSliderFamilySeccion} />
      <FamilyContent />
    </>
  );
};
