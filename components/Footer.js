import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.a}
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/Dimterion"
      >
        Come say hi
      </a>
    </footer>
  );
}

export default Footer;
