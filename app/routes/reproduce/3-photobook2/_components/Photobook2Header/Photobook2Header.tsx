import { Photobook2Logo } from "../Photobook2Logo/Photobook2Logo";
import styles from "./Photobook2Header.module.scss";

export const Photobook2Header = () => {
  return (
    <header id="header" className={styles['c-header']}>
      <a href="/reproduce">
        <Photobook2Logo />
      </a>
    </header>
  )
}