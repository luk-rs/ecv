import Link from "next/link";

const Header = () => {
  return (
    <header>
      <section>LOGO</section>
      <section>
        <nav>
          <ul>
            <li><Link href="/#who">Who</Link></li>
            <li><Link href="/#who">Education</Link></li>
            <li><Link href="/#who">Professional</Link></li>
            <li><Link href="/#who">Personal</Link></li>
          </ul>
        </nav>
      </section>
      <section>
        SELO
      </section>
    </header>
  );
}

export default Header;