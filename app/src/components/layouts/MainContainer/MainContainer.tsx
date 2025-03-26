import styles from "./MainContainer.module.scss";

type MainContainerProps = {
  children: React.ReactNode;
  type?: 'centered' | 'fullWidth';
}

const MainContainer = (props: MainContainerProps) => {
  const {children, type} = props;

  const baseClass = 'main-container';
  const modifierClass = type ? baseClass + "--" + type : baseClass + "--centered"

  return (
    <main className={`${styles[baseClass]} ${styles[modifierClass]}`}>
      {children}
    </main>
  )
}

export default MainContainer;