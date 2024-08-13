import BreadcrumbJsonLD from "@/_libs/components/atoms/texts/BreadcrumbJsonLD/BreadcrumbJsonLD";
import FooterBasicWrapper from "@/_libs/components/layouts/footers/FooterBasicWrapper/FooterBasicWrapper";
import { PageMap, SiteInfo } from "@/_src/configs/siteInfo";
import FooterJsonLDWrapper from "../../layouts/FooterJsonLDWrapper/FooterJsonLDWrapper";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <FooterBasicWrapper>
      <small className={styles['footer']}>copyright: {SiteInfo.siteTitle}</small>
      <FooterJsonLDWrapper>
        <BreadcrumbJsonLD sitemap={PageMap}/>
      </FooterJsonLDWrapper>
    </FooterBasicWrapper>
  )
}

export default Footer;