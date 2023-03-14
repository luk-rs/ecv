import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Navbar() {
  const links: React.ReactNode[] = [
    <Link href="/" key="home-nav" children="Home" />,
    <Link href="/cv" key="cv-nav" children="CV" />,
  ];

  return (
    <nav className={styles.nav}>
      <ul className={inter.className}>
        {links.map((link, idx) => {
          const key = `nav-li-${idx}`;
          return <li key={key}>{link}</li>;
        })}
      </ul>
    </nav>
  );
}
