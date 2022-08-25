import Link from "next/link";
import Image from "next/image";
import profileImg from "../public/profileImg.png";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <Image src={profileImg} alt="Profile image" width={100} height={100} />
      <h1>This is a simple app created with Next.js</h1>
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
    </div>
  );
}

export default Header;
