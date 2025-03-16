import { HamburgerButton } from "~/src/components/parts/HamburgerButton/HamburgerButton";
import useToggleIsHamburgerOpen from "~/src/hooks/useToggleIsHamburgerOpen";
import styles from "./Hamburger.module.scss";

export const Hamburger = ({children}: {children: React.ReactNode}) => {

  const [isHamburgerOpen, toggleIsHamburgerOpen] = useToggleIsHamburgerOpen(false); 

  return (
    <div className={styles['hamburger']}>
      <HamburgerButton 
        isHamburgerOpen={isHamburgerOpen}
        toggleIsHamburgerOpen={toggleIsHamburgerOpen}
      />
      <div className={styles['hamburger__menu-container']}>
        {children}
      </div>
    </div>
  )
}