import styles from "./StoreSectionTitle.module.scss";

type StoreSectionTitleProps = {
  title: string;
}

export const StoreSectionTitle = (props: StoreSectionTitleProps) => {
  const { title } = props;
  return (
    <h2 className={styles["c-section-title"]}>{title}</h2>
  )
}