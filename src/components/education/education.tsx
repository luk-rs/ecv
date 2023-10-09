import { fetchSchools } from "@/actions/fetch-schools-action";
import { School } from "@/models/school";
import EducationRenderer from "./educationRenderer";

export default async function Education() {

  let schools: School[] = await fetchSchools();

  return (
    <>
      <EducationRenderer schools={schools} />
    </>
  )
}
