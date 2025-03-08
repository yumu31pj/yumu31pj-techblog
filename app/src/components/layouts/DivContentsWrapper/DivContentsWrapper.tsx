import styles from "./DivContentsWrapper.module.scss";

const DivContentsWrapper = ({children} : {children: React.ReactNode}) => {
  return (
    <div className={styles['div-wrapper']}>
      {children}
    </div>
  )
}

export default DivContentsWrapper;