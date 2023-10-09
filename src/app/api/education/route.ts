import { NextResponse } from "next/server";
import schools_json from "./schools.json";

export async function GET(_: Request) {
  return NextResponse.json(schools_json);
}
