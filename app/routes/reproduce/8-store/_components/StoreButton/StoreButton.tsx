import styles from "./StoreButton.module.scss";

export type StoreButtonProps = {
  title: string;
  linkTo: string;
}

export const StoreButton = (props: StoreButtonProps) => {
  const { title, linkTo } = props;

  return (
    <a href={linkTo} className={styles["c-button"]}>{title}</a>
  )
}