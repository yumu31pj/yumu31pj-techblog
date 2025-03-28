import styles from "./StoreDivContainer.module.scss";

export const StoreDivContainer = ({children}: {children: React.ReactNode}) => {

  return (
    <div className={styles["l-div-container"]}>
      {children}
    </div>
  )
}