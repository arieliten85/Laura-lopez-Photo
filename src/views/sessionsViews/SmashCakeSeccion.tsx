import { ImagesHeadLineSlider } from "../../apis/ImagesHeadLineSlider";
import { SmashCakeContent } from "../../components/secctions/smashCake/SmashCakeContent";
import { Slider } from "../../components/slider/Slider";

export const SmashCakeSeccion = () => {
  return (
    <>
      <Slider
        ImagesHeadLineSlider={ImagesHeadLineSlider}
        filterName="smashCake"
      />
      <SmashCakeContent />
    </>
  );
};
