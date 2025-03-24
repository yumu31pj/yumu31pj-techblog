import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles['c-footer']}>
    {/* <footer className={styles['c-footer']}> */}
      <small className={styles['c-copyright']}>© 2020 Profile</small>
    {/* </footer> */}
    </div>
  )
}