import { ImagesHeadLineSlider } from "../../apis/ImagesHeadLineSlider";
import { FamilyContent } from "../../components/secctions/family/FamilyContent";
import { Slider } from "../../components/slider/Slider";

export const FamilySeccion = () => {
  return (
    <>
      <Slider ImagesHeadLineSlider={ImagesHeadLineSlider} filterName="family" />
      <FamilyContent />
    </>
  );
};
