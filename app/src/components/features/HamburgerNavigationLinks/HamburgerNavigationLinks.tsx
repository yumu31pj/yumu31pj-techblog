import type { PageMapType } from "~/src/configs/SiteInfo";
import styles from "./HamburgerNavigationLinks.module.scss";

type HamburgerNavigationLinksProps = {
  links: PageMapType
}

export const HamburgerNavigationLinks = (props: HamburgerNavigationLinksProps) => {
  const { links } = props;

  return (
    <nav className={styles['hamburger-main-links']}>
      <ul className={styles['hamburger-main-links__items']}>
        {Object.keys(links).map((key) => {
          const link = links[key];
          if (link.isDisplayedOnHamburgerNavigation) {
            return <li key={key}><a href={link.path}>{link.pageTitle} {link.isExternal ? 'target="_blank' : undefined}</a></li>;
          }
          return null;
        })}
      </ul>
    </nav>
  )
}