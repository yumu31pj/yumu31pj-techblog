import styles from "./PortfolioFooter.module.scss";

export const PortfolioFooter = () => {
  return (
    <footer id="footer" className={styles['c-footer']}>
      <small className={styles['c-copyright']}>© 2020 My Work</small>
    </footer>
  )
}