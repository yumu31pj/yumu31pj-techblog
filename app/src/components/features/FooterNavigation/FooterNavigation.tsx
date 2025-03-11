import type { PageMapType } from "~/src/configs/SiteInfo";
import styles from "./FooterNavigation.module.scss";

export type FooterNavigationProps = {
  links: PageMapType
}

const FooterNavigation = (props: FooterNavigationProps) => {
  const {links} = props;
  return (
    <nav className={styles["footer-navigation"]}>
      <ul className={styles["footer-navigation__items"]}>
        {Object.keys(links).map((key) => {
          const link = links[key];
          if (link.isDisplayedOnFooterNavigation) {
            return <li key={key}><a href={link.path}>{link.pageTitle} {link.isExternal ? 'target="_blank' : undefined}</a></li>;
          }
          return null;
        })}
      </ul>
    </nav>
  )
}

export default FooterNavigation;