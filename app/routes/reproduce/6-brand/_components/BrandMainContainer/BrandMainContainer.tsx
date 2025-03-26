import styles from "./BrandMainContainer.module.scss";

export const BrandMainContainer = ({children} : {children: React.ReactNode}) => {
  return (
    <main className={styles["l-main-container"]}>
      {children}
    </main>
  )
}