import styles from './page.module.css';

export default function Home() {

  const sections = process.env.HTML_SECTIONS?.split(',').map((section, idx) => (
    <section
      key={`home-section-${idx}`}
      className={styles.section}
      id={`${section}`}>
      {section}
    </section>
  ));

  return (
    <main className={styles.main}>
      {sections}
    </main>
  )
}
