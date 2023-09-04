import Hamburguer from "./hamburguer";
import styles from './header.module.css';

const Header = () => {

  const links = process.env.HTML_SECTIONS?.split(',');

  return (
    <header className={styles.header}>
      <section>LOGO</section>
      <section>
        <Hamburguer links={links ?? []} />
      </section>
    </header >
  );
}

export default Header;