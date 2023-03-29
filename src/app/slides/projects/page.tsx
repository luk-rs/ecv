
"use client"

import { MouseEventHandler, useState } from "react";
import styles from "./page.module.css"
import INTOUCH_PNG from "../../../../public/intouch.png"
import RPM_PNG from "../../../../public/rpm.png"
import IGNITE_PNG from "../../../../public/ignite.png"
import CAM2_JPG from "../../../../public/cam2.jpg"
import SINCH_JPG from "../../../../public/sinch.jpg"
import HOLOBUILDER_JPG from "../../../../public/holobuilder.jpg"
import Image, { StaticImageData } from "next/image";

interface Project {
  title: string,
  description: string,
  details: string,
  image: StaticImageData,
  hashtags: string[]
}

const projects: Project[] = [
  {
    title: "Intouch",
    description: "An application store that manages CI output and generates differentials providing automatic setups and updates.",
    details: `Engineered and architected the platform.
    The platform was composed by one desktop application accompanied by a windows service, two web services, a setup generator tool, and a CI analyser tool.
    Used by customers to receive auto-updates, by QAs to manage version releases and by CS to sync with clients versions.
    Support for multiple distribution channels.
    Run-time translations.
    Push Notifications.`,
    image: INTOUCH_PNG,
    hashtags: ["dotnet", "wpf", "aspnet", "cSharp", "sql", "entityFramework", "dapper", "rx", "windowsServices", "CI", "azureDevops", "unitTests", "integrationTests", "regressionTests", "staticAnalysis", "CD", "aws", "azure", "kubernetes", "docker", "terraform", "cdn", "s3Buckets", "bashScripting", "powershellScripting", "scrum", "kanban"]
  },
  {
    title: "CAM2",
    description: "An high precision metrology software targeting industries such as automative and aerospace which enabled the user to verify correctness of production against what was projected.",
    details: `Developed features and performed required maintenaince.
    Integrated new hardware and firmware versions into the platform.
    Improved performance either by refactoring or fixing complexity issues.
    Integrated new UX feedback and elements.
    Engineered an automatic alignment algorithm based on genetic algorithms.`,
    image: CAM2_JPG,
    hashtags: ["dotnet", "cSharp", "wpf", "cuda", "math", "algorithms", "3d", "rendering", "mechanics", "CAD", "CI", "bitbucket", "unit-tests", "scrum", "staticAnalysis"]
  },
  {
    title: "RPM",
    description: "A platform for repeated part measurement and inspection.",
    details: `A platform composed by 3 applications, a desktop application targetting factory workers who performed inspections, a backend to gather the metadata from inspections and a backoffice targetting production managers.
    Lowered learning curve of CAM2 based on better UX on the desktop application.
    Helped managers by providing multiple visualization tools on the metadata being tracked.
    Automatic trend analysis calculations on the tracked data.
    Push notifications based on inspection alerts.`,
    image: RPM_PNG,
    hashtags: ["dotnet", "cSharp", "wpf", "3d", "rendering", "aspnet", "javascript", "aureliaJs", "threeJs", "sql", "CI", "bitbucket", "scrum"]
  },
  {
    title: "Sinch SDK",
    description: "A unified client to all Sinch services under the form of a Nuget package.",
    details: `Engineered the beta and alpha versions of the package.
    Wrote the DSL to unify all supported services.
    Supported SMS, MMS and a myriad of messaging services (WhatsApp, Telegram, Instagram, Kakao, Line, … ).
    Supported phone number provision and management.
    Designed for extensibility (logging, configurations, …).
    Designed for enhanced error handling and reporting.`,
    image: SINCH_JPG,
    hashtags: ["dotnet", "multiPlatform", "api", "DSL", "CI", "github", "unitTests", "integrationTests", "messaging", "audio", "video", "kanban"]
  },
  {
    title: "Ignite",
    description: "A bootstrapping and management platform.",
    details: `Create applications based on templates.
    Support for backends in c#, Rust.
    Support for SSPA frontend applications.
    Azure devops compatible.
    Integrated CI on templates with support for build, unit testing, static and vulnerability analysis.
    Integrated CD on templates with support for integration testing, contract testing.
    Automatic infrastructure as code generation for deployments on AWS.`,
    image: IGNITE_PNG,
    hashtags: ["dotnet", "cSharp", "backstageIo", "javascript", "react", "templates", "CI", "azureDevops", "unitTests", "integrationTests", "contractTests", "CD", "docker", "aws", "scrum", "kanban"]
  },
  {
    title: "Holobuilder",
    description: "A platform for construction progress management.",
    details: `Implement features and bug fixing.
    Support users and authorization managment.
    Support for project metadata.
    Salesforce integration.
    Support for third party construction softwares integration.`,
    image: HOLOBUILDER_JPG,
    hashtags: ["java", "kotlin", "3d", "rendering", "threeJs", "CI", "bitbucket", "gradle", "CD", "docker", "azure", "kanban"]
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
        <div>
          {info.details.split("\n").map((line, idx) => {
            const key = `project-details-${idx}`;
            return <p key={key}>{line}</p>;
          })}
        </div>
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