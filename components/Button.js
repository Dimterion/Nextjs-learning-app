import styles from '../styles/Button.module.css'

export function Button() {
  return (
    <button
      type='button'
      className={styles.error}
      onClick={() => console.log("Hello.")}
    >
      Say hello to you little console.log.
    </button>
  )
}
