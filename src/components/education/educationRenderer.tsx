"use client";

import { School } from "@/models/school";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import A31_HDR from "../../../public/education/A31_HDR.png";
import CMSJ_HDR from "../../../public/education/CMSJ_HDR.png";
import CNSB_HDR from "../../../public/education/CNSB_HDR.png";
import ECCB_HDR from "../../../public/education/ECCB_HDR.png";
import FEUP_HDR from "../../../public/education/FEUP_HDR.png";
import UM_HDR from "../../../public/education/UM_HDR.png";

import styles from "./education.module.css";

type EducationRendererProps = {
  schools: School[];
}

type EducationRendererState = {
  width: number;
  selected: number;
}

export default function EducationRenderer({ schools }: EducationRendererProps) {

  const divRef = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState<EducationRendererState>({ width: 0, selected: schools.length - 1 });

  function refreshSize() {
    if (divRef.current) setState({ ...state, width: divRef.current.clientWidth });
  }

  useEffect(() => {
    console.log("effect")
    refreshSize();
  }, [divRef]);

  useEffect(() => {
    const handleResize = () => refreshSize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function schoolSelected(idx: number) {
    console.log(schools[idx].name);
    setState({ ...state, selected: idx });
  }
  return (
    <div ref={divRef} className={styles.education}>
      <SchoolSpotlight renderer={state} schools={schools} />
      {schools.map((school, idx) => <SchoolTile key={`school-pic-${idx}`} idx={idx} school={school} clickHandler={schoolSelected} renderer={state} />)}
    </div>
  )
}

type SchoolSpotlightProps = {
  renderer: EducationRendererState;
  schools: School[];
}

function SchoolSpotlight({ renderer, schools }: SchoolSpotlightProps) {

  const school = schools[renderer.selected];

  return (
    <div className={styles.spotlight}>
      <h2>{school.name}</h2>
      <h3>{school.level}</h3>
      <p>
        <br />
        <span>{school.description}</span>
      </p>
    </div>
  );
}

type SchoolTileProps = {
  renderer: EducationRendererState;
  idx: number;
  school: School;
  clickHandler: (idx: number) => void;
}

const schoolsHdr = [A31_HDR, CMSJ_HDR, CNSB_HDR, ECCB_HDR, UM_HDR, FEUP_HDR];

function SchoolTile({ renderer, idx, school, clickHandler }: SchoolTileProps) {

  if (renderer.width === 0) return <></>;

  const expandedLeft = () => idx * 50;
  const collapsedLeft = () => renderer.width - (6 - idx) * 50;
  const left = renderer.selected >= idx ? expandedLeft() : collapsedLeft();

  const width = renderer.width - expandedLeft();

  return (
    <>
      <Image src={schoolsHdr[idx]} alt={school.name}
        width={width} height={600}
        className={styles.schoolPic}
        style={{
          left: left,
          opacity: renderer.selected <= idx ? 1 : 0.5,
        }}
        onClick={_ => clickHandler(idx)} />
    </>
  );

}