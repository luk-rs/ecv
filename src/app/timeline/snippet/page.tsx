"use client";

import styles from "./page.module.css";
import { Fira_Mono, Kanit } from "next/font/google";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import EYE_OVERLAY from "../../../../public/eye_overlay.svg";

const fira_code = Fira_Mono({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
const kanit = Kanit({
  weight: "400",
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

export default function Snippet() {
  const codeElementKey = 'code[class*="language-"]';
  synthwave84[codeElementKey] = {
    ...synthwave84[codeElementKey],
    fontFamily: fira_code.style.fontFamily,
    fontSize: ".7em",
  };

  const overlaysId = "snippet_overlays_15426sdaSDA";
  let [isHovered, setHovered] = useState(false);
  useEffect(() => {
    const element = document.getElementById(overlaysId);
    if (isHovered) {
      console.log("adding hovered to " + element);
      element?.classList.add(styles.snippet_overlays_hovered);
    } else {
      element?.classList.remove(styles.snippet_overlays_hovered);
    }
  }, [isHovered]);

  const hideOverlays = () => setHovered(true);

  const showOverlays = () => setHovered(false);

  return (
    <div className={styles.snippet_wrapper}>
      <div id={overlaysId} className={styles.snippet_overlays}>
        <Image
          src={EYE_OVERLAY}
          alt=""
          width={111}
          className={styles.snippet_eye}
        />
        <p className={`${styles.snippet_text} ${kanit.className}`}>
          #timetospare¿‽?
        </p>
      </div>
      <div
        className={styles.snippet}
        onMouseOver={hideOverlays}
        onMouseOut={showOverlays}
      >
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
    </div>
  );
}
