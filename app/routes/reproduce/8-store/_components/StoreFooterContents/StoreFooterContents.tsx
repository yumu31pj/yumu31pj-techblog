import { StoreLogo } from "../StoreLogo/StoreLogo";
import styles from "./StoreFooterContents.module.scss";

export const StoreFooterContents = () => {
  return (
    <div className={styles["c-footer-contents"]}>
      <div className={styles["c-footer-contents__logo"]}>
        <StoreLogo />
      </div>
      <div className={styles["c-footer-contents__body-wrapper"]}>
        <div className={styles["c-footer-contents__body-first"]}>
          <h3 className={styles["c-footer-contens-title"]}>タイトル</h3>
          <ul className={styles['c-dash-list']}>
            <li>テキストテキストテキスト</li>
            <li>テキストテキストテキスト</li>
            <li>テキストテキストテキスト</li>
            <li>テキストテキストテキスト</li>
            <li>テキストテキストテキスト</li>
          </ul>
        </div>
        <div className={styles["c-footer-contents__body-second"]}>
          <h3 className={styles["c-footer-contens-title"]}>タイトル</h3>
          <p className={styles["c-footer-paragraph"]}>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
      </div>
    </div>
  )
}