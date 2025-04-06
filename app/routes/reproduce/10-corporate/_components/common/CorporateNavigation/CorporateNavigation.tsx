import styles from "./CorporateNavigation.module.scss";

export type CorporateNavigationType = {
  title: string;
  linkTo: string;
} []

export const CorporateNavigation = ({navigationItems}: {navigationItems: CorporateNavigationType}) => {
  return (
    <nav className={styles["c-navigation"]}>
      <ul className={styles["c-navigation-items"]}>
        {navigationItems.map((item) => (
          <li key={item.title}>
            <a href={item.linkTo}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}