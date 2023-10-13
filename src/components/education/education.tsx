"use client";

import { fetchSchools } from "@/actions/fetch-schools-action";
import { School } from '@/models/school';

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import A31_HDR from "../../../public/education/A31_HDR.png";
import CMSJ_HDR from "../../../public/education/CMSJ_HDR.png";
import CNSB_HDR from "../../../public/education/CNSB_HDR.png";
import ECCB_HDR from "../../../public/education/ECCB_HDR.png";
import FEUP_HDR from "../../../public/education/FEUP_HDR.png";
import UM_HDR from "../../../public/education/UM_HDR.png";

import styles from "./education.module.css";


type EducationState = {
  width: number;
  selected: number;
  schools: School[];
}

export default function Education() {

  const divRef = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState<EducationState>({ width: 0, selected: -1, schools: [] });

  function refreshSize() {
    if (divRef.current) setState(prev => ({ ...prev, width: divRef.current!.clientWidth }));
  }

  useEffect(() => {
    fetchSchools()
      .then((result) => {
        setState((prev) => ({ ...prev, schools: result, selected: result.length - 1 }))
      });
  }, []);

  useEffect(() => {
    refreshSize();
  }, [divRef]);

  useEffect(() => {
    const handleResize = () => refreshSize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function schoolSelected(idx: number) {
    setState({ ...state, selected: idx });
  }

  return (
    <div ref={divRef} className={styles.education}>
      <div className={styles.schoolSpotlight}>
        <Spotlight state={state} />
        <div className={styles.carousel}>
          {state.schools.map((school, idx) => <SchoolTile key={`school-pic-${idx}`} idx={idx} school={school} clickHandler={schoolSelected} renderer={state} />)}
        </div>
      </div>
    </div>
  )
}

type SchoolSpotlightProps = {
  state: EducationState;
}

function Spotlight({ state: renderer }: SchoolSpotlightProps) {

  if (renderer.schools.length === 0) return (<></>);
  const school = renderer.schools[renderer.selected];

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
  renderer: EducationState;
  idx: number;
  school: School;
  clickHandler: (idx: number) => void;
}

const schoolsHdr = [A31_HDR, CMSJ_HDR, CNSB_HDR, ECCB_HDR, UM_HDR, FEUP_HDR];

function SchoolTile({ renderer, idx, school, clickHandler }: SchoolTileProps) {

  if (renderer.width === 0)
    return <></>;

  const expandedLeft = () => idx * 50;
  const collapsedLeft = () => renderer.width - (6 - idx) * 50;
  const left = renderer.selected >= idx ? expandedLeft() : collapsedLeft();

  // const width = renderer.width - expandedLeft();

  return (<>
    <Image src={schoolsHdr[idx]} alt={school.name}
      className={styles.schoolTile}
      style={{
        left: left,
        opacity: renderer.selected <= idx ? 1 : 0.7,
      }}
      fill
      onClick={_ => clickHandler(idx)} />
  </>
  );

}
