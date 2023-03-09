import * as whoami from "../../api/whoami/route";

whoami.GET(new Request("http://site.com")).then((contactInfo) => {
  console.log(contactInfo.birthdate);
});

export default function WhoAmI() {
  return <div>I Am someone</div>;
}
