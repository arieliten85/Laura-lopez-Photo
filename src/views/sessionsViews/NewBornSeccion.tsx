import { ImagesSliderNewBornSeccion } from "../../apis/ApiSliders";
import { NewBornContent } from "../../components/secctions/newBorn/NewBornContent";
import { Slider } from "../../components/slider/Slider";

export const NewBornSeccion = () => {
  return (
    <>
      <Slider ImagesSlider={ImagesSliderNewBornSeccion} />
      <NewBornContent />
    </>
  );
};
