import styles from "./HomeSectionTitle.module.scss";

type HomeSectionTitleProps = {
  text: string;
}

export const HomeSectionTitle = (props: HomeSectionTitleProps) => {
  const {text} = props;

  return (
    <h2 className={styles['c-home-sec-title']}>{text}</h2>
  )
}