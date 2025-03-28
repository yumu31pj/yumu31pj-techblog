import styles from "./PortfolioSectionTitle.module.scss";

type PortfolioSectionTitleProps = {
  title: string;
}

export const PortfolioSectionTitle = (props: PortfolioSectionTitleProps) => {
  const { title } = props;
  return (
    <h2 className={styles["c-section-title"]}>{title}</h2>
  )
}