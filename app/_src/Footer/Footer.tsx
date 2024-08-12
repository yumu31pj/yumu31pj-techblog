import FooterBasicWrapper from "@/_libs/components/layouts/footers/FooterBasicWrapper/FooterBasicWrapper";
import { SiteInfo } from "../configs/siteInfo";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <FooterBasicWrapper>
      <small className={styles['footer']}>copyright: {SiteInfo.siteTitle}</small>
    </FooterBasicWrapper>
  )
}

export default Footer;