
"use client"

import { MouseEventHandler, useState } from "react";
import styles from "./page.module.css"
import INTOUCH_PNG from "../../../../public/intouch.png"
import Image, { StaticImageData } from "next/image";

interface Project {
  title: string,
  description: string,
  details: string | undefined,
  image: StaticImageData,
  hashtags: string[]
}

const projects: Project[] = [
  {
    title: "Intouch",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor eget mi vitae fringilla. Praesent ultricies ante eget lobortis rhoncus. Sed vitae arcu consequat, auctor orci ac, rhoncus nisl.",
    details: "Hello",
    image: INTOUCH_PNG,
    hashtags: ["dotnetdeveloper", "csharpcode", "dotnetcore", "aspnetmvc", "dotnetopensource", "dotnetnuke",
      "microsoftdeveloper", "dotnetframework", "azuredevelopment", "dotnetwebdevelopment"]
  },
  {
    title: "CAM2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor eget mi vitae fringilla. Praesent ultricies ante eget lobortis rhoncus. Sed vitae arcu consequat, auctor orci ac, rhoncus nisl.",
    details: "Hello",
    image: INTOUCH_PNG,
    hashtags: ["dotnetdeveloper", "csharpcode", "dotnetcore", "aspnetmvc", "dotnetopensource", "dotnetnuke",
      "microsoftdeveloper", "dotnetframework", "azuredevelopment", "dotnetwebdevelopment"]
  },
  {
    title: "RPM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor eget mi vitae fringilla. Praesent ultricies ante eget lobortis rhoncus. Sed vitae arcu consequat, auctor orci ac, rhoncus nisl.",
    details: "Hello",
    image: INTOUCH_PNG,
    hashtags: ["dotnetdeveloper", "csharpcode", "dotnetcore", "aspnetmvc", "dotnetopensource", "dotnetnuke",
      "microsoftdeveloper", "dotnetframework", "azuredevelopment", "dotnetwebdevelopment"]
  },
  {
    title: "GDPR SDK",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor eget mi vitae fringilla. Praesent ultricies ante eget lobortis rhoncus. Sed vitae arcu consequat, auctor orci ac, rhoncus nisl.",
    details: "Hello",
    image: INTOUCH_PNG,
    hashtags: ["dotnetdeveloper", "csharpcode", "dotnetcore", "aspnetmvc", "dotnetopensource", "dotnetnuke",
      "microsoftdeveloper", "dotnetframework", "azuredevelopment", "dotnetwebdevelopment"]
  },
  {
    title: "Sinch SDK",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor eget mi vitae fringilla. Praesent ultricies ante eget lobortis rhoncus. Sed vitae arcu consequat, auctor orci ac, rhoncus nisl.",
    details: "Hello",
    image: INTOUCH_PNG,
    hashtags: ["dotnetdeveloper", "csharpcode", "dotnetcore", "aspnetmvc", "dotnetopensource", "dotnetnuke",
      "microsoftdeveloper", "dotnetframework", "azuredevelopment", "dotnetwebdevelopment"]
  }
]

const ProjectsTitle = () => <div className={styles.title}>Projects</div>;

const Arrow = ({ className, onClick }: { className: string, onClick: MouseEventHandler }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={className}
    onClick={onClick}
  >
    <path
      d="m473 246-43-44-27-27-18-18c-3.22-3.22-8.53-8-10.43-12-4.52-9.51 3.47-18.27 13.43-15.43 4.39 1.25 7.85 5.29 11 8.43l19 19 69 69c4.6 4.6 21.43 20.61 23.69 25 1.23 2.41 1.47 5.33 1.25 8-.44 5.51-4.25 8.3-7.94 12l-18 18-77 77c-4.69 4.69-15.21 16.55-21 18.35-5.5 1.71-11.91-.44-13.57-6.36-.77-2.74-.53-7.44.74-9.99 1.96-3.91 17.68-18.85 21.83-23l51-51c5.97-5.97 20.83-19.3 24-26H17c-10.17-.05-15.42-1.72-14.98-12.99.33-8.62 8.17-9 14.98-9.01h456Z"
    />
  </svg>
)

const ProjectsNavigationButtons = ({ project, setProject }: { project: number, setProject: (project: number) => void }) => {

  function navigateRight(): void {
    const target = project + 1
    const bounded = Math.min(target, projects.length - 1);
    setProject(bounded);
  }

  function navigateLeft(): void {
    const target = project - 1
    const bounded = Math.max(target, 0);
    setProject(bounded);
  }

  return (
    <div className={styles.buttons} >
      <Arrow className={styles.left_arrow} onClick={navigateLeft} />
      <div className={styles.arrow_text}>{project + 1}/{projects.length}</div>
      <Arrow className={styles.right_arrow} onClick={navigateRight} />
    </div>
  )
};

const ProjectSlide = ({ project, info, idx }: { project: number, info: Project, idx: number }) => {

  return (
    <div
      className={styles.slide}
      style={{
        transform: `translateX(-${project * 100}%)`
      }} >
      <div><h1>{info.title}</h1></div>
      <div><p>{info.description}</p></div>
      <div>
        <div className={styles.project_pic}>
          <Image src={info.image} alt="" />
        </div>
        <div> {info.details}</div>
      </div>
      <div className={styles.hashtags}>
        <p>
          {info.hashtags.map((hashtag, _) => {
            return `#${hashtag} `;
          })}
        </p>
      </div>
    </div>);

}

const ProjectsSlider = ({ project }: { project: number }) => {

  return (
    <div
      className={styles.project_viewer}>
      {projects.map((info, idx) => {
        const key = `projects-project-${idx}`;
        return (
          <ProjectSlide key={key} project={project} info={info} idx={idx} />
        );
      })}
    </div>
  )
};

const ProjectSpotlight = () => {

  const [project, setProject] = useState(0);
  return (
    <div className={styles.spotlight}>
      <ProjectsTitle />
      <ProjectsNavigationButtons project={project} setProject={setProject} />
      <ProjectsSlider project={project} />
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