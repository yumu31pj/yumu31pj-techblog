import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles['c-footer']}>
      <small className={styles['c-copyright']}>© 2020 Profile</small>
    </footer>
  )
}