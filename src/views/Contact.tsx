import { ImagesSliderContactSeccion } from "../apis/ApiSliders";
import { ContactContent } from "../components/contact/ContactContent";

import { Slider } from "../components/slider/Slider";

export const Contact = () => {
  return (
    <>
      <Slider ImagesSlider={ImagesSliderContactSeccion} />
      <ContactContent />
    </>
  );
};
