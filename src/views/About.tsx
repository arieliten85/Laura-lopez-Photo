import { ImagesSliderHome } from "../apis/ApiSliders";
import { Slider } from "../components/slider/Slider";

export const About = () => {
  return (
    <>
      <Slider ImagesSlider={ImagesSliderHome} />
    </>
  );
};
