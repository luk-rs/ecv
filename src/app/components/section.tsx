import styles from "./section.module.css";
import React, { Component, useEffect, useRef } from "react";

export interface SectionProps {
  idx: number;
  active: number;
}

export default function Section(props: SectionProps) {
  const refElem = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (props.idx == props.active && refElem.current)
      refElem.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
  }, [props.active]);

  const className = `${styles.section} ${styles["section" + props.idx]} ${
    props.idx === props.active ? styles.active : styles.inactive
  }`;

  return (
    <div ref={refElem} className={className}>
      Page {props.idx}
    </div>
  );
}
