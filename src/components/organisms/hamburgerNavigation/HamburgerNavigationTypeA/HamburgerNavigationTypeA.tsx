'use client'; 

import HamburgerButtonTypeA from "@/components/atoms/buttons/hamburgers/HamburgerButtonTypeA/HamburgerButtonTypeA";
import HamburgerMenuTypeA from "@/components/atoms/links/HamburgerMenuTypeA/HamburgerMenuTypeA";
import useToggleHamburger from "@/hooks/useToggleHamburger.hooks";
import styles from "./HamburgerNavigationTypeA.module.scss";
import { HamburgerNavigationTypeAType } from "./HamburgerNavigationTypeA.types";

const HamburgerNavigationTypeA = (props: HamburgerNavigationTypeAType) => {
  const {linkItems} = props;

  const [isHamburgerOpen, toggleIsHamburgerOpen] = useToggleHamburger(false);

  return (
    <div className={styles['hamburger-navigation']}>

      <div className={styles['hamburger-navigation__button']}>
        <HamburgerButtonTypeA
          isHamburgerOpen={isHamburgerOpen}
          toggleIsHamburgerOpen={toggleIsHamburgerOpen}
        />
      </div>

      <div className={styles['hamburger-navigation__contents'] + (isHamburgerOpen ? ` ${styles['hamburger-navigation__contents--open']}` : ` ${styles['hamburger-navigation__contents--close']}`)}>
        <HamburgerMenuTypeA
          linkItems={linkItems}
        />
      </div>
    </div>
  )
}

export default HamburgerNavigationTypeA;