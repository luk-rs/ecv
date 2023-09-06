import BirthClock from "./birth-clock";
import styles from "./personal.module.css";

import Image from "next/image";
import ProfilePNG from "../../../public/personal/profile-pic.png";

export default function Personal() {
  return (
    <div className={styles.personal}>
      <h1>X-Ray</h1>
      <section>
        <Labeled label="Name">Luis Carlos Rodrigues Santos</Labeled>
        <Labeled label="Location">Portugal, Vila Real</Labeled>
        <Labeled label="Birth"><>03/03/1987<br /><BirthClock /></></Labeled>
        <Labeled label="Family">I am a proud (and always tired) father of 2 beautiful children</Labeled>
        <Labeled label="Hobbies"><>Football<br />Swimming<br />Cycling</></Labeled>
        <Labeled label="Interests"><>Finances<br />History<br />Philosophy</></Labeled>
      </section>
      <section>
        <Image src={ProfilePNG} height={450} alt="Luis Santos" className={styles.profile_pic} />
      </section>
    </div>
  );
}

type LabelProps = {
  label: string,
  children: React.ReactNode
}

function Labeled(props: LabelProps) {
  return (<>
    <label className={styles.label}>{props.label}</label>
    <div className={styles.labelValue}>{props.children}</div>
  </>);
}