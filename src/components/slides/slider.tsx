"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { fromEvent, tap, throttle, interval, map } from 'rxjs';
import styles from './slide.module.css';
import { ReactNode, useEffect, useState } from "react";
import SliderProgress from './slider-progress';

const wheelDirection$ = fromEvent<WheelEvent>(window, 'wheel', { passive: false })
  .pipe(tap(event => event.preventDefault()))
  .pipe(throttle(_ => interval(1000)))
  .pipe(map(event => Math.sign(event.deltaY)));

export default function Slider({ children }: { children: ReactNode[] }) {
  const [slide, setSlide] = useState<number>(0);

  const drawSlides = () => children.map((child, idx) => {


    const nth = idx + 1;
    const nth_key = `slide_container_${nth}_${children.length}`;

    return (
      <motion.div
        key={nth_key} className={styles.slide}
        style={{ zIndex: nth * 10 }}
        initial={{
          y: idx === slide ? 0 : "100%"
        }}
        animate={{
          y: idx <= slide ? 0 : "100%"
        }}
        exit={{
          opacity: 0
        }}
        transition={{ type: "spring", stiffness: 111 }}>
        {child}
      </motion.div >
    );
  });

  useEffect(() => {
    const sub = wheelDirection$
      .subscribe(direction => {

        setSlide(prevSlide => {
          const update = prevSlide + direction;
          const max_bound = Math.min(update, children.length - 1);
          const min_bound = Math.max(max_bound, 0);

          return min_bound;
        });

      });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return (
    <div className={styles.container} >
      <AnimatePresence initial={false}>
        {drawSlides()}
      </AnimatePresence>
      <SliderProgress slide={slide} total={children.length} />
    </div>);
}