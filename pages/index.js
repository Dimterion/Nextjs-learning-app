import { Button } from "../components/Button";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <section className={styles.section}>
      <ul>
        <li>
          This app was made by following some of the documentation on{" "}
          <a
            className={styles.a}
            href="https://nextjs.org/docs/getting-started"
          >
            Next.js
          </a>{" "}
          website
        </li>
        <li>
          The app is created with <i>create-next-app</i>
        </li>
        <li>
          It is also deployed on{" "}
          <a className={styles.a} href="https://vercel.com/">
            Vercel
          </a>
        </li>
        <li>
          This{" "}
          <Button
            btnText="Button"
            alertText="If Next.js is a React framework, why does it say that js is next? Maybe there's a hidden message within its name saying that learning js properly is always a good idea."
          />
          was made as a separate component and only shows an alert.
        </li>
        <li>
          The app consists of two pages (Home and About) and three components
          (Header, Footer and Button)
        </li>
        <li>
          The styling is made with the regular CSS and (except for a few global styles) set separately for each page and component
        </li>
      </ul>
    </section>
  );
}
