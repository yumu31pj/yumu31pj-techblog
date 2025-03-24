import styles from "./SectionPhotobookIndex.module.scss";

export type PhotobookIndexProps = {
  indexItems: string[];
};

export const SectionPhotobookIndex = (props: PhotobookIndexProps) => {
  const {indexItems} = props;
  return (
    <section className={styles["c-index-sec"]}>
      <div className={styles["c-index-sec__inner"]}>
        <h2 className={styles["c-index-sec__title"]}>INDEX</h2>
        <ol className={styles["c-index-sec__list"]}>
        {indexItems.map((item: string, key: number) => (
          <li key={key}>{item}</li>
        ))}
        </ol>
      </div>
    </section>
  )
}