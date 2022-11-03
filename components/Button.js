import styles from "../styles/Button.module.css";

export function Button({ btnText, alertText }) {
  return (
    <button
      type="button"
      className={styles.btn}
      onClick={() => alert(`${alertText}`)}
    >
      {btnText}
    </button>
  );
}
