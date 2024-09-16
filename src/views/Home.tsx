import { AboutSection } from "../components/aboutSection/AboutSection";
import { CategorySection } from "../components/categorySection/CategorySection";
import { PreContactSection } from "../components/preContactSection/PreContactSection";
import { Testimonials } from "../components/testimonialSection/TestimonialSection";
import { Slider } from "../components/slider/Slider";
import { ImagesHeadLineSlider } from "../apis/ImagesHeadLineSlider";
import { WorkPresentation } from "../components/workPresentation/WorkPresentation";
import React from "react";

export const Home: React.FC = () => {
  return (
    <>
      <Slider ImagesHeadLineSlider={ImagesHeadLineSlider} filterName="home" />
      <AboutSection />
      <WorkPresentation />
      <CategorySection />
      <Testimonials />
      <PreContactSection />
    </>
  );
};
