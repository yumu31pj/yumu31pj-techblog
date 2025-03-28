import styles from "./PortfolioNavigation.module.scss";

export type PortfolioNavigationProps = {
  navItems: {
    linkItems: {
      title: string;
      linkTo: string;
    } [],
    instagramURL?: string;
  }
}

export const PortfolioNavigation = (props: PortfolioNavigationProps) => {
  const {navItems} = props;

  return (
    <nav className={styles['c-header-navigation']}>
      <ul className={styles['c-header-navigation__items']}>
        {navItems.linkItems.map((item, key: number) => (
          <li key={key}><a href={item.linkTo}>{item.title}</a></li>
        ))}
        {navItems.instagramURL && (
          <li>
            <a href={navItems.instagramURL} target="_blank" rel="noopener noreferer">
              <img src="/images/reproduce/7-portfolio/common/icon-instagram.svg" alt="Instagramのイメージ画像" width="20" height="20" loading="lazy"/>
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}