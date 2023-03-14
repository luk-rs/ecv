"use client";

import styles from "./page.module.css";
import { Fira_Mono } from "next/font/google";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";

const fira_code = Fira_Mono({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const codeString = `// It's Monday morning, and the coffee hasn't kicked in yet.
// The codebase is a mess, and bugs are crawling out of every file.
// I'm squinting at my screen, trying to figure out where to start.
// Suddenly, my phone rings - it's my boss.
// I take a deep breath and answer the call.

fn main() {
  let day = "Monday";
  let coffee_level = 2;
  let codebase = "mess";

  handle_situation(day, coffee_level, codebase);
}

fn handle_situation(day: &str, coffee_level: i32, codebase: &str) {

  if day == "Monday" && coffee_level < 3 && codebase == "mess" {
      let bugs = find_bugs();
      squint();
      let ringtone = play_ringtone("boss");
      let response = answer_call(ringtone);
      take_deep_breath();
  } else {
    // Everything is under control
  }

}`;

export default function Timeline() {
  const codeElementKey = 'code[class*="language-"]';
  synthwave84[codeElementKey] = {
    ...synthwave84[codeElementKey],
    fontFamily: fira_code.style.fontFamily,
    fontSize: ".7em",
  };

  return (
    <div className={styles.homepage_wrapper}>
      <SyntaxHighlighter
        language="rust"
        style={synthwave84}
        showLineNumbers
        children={codeString}
        customStyle={{
          backgroundImage: undefined,
          lineHeight: 1,
        }}
      />
    </div>
  );
}
