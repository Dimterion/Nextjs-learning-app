import { Button } from "../components/Button";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <div>This is the Home page.</div>
      <Button />
    </div>
  );
}
