"use client";

import Logo from "@/components/logo/logo";
import Slider from "@/components/slides/slider";
import { ReactNode, useState } from "react";
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

  const paragraphs = (): ReactNode[] => [
    <Welcome key="slide-1" state={state} />,
    <p key="slide-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>,
    <p key="slide-3">"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>,
    <p key="slide-4">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p >
  ]
  return (
    <>
      <Logo />
      <Slider state={state}>
        {[...paragraphs()]}
      </Slider>
    </>
  );
};

export default Home;