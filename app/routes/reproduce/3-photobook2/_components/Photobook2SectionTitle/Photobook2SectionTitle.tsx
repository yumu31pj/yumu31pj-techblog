import styles from "./Photobook2SectionTitle.module.scss";

type Photobook2SectionTitleProps = {
  title: string;
}
export const Photobook2SectionTitle = (props: Photobook2SectionTitleProps) => {
  const {title} = props;
  return (
    <h2 className={styles['c-section-title']}>{title}</h2>
  )
}