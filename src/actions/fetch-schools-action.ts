"use server";

import { School, SchoolSchema } from "@/lib/types/school";

import schools_json from "../app/api/education/schools.json";

export async function fetchSchools() {
  const schools: School[] = [];
  const errors: string[] = [];

  schools_json.forEach((element: any) => {
    const result = SchoolSchema.safeParse(element);
    console.log("SUCCESS: " + result.success);
    if (!result.success) {
      const errorMessage = result.error.issues.reduce(
        (acc, issue) => `${acc} | ${issue.path[0]}: ${issue.message}`,
        ""
      );
      errors.push(errorMessage);
    } else {
      schools.push(result.data);
    }
  });

  if (errors.length > 0) throw errors;

  return schools;
}
