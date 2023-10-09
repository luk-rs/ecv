import { z } from "zod";

const schoolLevelValues = [
  "Pre school",
  "Elementary school",
  "Middle school",
  "High school",
  "Bachelor",
  "Masters",
] as const;

export type SchoolLevel = (typeof schoolLevelValues)[number];

export const SchoolSchema = z.object({
  name: z.string().trim().min(1).max(50),
  level: z.enum(schoolLevelValues),
});

export type School = z.infer<typeof SchoolSchema>;
