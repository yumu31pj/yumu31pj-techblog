import { HamburgerButton } from "~/src/components/parts/HamburgerButton/HamburgerButton";
import useToggleIsHamburgerOpen from "~/src/hooks/useToggleIsOpen";
import styles from "./HamburgerNavigation.module.scss";

export const HamburgerNavigation = ({children}: {children: React.ReactNode}) => {

  const [isHamburgerOpen, toggleIsHamburgerOpen] = useToggleIsHamburgerOpen(false); 

  return (
    <div className={styles['hamburger']}>
      <HamburgerButton 
        isHamburgerOpen={isHamburgerOpen}
        toggleIsHamburgerOpen={toggleIsHamburgerOpen}
      />
      <div className={`${styles['hamburger__menu-container']} ${isHamburgerOpen ? styles['hamburger__menu-container--open'] : undefined}`}>
        {children}
      </div>
    </div>
  )
}