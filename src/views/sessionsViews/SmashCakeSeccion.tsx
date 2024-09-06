import { ImagesSliderSmashCakeSeccion } from "../../apis/ApiSliders";
import { SmashCakeContent } from "../../components/secctions/smashCake/SmashCakeContent";
import { Slider } from "../../components/slider/Slider";

export const SmashCakeSeccion = () => {
  return (
    <>
      <Slider ImagesSlider={ImagesSliderSmashCakeSeccion} />
      <SmashCakeContent />
    </>
  );
};
