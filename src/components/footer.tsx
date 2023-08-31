import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <section>
        <p>copyrights reserved ©</p>
      </section>
      <section>
        <Link href="/#who">Contact</Link>
      </section>
    </footer>
  );
}

export default Footer;