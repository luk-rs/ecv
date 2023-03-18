"use client";

import { motion } from "framer-motion";
import React from "react";

const sentences: React.ReactNode[] = [
  <div key="sentence-1">Hello fellow human</div>,
  <p key="sentence-2">
    My name is <b style={{ color: "#259b7b" }}>Luis Santos</b> and I've been a
    Software Engineer for <i>12</i> years.
  </p>,
  <p key="sentence-3">
    I'm a <b style={{ color: "#259b7b" }}> Lead Software Engineer</b> working{" "}
    <i style={{ fontSize: "1.3em" }}>@</i> FARO Technologies.
  </p>,
  <p key="sentence-4">
    I live in <b style={{ color: "#259b7b" }}> Vila Real</b> 📌 in Portugal.
  </p>,
];

export default function Welcome() {
  return (
    <div
      style={{
        width: "70%",
        fontSize: "3.3em",
        marginLeft: "10%",
        marginBottom: 50,
      }}
    >
      {sentences.map((item, idx) => {
        const key = `sentence-${idx}-animated`;
        return (
          <Sentence key={key} idx={idx}>
            {item}
          </Sentence>
        );
      })}
    </div>
  );
}

function Sentence({
  children,
  idx,
}: {
  children: React.ReactNode;
  idx: number;
}) {
  return (
    <motion.div
      initial={{ x: -211, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.1, delay: 0.11 * idx }}
      viewport={{ amount: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
