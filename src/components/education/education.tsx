
import { School } from "@/models/school";
import EducationRenderer from "./educationRenderer";

type EducationProps = {
  schools: School[];
}

export default function Education({ schools }: EducationProps) {

  return (
    <>
      <EducationRenderer schools={schools} />
    </>
  )
}
