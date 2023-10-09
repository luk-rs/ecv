
import { fetchSchools } from "@/actions/fetch-schools-action";
import Education from '@/components/education/education';
import Personal from '@/components/personal/personal';
import Welcome from '@/components/welcome/welcome';
import { School } from '@/models/school';
import styles from './page.module.css';

const dictionary: (schools: School[]) => { [key: string]: JSX.Element } = (schools) => {
  return {
    "welcome": <Welcome />,
    "personal": <Personal />,
    "education": <Education schools={schools} />
  }
};
const builder = (link: string, idx: number, schools: School[]) => {

  const elem = dictionary(schools)[link] || link;
  return (
    <section id={link} key={`home-section-${idx}`}>
      {elem}
    </section>
  )
}

export default async function Home() {

  const splitted = process.env.HTML_SECTIONS
    ?.split(',') ?? [];

  const skip = 1;

  const schools: School[] = await fetchSchools(); //TODO move to something that makes sense

  const sections = splitted
    .map((section, idx) => builder(section, idx, schools));


  return (
    <main className={styles.main}>
      {sections}
    </main>
  )
}
