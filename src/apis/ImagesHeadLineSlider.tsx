import home01 from "../assets/slider/headline/home/img01.avif";
import home02 from "../assets/slider/headline/home/img02.avif";
import home03 from "../assets/slider/headline/home/img03.avif";

import communion01 from "../assets/slider/headline/communion/img01.jpg";
import family01 from "../assets/slider/headline/family/img01.avif";
import smashCake01 from "../assets/slider/headline/smashCake/img01.avif";
import babySixMoths01 from "../assets/slider/headline/sixMonths/img01.jpg";
import newBorn01 from "../assets/slider/headline/newBorn/img01.jpg";
import maternity01 from "../assets/slider/headline/maternity/img01.jpg";
import weddings01 from "../assets/slider/headline/weeding/img01.avif";
import contact01 from "../assets/slider/headline/contact/img01.avif";

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
