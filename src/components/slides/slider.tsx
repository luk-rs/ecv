"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { fromEvent, tap, throttle, interval, map } from 'rxjs';
import styles from './slide.module.css';
import { ReactNode, useEffect } from "react";
import SliderProgress from './slider-progress';
import { SliderState } from '@/app/page';

const wheelDirection$ = fromEvent<WheelEvent>(window, 'wheel', { passive: false })
  .pipe(tap(event => event.preventDefault()))
  .pipe(throttle(_ => interval(1000)))
  .pipe(map(event => Math.sign(event.deltaY)));


const Slide = ({ children, idx, state: { activeSlide, setActiveSlide, direction } }: { children: ReactNode, idx: number, state: SliderState }) => {

  return <motion.div
    style={{ zIndex: idx * 10 }} className={styles.slide}
    initial={{ y: idx === activeSlide ? 0 : "100%" }}
    animate={{ y: idx <= activeSlide ? 0 : "100%" }}
    exit={{ opacity: 0 }}
    transition={{ ease: direction > 0 ? 'circOut' : 'circIn' }}>
    {children}
  </motion.div>
};

export default function Slider({ children, state: { activeSlide, setActiveSlide, direction, setDirection } }: {
  children: ReactNode[],
  state: SliderState
}) {

  const drawSlides: (state: SliderState) => ReactNode[] = () => children.map((child, idx) => {
    const nth = idx + 1;
    const nth_key = `slide_container_${nth}_${children.length}`;
    return (
      <Slide
        key={nth_key}
        idx={idx}
        state={{ activeSlide, setActiveSlide, direction, setDirection }} >
        {child}
      </Slide>
    );
  });

  useEffect(() => {
    const sub = wheelDirection$
      .subscribe(sign => {

        setDirection(sign);
        setActiveSlide(prevSlide => {
          const unbounded = prevSlide + sign;
          const max_bound = Math.min(unbounded, children.length - 1);
          const slide = Math.max(max_bound, 0);

          return slide;
        });

      });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return (
    <div className={styles.container} >
      <AnimatePresence initial={false}>
        {drawSlides({ activeSlide, setActiveSlide, direction, setDirection })}
      </AnimatePresence>
      <SliderProgress slide={activeSlide} total={4} />
    </div>);
}