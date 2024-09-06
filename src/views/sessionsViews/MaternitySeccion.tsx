import { ImagesSliderMaternitySeccion } from "../../apis/ApiSliders";
import { MaternityContent } from "../../components/secctions/maternity/MaternityContent";
import { Slider } from "../../components/slider/Slider";

export const MaternitySeccion = () => {
  return (
    <>
      <Slider ImagesSlider={ImagesSliderMaternitySeccion} />
      <MaternityContent />
    </>
  );
};
