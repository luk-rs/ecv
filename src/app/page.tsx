

import Education from '@/components/education/education';
import Personal from '@/components/personal/personal';
import Welcome from '@/components/welcome/welcome';
import styles from './page.module.css';

const dictionary: { [key: string]: JSX.Element } = {
  "welcome": <Welcome />,
  "personal": <Personal />,
  "education": <Education />
};
const builder = (link: string, idx: number) => {

  const elem = dictionary[link] || link;
  return (
    <section id={link} key={`home-section-${idx}`}>
      {elem}
    </section>
  )
}

export default async function Home() {

  const splitted = process.env.HTML_SECTIONS
    ?.split(',') ?? [];

  const sections = splitted
    .map((section, idx) => builder(section, idx));


  return (
    <main className={styles.main}>
      {sections}
    </main>
  )
}
