"use server";

import { School, SchoolSchema } from "@/models/school";

import schools_json from "./schools.json";

export async function fetchSchools() {
  const schools: School[] = [];
  const errors: string[] = [];

  schools_json.forEach((element: any) => {
    const result = SchoolSchema.safeParse(element);

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
