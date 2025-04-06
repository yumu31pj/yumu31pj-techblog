import styles from "./CorporateSectionTitle.module.scss";

export type CorporateSectionTitleProps = {
  titleEN: string;
  titleJP: string;
}

export const CorporateSectionTitle = (props: CorporateSectionTitleProps) => {
  const { titleEN, titleJP } = props;

  return (
    <div className={styles['c-section-title']}>
      <span className={styles['c-section-title__subtitle']}>{titleEN}</span>
      <h2 className={styles['c-section-title__title']}>{titleJP}</h2>
    </div>
  )
}