'use client'

import Link from "next/link";
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <section>LOGO</section>
      <section>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/#who" scroll={true}>Who</Link></li>
            <li><Link href="/#who">Education</Link></li>
            <li><Link href="/#who">Professional</Link></li>
            <li><Link href="/#who">Personal</Link></li>
          </ul>
        </nav>
      </section>
      <section>
        ⎬⎯⎨
      </section>
    </header>
  );
}

export default Header;