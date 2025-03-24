import styles from "./PhotobookFooter.module.scss";

export const PhotobookFooter = () => {
  return (
    <div className={styles['c-footer']}>
    {/* <footer className={styles['c-footer']}> */}
      <small>© 2020 PHOTO BOOK</small>
    {/* </footer> */}
    </div>
  )
}