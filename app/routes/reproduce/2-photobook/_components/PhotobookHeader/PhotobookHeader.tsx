import styles from "./PhotobookHeader.module.scss";

export const PhotobookHeader = () => {
  return (
    <div className={styles['c-header']}>
    {/* <header className={styles['c-header']}> */}
      <a href="/reproduce/2-photobook">
        <img src="/images/reproduce/2-photobook/logo.svg" alt="Photo Book" width="160" height="18" />
      </a>
    {/* </header> */}
    </div>
  )
}