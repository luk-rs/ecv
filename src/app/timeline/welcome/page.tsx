"use client";

import { motion } from "framer-motion";
import { ReactNode, Children, isValidElement, cloneElement, ReactElement, useEffect, useState } from "react";
import { timer } from "rxjs";
import Image from "next/image";
import welcomeMe from "../../../../public/welcome-me.jpg"
import styles from "./page.module.css"

const sentences: ReactNode[] = [
  <p key="sentence-1">
    Hello fellow human.
  </p>,
  <p key="sentence-2">
    My name is <b style={{ color: "var(--ecv-green)" }}>Luis Santos</b>, a proud father of 2 👦🏼👶🏻
  </p>,
  <p key="sentence-3">
    located in Vila Real, <b style={{ color: "var(--ecv-green)" }}> Portugal</b>.
  </p>,
  <p key="sentence-4">
    I have <b style={{ color: "var(--ecv-green)" }}> 12 years</b> of experience developing software
  </p>,
  <p key="sentence-5">
    currently as a <b style={{ color: "var(--ecv-green)" }}> Lead Software Engineer</b>.
  </p>,
  <p key="sentence-6">
    Thanks for visiting and enjoy the ride… 🚀
  </p>,
];

const TIME_PER_CHAR = 0.05;

const getDuration = (children: ReactNode) => TIME_PER_CHAR * getTextContent(children).length;
const getTextContent = (element: ReactNode): string => {

  if (!element)
    return "";

  return !isValidElement(element)
    ? element as string
    : Children.map(element.props.children, (child) =>
      getTextContent(child)
    ).join("");
}

const Typewriter = ({ children, prevDelay }: { children: ReactNode, prevDelay: number }) => {

  const [rendering, setRendering] = useState(false)

  useEffect(() => {
    const sub = timer(prevDelay * 1000)
      .subscribe(_ => {
        setRendering(true);
      })
    return () => sub.unsubscribe();

  }, []);

  const typing = styles.typing;
  const duration = getDuration(children);
  const steps = Math.floor(duration / TIME_PER_CHAR);

  const render = cloneElement(children as ReactElement, {
    className: styles.welcome_p,
    style: {
      animation: `${typing} ${duration}s steps(${steps}, end)`
    }
  });
  return (
    <div className="welcome_typewriter">
      {!rendering && (<></>) || render}
    </div>
  );
};

const Pic = () => {

  const [rendering, setRendering] = useState(false);

  useEffect(() => {
    const sub = timer(700)
      .subscribe(_ => {
        console.log("renderpic")
        setRendering(true);
      });

    return () => sub.unsubscribe();
  }, []);

  return (
    <div className={`${styles.welcome_pic} ${rendering && styles.welcome_pic_visible}`}>
      <Image src={welcomeMe} alt={""} />
    </div>
  )
};


export default function Welcome() {
  return (
    <div className={styles.welcome_container}>
      <Pic />
      {sentences.map((sentence, idx) => {
        const key = `sentence-${idx}-animated`;
        const previous = sentences.slice(0, idx);
        const prevDelay = idx === 0
          ? .5
          : .5 + previous.map(sentence => getDuration(sentence)).reduce((acc, cur) => acc + cur, 0);
        return (
          <Typewriter key={key} prevDelay={prevDelay} >
            {sentence}
          </Typewriter>
        );
      })}
    </div>
  );
}
