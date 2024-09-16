import React from "react";
import { ImagesHeadLineSlider } from "../apis/ImagesHeadLineSlider";
import { ContactContent } from "../components/contact/ContactContent";

import { Slider } from "../components/slider/Slider";

export const Contact: React.FC = () => {
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
