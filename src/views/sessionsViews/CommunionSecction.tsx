import { Slider } from "../../components/slider/Slider";
import { CommunionContent } from "../../components/secctions/communion/CommunionContent";
import { ImagesHeadLineSlider } from "../../apis/ImagesHeadLineSlider";

export const CommunionSecction = () => {
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
