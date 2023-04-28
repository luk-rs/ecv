"use client";

import Logo from "@/components/logo/logo";
import Slider from "@/components/slides/slider";
import { ReactNode, useState } from "react";
import Bubbles from "./slides/bubbles/page";
import Projects from "./slides/projects/page";
import Welcome from "./slides/welcome/page";

export interface SliderState {
  activeSlide: number,
  setActiveSlide: (slide: (prevSlide: number) => number) => void,
  direction: number,
  setDirection: (slide: number) => void
}


const Home = () => {

  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const state: SliderState = { activeSlide, setActiveSlide, direction, setDirection }

  const slides = (): ReactNode[] => [
    // <Welcome key="slide-1" />,
    // <Projects key="slide-2" />,
    <Bubbles key="slide-2" />,
    // <p key="slide-3">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>,
    // <p key="slide-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p >
  ]
  return (
    <>
      <Logo />
      <Slider state={state}>
        {[...slides()]}
      </Slider>
    </>
  );
};

export default Home;