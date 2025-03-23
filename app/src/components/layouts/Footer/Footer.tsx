import FooterNavigation from "~/src/components/features/FooterNavigation/FooterNavigation";
import { PageMap } from "~/src/configs/SiteInfo";
import { BreadcrumbJsonLD } from "../../features/BreadcrumbJsonLD/BreadcrumbJsonLD";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer id="footer" className={styles['footer']}>
      <FooterNavigation links={PageMap} />
      <p className={styles["copyright"]}>yumu31pj</p>
      <BreadcrumbJsonLD />
    </footer>
  )
}

export default Footer;