import { StoreFooterContents } from "../StoreFooterContents/StoreFooterContents";
import styles from "./StoreFooter.module.scss";

export const StoreFooter = () => {
  return (
    <footer className={styles["l-footer"]}>
      <div className={styles["c-footer-contents-container"]}>
        <StoreFooterContents />
      </div>
      <div className={styles["c-copyright"]}>
        <small>© Mag88</small>
      </div>
    </footer>
  )
}