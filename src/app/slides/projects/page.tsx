import styles from "./page.module.css"
import arrow_img from "../../../../public/arrow.svg"
import Image from "next/image";


const ProjectSpotlight = () => {
  return (
    <div className={styles.spotlight}>
      <div className={styles.title} >Projects</div>
      <div className={styles.buttons} >
        <div />
        <div />
      </div>
      <div className={styles.project_viewer} ></div>
    </div>);
}

const Projects = () => {
  return (
    <div className={styles.container}>
      <ProjectSpotlight />
    </div>
  );
}

export default Projects;