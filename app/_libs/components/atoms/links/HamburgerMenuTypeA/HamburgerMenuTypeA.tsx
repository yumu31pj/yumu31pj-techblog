import styles from "./HamburgerMenuTypeA.module.scss";
import { HamburgerMenuTypeAType } from "./HamburgerMenuTypeA.types";

const HamburgerMenuTypeA = (props: HamburgerMenuTypeAType) => {
  const {linkItems} = props;

  return (
    <ul className={styles['hamburger-menu-typeA']}>
      {Object.keys(linkItems).map((key: string, index: number) => (
        <li key={key} className={styles['hamburger-menu-typeA__item']}>
          <a href={linkItems[key].slug} {...(linkItems.isExternal && { target: "_blank", rel: "noreferrer noopener" })}>
            {linkItems[key].title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default HamburgerMenuTypeA;