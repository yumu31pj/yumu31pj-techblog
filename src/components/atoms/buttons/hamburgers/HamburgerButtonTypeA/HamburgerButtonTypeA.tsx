import { HamburgerButtonType } from "@/types/HamburgerButton.types";
import styles from "./HamburgerButtonTypeA.module.scss";

/**
 * When calling this component, define const [isHamburgerOpen, toggleIsHamburgerOpen] = useToggleHamburger(false); in the parent component, 
 * and pass isHamburgerOpen and toggleIsHamburgerOpen as props when calling it.
 */

const HamburgerButtonTypeA = (props: HamburgerButtonType) => {
  const {isHamburgerOpen, toggleIsHamburgerOpen} = props;

  return (
    <button 
      className={styles['hamburger']}
      name="Hamburger Menu"
      aria-expanded={isHamburgerOpen}
      aria-label="Open Menu"
      aria-controls="navigation"
      onClick={toggleIsHamburgerOpen}
      type="button"
    >
      <div className={styles['hamburger__inner']}>
        <span className={styles['hamburger__bar-top']}></span>
        <span className={styles['hamburger__bar-bottom']}></span>
      </div>
    </button>
  )
}

export default HamburgerButtonTypeA;
