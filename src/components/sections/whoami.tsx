import { ContactInfo } from "@/app/api/whoami/route";
import { useRouter } from "next/router";

export default function WhoAmI() {
  const router = useRouter();
  const baseApiRoute = router.basePath + "/api";
  console.log(baseApiRoute);
  async function inspect() {
    const response = await fetch(baseApiRoute + "/whoami");
    const json = await response.json();
    const contactInfo: ContactInfo = {
      ...json,
      birthdate: new Date(json.birthdate),
    };
    console.log(contactInfo.birthdate.getDay());
  }

  inspect();
  return <div>I Am someone</div>;
}
