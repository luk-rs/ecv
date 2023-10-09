'use client'

import { useEffect, useState } from "react";

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
export default function BirthClock() {
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
  });

  return (
    <>
      {birthTimer !== null && <>{birthTimer.years}y {birthTimer.days}d {birthTimer.hours}h {birthTimer.minutes}m {birthTimer.seconds}s</>}
    </>)
}