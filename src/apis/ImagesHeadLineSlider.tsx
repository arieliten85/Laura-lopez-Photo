import home01 from "../assets/home/slider/headline/img01.avif";
import home02 from "../assets/home/slider/headline/img02.avif";
import home03 from "../assets/home/slider/headline/img03.avif";

import communion01 from "../assets/communion/slider/headline/img01.jpg";
import family01 from "../assets/family/slider/headline/img01.avif";
import smashCake01 from "../assets/smashCake/slider/headline/img01.avif";
import babySixMoths01 from "../assets/sixMonths/slider/headline/img01.jpg";
import newBorn01 from "../assets/newBorn/slider/headline/img01.jpg";
import maternity01 from "../assets/maternity/slider/headline/img01.jpg";
import weddings01 from "../assets/weeding/slider/headline/img01.avif";
import contact01 from "../assets/contact/slider/headline/img01.avif";

export interface HeadlineSliderProps {
  img: string;
  section: string;
}
export const ImagesHeadLineSlider: HeadlineSliderProps[] = [
  {
    img: home01,
    section: "home",
  },
  {
    img: home02,
    section: "home",
  },
  {
    img: home03,
    section: "home",
  },

  {
    img: communion01,
    section: "communion",
  },

  {
    img: family01,
    section: "family",
  },

  {
    img: smashCake01,
    section: "smashCake",
  },

  {
    img: babySixMoths01,
    section: "babySixMoths",
  },

  {
    img: newBorn01,
    section: "newBorn",
  },

  {
    img: maternity01,
    section: "maternity",
  },

  {
    img: weddings01,
    section: "weddings",
  },
  {
    img: contact01,
    section: "contact",
  },
];
