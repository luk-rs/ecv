'use client'

import styles from "./welcome.module.css";


export default function Welcome() {

  const inspiration = "Recomeça... se puderes, sem angústia e sem pressa e os passos que deres, nesse caminho duro do futuro, dá-os em liberdade, enquanto não alcances não descanses, de nenhum fruto queiras só metade.".split('');
  inspiration.push('"');
  inspiration.unshift('"');

  const phrase = inspiration

    .map((char, idx) => (
      <span
        key={`welcome-span-${idx}`}
        style={{ animationDelay: `${.1 * idx}s` }}>
        {char}
      </span>
    ));

  return (
    <div className={styles.welcome}>
      <p>{phrase}</p>
    </div>
  );
}
