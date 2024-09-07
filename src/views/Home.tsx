import { AboutSection } from "../components/aboutSection/AboutSection";
import { CategorySection } from "../components/categorySection/CategorySection";

import { GalerySection } from "../components/gallerySection/GallerySection";
import { PreContactSection } from "../components/preContactSection/PreContactSection";
import { Testimonials } from "../components/testimonialSection/TestimonialSection";

import { Slider } from "../components/slider/Slider";
import { ImagesHeadLineSlider } from "../apis/ImagesHeadLineSlider";

export const Home = () => {
  return (
    <>
      <Slider ImagesHeadLineSlider={ImagesHeadLineSlider} filterName="home" />
      <AboutSection />
      <GalerySection />
      <CategorySection />
      <Testimonials />
      <PreContactSection />
    </>
  );
};
