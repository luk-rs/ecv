import styles from "./logo.module.css"



export default function Logo() {
  return (
    <div className={styles.logo_container}>
      <div className={styles.logo_logo} />
      <a
        href="mailto:santos8@gmail.com"
        className={styles.logo_email}
      >
        LS@lucarosa
      </a>
    </div>
  );
}