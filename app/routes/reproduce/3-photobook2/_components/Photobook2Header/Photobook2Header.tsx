import { Photobook2Logo } from "../Photobook2Logo/Photobook2Logo";
import styles from "./Photobook2Header.module.scss";

export const Photobook2Header = () => {
  return (
    <div id="header" className={styles['c-header']}>
    {/* <header id="header"> */}
      <Photobook2Logo />
    {/* </header> */}
    </div>
  )
}