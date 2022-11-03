import Link from "next/link";
import { Button } from "../components/Button";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <section className={styles.section}>
      <ul className={styles.ul}>
        <li>
          This app was made by following the documentation on{" "}
          <a
            className={styles.a}
            target="_blank"
            rel="noopener noreferrer"
            href="https://nextjs.org/docs/getting-started"
          >
            Next.js
          </a>{" "}
          website
        </li>
        <li>
          It was made with <i>create-next-app</i>
        </li>
        <li>
          It is also deployed on{" "}
          <a
            className={styles.a}
            target="_blank"
            rel="noopener noreferrer"
            href="https://vercel.com/"
          >
            Vercel
          </a>
        </li>
        <li>
          <Button
            btnText="Existential Button"
            alertText="If Next.js is a React framework, why does it say that js is next? Maybe there's a hidden message within its name, saying that learning js properly is always a good idea."
          />
        </li>
        <li>
          The app consists of three pages (Home, Crypto and About) and three
          components (Header, Footer and Button)
        </li>
        <li>
          The styling is made with the regular CSS and (except for a few global
          styles) set separately for each page and component
        </li>
        <li>
          You can check the page, displaying current prices for Bitcoin and
          Ethereum{" "}
          <Link href="/crypto">
            <a className={styles.a}>here</a>
          </Link>
        </li>
      </ul>
    </section>
  );
}
