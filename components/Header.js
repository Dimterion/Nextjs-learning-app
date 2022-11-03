import Link from "next/link";
import Image from "next/image";
import profileImg from "../public/profileImg.png";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.profileImg}
          src={profileImg}
          alt="Profile image"
          width={100}
          height={100}
        />
      </Link>
      <h1 className={styles.h1}>This is a website created with Next.js</h1>
      <ul className={styles.ul}>
        <li>
          <Link href="/">
            <a className={styles.li}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={styles.li}>About</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
