import React, { useEffect, useState } from "react";
import styles from "./circle-cues.module.css";

interface CircleCuesProps {
  active: number;
  amount: number;
}

export default function CircleCues(props: CircleCuesProps) {
  const renderedCircles: React.ReactNode[] = Array(props.amount)
    .fill(0)
    .map((_, idx) => {
      const circleKey = `circle-cue-${idx}`;
      const className = `${styles.circle}`;
      return <div className={className} key={circleKey} />;
    });

  const [circles, setCircles] = useState(renderedCircles);

  useEffect(() => {
    let updatedCircles = circles.map((circle, idx) => {
      const updatedClass =
        idx == props.active
          ? `${styles.circle}`
          : idx < props.active
          ? `${styles.circle} ${styles.atTop}`
          : `${styles.circle} ${styles.atBottom}`;

      return React.cloneElement(circle as React.ReactElement, {
        className: updatedClass,
      });
    });

    setCircles(updatedCircles);
  }, [props.active]);

  return (
    <div className={styles.circleHolder}>
      {circles}
      {/* <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={`${styles.circle} ${styles.active}`}></div> */}
    </div>
  );
}

// // Set up the interval timer
// const intervalId = setInterval(() => {
//   const direction = idx % 2 == 0;
//   if (direction) {
//     setActive(`${styles.circle}`);
//   } else {
//     setActive(`${styles.circle} ${styles.active}`);
//   }
//   setIdx(idx + 1);
// }, 1000);
// // Clean up the timer when the component unmounts or the dependency array changes
// return () => clearInterval(intervalId);
