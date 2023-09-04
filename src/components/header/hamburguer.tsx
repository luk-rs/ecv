'use client'

import Link from "next/link";
import { Fragment, useState } from "react";
import styles from './hamburguer.module.css';


export type HamburguerProps = {
  links: string[]
}
const Hamburguer = ({ links }: HamburguerProps) => {

  const [opened, setOpened] = useState(false);

  function scrollTo(anchor: string) {
    setOpened(false);
    const element = document.getElementById(anchor);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  const linkFragments = links.map((link, idx) => (
    <Fragment key={`aside-link-${idx}`}>
      <Link href={`#${link}`} onClick={() => scrollTo(link)}>
        {link}
      </Link>
    </Fragment>));

  return (
    <nav>
      <label className={styles.hamburguer_menu} >
        <input
          type="checkbox"
          checked={opened}
          readOnly
          title="hamburguer"
          name="hamburguer"
          onClick={() => setOpened(!opened)} />
      </label>
      <aside className={styles.hamburguer_sidebar}>
        {linkFragments}
      </aside>
    </nav>);
}

export default Hamburguer;
