import FooterNavigation from "~/src/components/features/FooterNavigation/FooterNavigation";
import { PageMap } from "~/src/configs/SiteInfo";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <FooterNavigation links={PageMap} />
      <p className={styles["copyright"]}>yumu31pj</p>
    </footer>
  )
}

export default Footer;