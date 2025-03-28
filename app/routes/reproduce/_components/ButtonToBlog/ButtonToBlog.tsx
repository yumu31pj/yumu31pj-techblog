import styles from "./ButtonToBlog.module.scss";

export const ButtonToBlog = () => {
  return (
    <a href="/" className={styles["c-button-blog"]}>
      Back to<br />
      Blog
    </a>
  )
}