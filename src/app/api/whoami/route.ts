interface ContactInfo {
  name: string;
  birthdate: Date;
  email: string;
  mobile: string;
  location: URL;
  linkedin: URL;
  title: string;
}

export async function GET(request: Request): Promise<ContactInfo> {
  await Promise.resolve();
  return {
    name: "Luis Santos",
    birthdate: new Date("1987-03-03T09:20:00.000Z"),
    email: "santos8@gmail.com",
    mobile: "+1 123-456-7890",
    location: new URL("https://example.com"),
    linkedin: new URL("https://linkedin.com/in/luis-santos"),
    title: "Software Engineer",
  };
}
