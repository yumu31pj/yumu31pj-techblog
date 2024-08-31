
import BreadcrumbJsonLD from "@/components/atoms/texts/BreadcrumbJsonLD/BreadcrumbJsonLD";
import FooterBasicWrapper from "@/components/layouts/footers/FooterBasicWrapper/FooterBasicWrapper";
import { PageMap } from "app/_src/configs/siteInfo";
import FooterJsonLDWrapper from "../../layouts/FooterJsonLDWrapper/FooterJsonLDWrapper";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <FooterBasicWrapper>
      <ul className={styles['footer-sitemap']}>
        {Object.entries(PageMap).map(([key, item]) => (
          <li key={key}>
            <a href={item.slug}>{item.title}</a>
          </li>
        ))}
      </ul>
      <small className={styles['footer']}>e.ron@yumu31pj</small>
      <FooterJsonLDWrapper>
        <BreadcrumbJsonLD sitemap={PageMap}/>
      </FooterJsonLDWrapper>
    </FooterBasicWrapper>
  )
}

export default Footer;