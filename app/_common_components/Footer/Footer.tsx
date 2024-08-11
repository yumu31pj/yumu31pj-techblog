import { SiteInfo } from "@/app/_common/configs/siteInfo";
import FooterBasicWrapper from "@/app/_libs/components/layouts/footers/FooterBasicWrapper/FooterBasicWrapper";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <FooterBasicWrapper>
      <small className={styles['footer']}>copyright: {SiteInfo.siteTitle}</small>
    </FooterBasicWrapper>
  )
}

export default Footer;