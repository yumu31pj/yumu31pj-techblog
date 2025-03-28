import { PortfolioNavigationContexts } from "../../../_contexts/portfolio-common.contexts";
import { PortfolioLogo } from "../PortfolioLogo/PortfolioLogo";
import { PortfolioNavigation } from "../PortfolioNavigation/PortfolioNavigation";
import styles from "./PortfolioHeader.module.scss";

export const PortfolioHeader = () => {
  return (
    <header id="header" className={styles['c-header']}>
      <div className={styles['c-header__logo-container']}>
        <PortfolioLogo />
      </div>
      <div className={styles['c-header__navigation']}>
        <PortfolioNavigation navItems={PortfolioNavigationContexts.navItems} />
      </div>
    </header>
  )
}