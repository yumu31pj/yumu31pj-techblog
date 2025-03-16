import styles from "./HamburgerButton.module.scss";

export type HamburgerButtonProps = {
  isHamburgerOpen: boolean;
  toggleIsHamburgerOpen: React.MouseEventHandler<HTMLButtonElement>;
}

export const HamburgerButton = (props: HamburgerButtonProps) => {
  const {isHamburgerOpen, toggleIsHamburgerOpen} = props;
  const areaLabelText = isHamburgerOpen ? "Close Menu" : "Open Menu";

  return (
    <button 
      type="button"
      name="Hamburger Menu"
      className={styles['hamburger-button']}
      aria-expanded={isHamburgerOpen}
      aria-controls="navigation"
      aria-label={areaLabelText}
      onClick={toggleIsHamburgerOpen}
    >
      <span className={`${styles['hamburger-button__line']} ${styles['hamburger-button__line--top']}`}></span>
      <span className={`${styles['hamburger-button__line']} ${styles['hamburger-button__line--middle']}`}></span>
      <span className={`${styles['hamburger-button__line']} ${styles['hamburger-button__line--bottom']}`}></span>
    </button>
  )
}