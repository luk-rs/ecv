"use client";

import Slider from "@/components/slides/slider";
import styles from "./page.module.css";
import Welcome from "./welcome/page";
import { ReactNode } from "react";

const paragraphs: ReactNode[] = [
  <Welcome key="slide-1" />,
  <p key="slide-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>,
  <p key="slide-3">"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>,
  <p key="slide-4">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p >
]

const Home = () => {

  return (
    <Slider>
      {paragraphs}
    </Slider>
  );
};

export default Home;