import { CSSProperties } from "react";
import Image from "next/image";
import me_img from "../../../../public/welcome-me_1.png"
import styles from "./page.module.css"

interface Typing {
  color: string | null,
  char: string
}

const text = (content: string): Typing[] =>
  content.split("").map(char => { return { char, color: null } });
const green = (content: string): Typing[] =>
  content.split("").map(char => { return { char, color: "var(--ecv-green)" } });

const experience_from = (year: number, month: number) => {
  const now = new Date();
  const targetDate = new Date(year, month - 1); // month is zero-indexed in JavaScript, so we subtract 1
  const msDiff = now.getTime() - targetDate.getTime();
  const msInYear = 1000 * 60 * 60 * 24 * 365.25;
  const years = Math.ceil(msDiff / msInYear);
  return years;
};

const experience = experience_from(2011, 11);

const typings: Typing[] = [
  text("Hello fellow human.\n\n My name is "),
  green("Luis Santos"),
  text(", a proud father of 2 located in Vila Real, "),
  green("Portugal"),
  text(`.\n\n I have ${experience} years of experience developing software currently as a `),
  green("Lead Software Engineer"),
  text(".\n\n Thanks for visiting and enjoy the ride… "),
]
  .reduce((acc: Typing[], cur) => acc.concat(cur), []);

const TIME_PER_CHAR = .02;

const Pic = () => {
  const animation = `${styles.welcome_pic_appear} ${TIME_PER_CHAR * typings.length / 2}s linear ${0}s forwards`
  const appear: CSSProperties = {
    animation
  };
  return (
    <div
      className={styles.welcome_pic}
      style={appear}>
      <Image src={me_img} alt={""} />
    </div>
  )
};

const Typewriter = () => {
  return (
    <p className={styles.welcome_typewriter}>
      {typings.map((typing, idx) => {
        const animation = `${styles.typewriter_char} ${TIME_PER_CHAR}s step-start ${0.5 + TIME_PER_CHAR * idx}s forwards`;
        const typewrite: CSSProperties = {
          animation,
          color: typing.color ? typing.color : "inherit",
          visibility: "hidden"
        };
        const key = `typewriter-char-${idx}`

        if (typing.char == "\n")
          return <br key={key}></br>;

        return typing.color
          && <b key={key} style={typewrite}>{typing.char}</b>
          || <span key={key} style={typewrite}>{typing.char}</span>;
      })}
    </p>
  );
}

const Page = () => {
  return (
    <div
      className={styles.welcome_container}
    >
      <Typewriter />
      <Pic />
    </div>
  );
}

export default Page;