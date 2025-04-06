import { Corporatelogo } from "../CorporateLogo/CorporateLogo";
import styles from "./CorporateFooter.module.scss";

export const CorporateFooter = () => {
  return (
    <footer id="footer" className={styles["c-footer"]}>
      <div className={styles["c-footer-content"]}>
        <div className={styles["c-footer-content__logo-wrapper"]}>
          <Corporatelogo />
        </div>
        <div className={styles["c-footer-content__contact"]}>
          <div>Web Entertainment Design Inc.
          West Building 3F</div>
          <div>9-99 Sakuragaokacho Shibuya-ku
          Tokyo, Japan 150-0031</div>
          <div>T/99-9999-9999</div>
        </div>
      </div>
      <div className={styles["c-footer-logo-container"]}>
        <small className="c-footer-logo">© Web Entertainment Design Inc.</small>

      </div>
    </footer>
  )
}