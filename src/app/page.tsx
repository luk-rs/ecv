'use client'

import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        section1
      </section>
      <section className={styles.section2}>
        section2
      </section>
      <section id='who' className={styles.section3}>
        section3
      </section>
    </main>
  )
}
