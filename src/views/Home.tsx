import { AboutSection } from "../components/aboutSection/AboutSection";
import { CategorySection } from "../components/categorySection/CategorySection";
import { GalerySection } from "../components/gallerySection/GallerySection";
import { Testimonials } from "../components/testimonialSection/TestimonialSection";

export const Home = () => {
  return (
    <>
      <AboutSection />
      <GalerySection />
      <CategorySection />
      <Testimonials />
    </>
  );
};
