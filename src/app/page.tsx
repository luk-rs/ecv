"use client";

// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from "./page.module.css";
import Section from "./components/section";
import { useEffect, useState } from "react";
import { fromEvent, interval } from "rxjs";
import { throttle } from "rxjs/operators";
import WhoAmI from "./components/sections/whoami";
import CircleCues from "./components/circle-cues";

// const inter = Inter({ subsets: ['latin'] })

const sections: React.ReactNode[] = [
  <WhoAmI key="WhoAmI" />,
  <div key="key1">Page 1</div>,
  <div key="key2">Page 2</div>,
  <div key="key3">Page 3</div>,
  <div key="key4">Page 4</div>,
];

export default function Home() {
  const [activePage, setActivePage] = useState(0);

  const renderedSections = sections.map((section, idx) => {
    const sectionKey = `section-${idx}`;
    return (
      <Section idx={idx} active={activePage} key={sectionKey}>
        {section}
      </Section>
    );
  });

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
        console.log("DELTA " + direction);
        const nextPage = nextPageBounded(direction);

        if (nextPage === activePage) return;

        setActivePage(nextPage);
      });

    return () => {
      subscription.unsubscribe();
    };
  }, [activePage]);

  console.log("sections " + renderedSections.length);

  return (
    <main className={styles.main}>
      {renderedSections}
      <CircleCues active={activePage} amount={renderedSections.length} />
    </main>
  );
}
