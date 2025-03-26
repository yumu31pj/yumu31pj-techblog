import styles from "./BrandMainContainer.module.scss";

export const BrandMainContainer = ({children} : {children: React.ReactNode}) => {
  return (
    <div className={styles["l-main-container"]}>
    {/* <main className={styles["l-main-container"]}> */}
      {children}
    {/* </main> */}
    </div>
  )
}