import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <p>
        The repo can be found{" "}
        <a className={styles.a} href="https://github.com/Dimterion/Nextjs-learning-app">here</a>
      </p>
    </section>
  );
}
