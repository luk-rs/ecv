"use client";

// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from "./page.module.css";
import Section from "./components/section";
import { useEffect, useRef, useState } from "react";
import { fromEvent, interval } from "rxjs";
import { throttle } from "rxjs/operators";

// const inter = Inter({ subsets: ['latin'] })

const sections: number[] = [0, 1, 2, 3, 4];

export default function Home() {
  const [activePage, setActivePage] = useState(0);

  const renderedSections = sections.map((section) => (
    <Section idx={section} active={activePage} key={`section-${section}`} />
  ));
  console.log("initLen " + renderedSections.length);

  useEffect(() => {
    function nextPageBounded(direction: number) {
      let possibility = activePage + direction;
      possibility = Math.min(renderedSections.length - 1, possibility);
      possibility = Math.max(0, possibility);
      return possibility;
    }

    const subscription = fromEvent<WheelEvent>(window, "wheel", {
      passive: false,
    })
      .pipe(throttle(() => interval(500)))
      .subscribe((event) => {
        event.preventDefault();

        const direction = event.deltaY > 0 ? 1 : -1;
        const nextPage = nextPageBounded(direction);

        if (nextPage === activePage) return;

        setActivePage(nextPage);
      });

    return () => {
      subscription.unsubscribe();
    };
  }, [activePage]);

  return <main className={styles.main}>{renderedSections}</main>;
}
