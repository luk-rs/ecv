'use client'

import { useEffect, useState } from "react";
import styles from "./personal.module.css";

export default function Personal() {
  return (
    <div className={styles.personal}>
      <h1>X-Ray</h1>
      <Labeled label="Name">Luis Carlos Rodrigues</Labeled>
      <Labeled label="Location">Portugal, Vila Real</Labeled>
      <Labeled label="Birth"><>03/03/1987 <BirthClock /></></Labeled>
      <Labeled label="Fun fact">I am a proud and always tired father of 2 beautiful children</Labeled>
      <Labeled label="Hobbies"><>Football<br />Swimming<br />Cycling</></Labeled>
      <Labeled label="Interests"><>Finances<br />History<br />Philosophy</></Labeled>
    </div>
  );
}

type LabelProps = {
  label: string,
  children: JSX.Element | string
}

function Labeled(props: LabelProps) {
  return (<>
    <label className={styles.label}>{props.label}</label>
    <div className={styles.labelValue}>{props.children}</div>
  </>);
}

const MS = {
  inAYear: 1000 * 60 * 60 * 24 * 365.25,
  inADay: 1000 * 60 * 60 * 24,
  inAnHour: 1000 * 60 * 60,
  inAMinute: 1000 * 60,
  inASecond: 1000
}

type BirthTimer = {
  years: number,
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
}
function BirthClock() {
  const birth = Date.UTC(1987, 3, 3, 9, 20, 0);
  const [birthTimer, setBirthTimer] = useState<BirthTimer | null>(null)

  function updateBirthTimer() {
    const now = Date.now();
    const diff = now.valueOf() - birth.valueOf();

    const reduceTime =
      (value: number, target: number, remainder: number | undefined = undefined) => Math.floor((remainder === undefined ? value : value % remainder) / target);

    const years = reduceTime(diff, MS.inAYear);
    const days = reduceTime(diff, MS.inADay, MS.inAYear);
    const hours = reduceTime(diff, MS.inAnHour, MS.inADay);
    const minutes = reduceTime(diff, MS.inAMinute, MS.inAnHour);
    const seconds = reduceTime(diff, MS.inASecond, MS.inAMinute);

    setBirthTimer({ years, days, hours, minutes, seconds });
  }

  useEffect(() => {
    updateBirthTimer();
    const interval = setInterval(() => updateBirthTimer(), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {birthTimer !== null && <>{birthTimer.years}y {birthTimer.days}d {birthTimer.hours}h {birthTimer.minutes}m {birthTimer.seconds}s</>}
    </>)
}