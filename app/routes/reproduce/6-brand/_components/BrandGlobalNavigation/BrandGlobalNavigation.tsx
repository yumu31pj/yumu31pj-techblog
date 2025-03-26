import { BrandLogo } from "../BrandLogo/BrandLogo";
import styles from "./BrandGlobalNavigation.module.scss";

export type BrandGlobalNavigationProps = {
  navItems: {
    title: string;
    linkTo: string;
  }[]
}

export const BrandGrobalNavigation = (props: BrandGlobalNavigationProps) => {
  const {navItems} = props;
  return (
    <div className={styles['l-gnav-container']}>
      <BrandLogo />
      <nav className={styles['c-gnav']}>
        <ul>
          {navItems.map((item, key: number) => (
            <li key={key}>
              <a href={item.linkTo}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}