import { Logo } from "../Logo/Logo";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles["c-header"]}>
      <a href="/reproduce/1-profile">
        <Logo />
      </a>
      <nav className={styles["c-header-gnav"]}>
        <ul className={styles["c-header-gnav-list"]}>
          <li><a href="#about">About</a></li>
          <li><a href="#bicycle">Bicycle</a></li>
        </ul>
      </nav>
    </header>
  )
}