import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <p>
        For now I am using{" "}
        <a
          className={styles.a}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Dimterion"
        >
          React
        </a>{" "}
        mostly, but sometimes like to check something else (for example Next.js
        in this case).<br></br>
        <br></br>The repo for this app can be found{" "}
        <a
          className={styles.a}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Dimterion/Nextjs-learning-app"
        >
          here
        </a>
        .<br></br>
        <br></br>
        You can also check my Medium stories if you want.{" "}
        <a
          className={styles.a}
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@dimterion"
        >
          Here is a link
        </a>
        .
      </p>
    </section>
  );
}
