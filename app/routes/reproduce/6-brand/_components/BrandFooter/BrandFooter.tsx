import { BrandLogo } from "../BrandLogo/BrandLogo";
import styles from "./BrandFooter.module.scss";

export const BrandFooter = () => {
  return (
    <footer id="footer" className={styles["l-footer"]}>
      <div className={styles['c-footer-logo']}>
        <BrandLogo />
      </div>
      <div className={styles['c-copyright']}>
        <small>© 2021 Wooden Jewelry</small>
      </div>
    </footer>
  )
}