import styles from "./logo.module.css"
import logo_src from "../../../public/logo.svg";
import { Teko, Sacramento } from "next/font/google"
import Image from "next/image";

const teko = Teko({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Logo() {
  return (
    <div className={styles.logo_container}>
      <div className={styles.logo_logo} />
      <a
        href="mailto:santos8@gmail.com"
        className={`${styles.logo_email} ${teko.className}`}
      >
        LS@lucarosa
      </a>
    </div>
  );
}