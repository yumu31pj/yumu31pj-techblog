import { SiteInfo } from "~/src/configs/SiteInfo";
import styles from "./Header.module.scss";

const Header = () => {
  
  return (
    <header id="header" className={styles['header']}>
      <a href="/">
        <h1 className={styles['header-logo']}>
          <picture>
            <source srcSet="/images/common/logo.webp" width={"500"} height={"72"} />
            <img src="/images/commmon/logo.png" alt={SiteInfo.siteTitle} width="500" height="72" />
          </picture>
        </h1>
      </a>
    </header>
  )
}

export default Header;