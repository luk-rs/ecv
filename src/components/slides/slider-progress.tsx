"use client";
import React from "react";
import styles from "./slide.module.css";
import { motion, useSpring } from "framer-motion";


export default function SliderProgress({ slide, total }: { slide: number, total: number }) {

  const amount = (slide + 1) / total * 100;
  console.log(`${amount} ${total} ${slide}`);

  return (
    <div className={styles.progress_track}>
      <motion.div
        style={{ height: `${amount}%` }}
        className={styles.progress_thumb}
        animate={{ height: `${amount}%` }}
      />
    </div>
  );
}
