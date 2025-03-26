import styles from "./PhotobookHeader.module.scss";

export const PhotobookHeader = () => {
  return (
    <header className={styles['c-header']}>
      <a href="/reproduce/">
        <img src="/images/reproduce/2-photobook/logo.svg" alt="Photo Book" width="160" height="18" />
      </a>
    </header>
  )
}