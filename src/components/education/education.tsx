
import { fetchSchools } from "@/actions/fetch-schools-action";
import { School } from "@/lib/types/school";
import styles from "./education.module.css";

export default async function Education() {

  let schools: School[] = [];
  schools = await fetchSchools();

  return (
    <div className={styles.education}>
      {schools.map(school => <>{school.name + " => " + school.level}<br /></>)}
    </div>
  )
}

