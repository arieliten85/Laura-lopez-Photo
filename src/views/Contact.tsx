import { ImagesHeadLineSlider } from "../apis/ImagesHeadLineSlider";
import { ContactContent } from "../components/contact/ContactContent";

import { Slider } from "../components/slider/Slider";

export const Contact = () => {
  return (
    <>
      <Slider
        ImagesHeadLineSlider={ImagesHeadLineSlider}
        filterName="contact"
      />
      <ContactContent />
    </>
  );
};
