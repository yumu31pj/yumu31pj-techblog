import styles from "./ECFooter.module.scss";

export const ECFooter = () => {
  return (
    <footer id="footer" className={styles["l-footer"]}>
      <small className={styles["c-copyright"]}>© TOTALLY</small>
    </footer>
  )
}