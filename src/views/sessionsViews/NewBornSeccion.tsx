import { ImagesHeadLineSlider } from "../../apis/ImagesHeadLineSlider";
import { NewBornContent } from "../../components/secctions/newBorn/NewBornContent";
import { Slider } from "../../components/slider/Slider";

export const NewBornSeccion = () => {
  return (
    <>
      <Slider
        ImagesHeadLineSlider={ImagesHeadLineSlider}
        filterName="newBorn"
      />
      <NewBornContent />
    </>
  );
};
