import styles from "./NumberList.module.scss";

export type NumberListType = {
  listItem: string[];
}

export const NumberList = (props: NumberListType) => {
  const {listItem} = props;
  return (
    <ol className={styles["c-number-list"]}>
      {listItem.map((item: string, key: number) => (
        <li key={key}>{item}</li>
      ))}
    </ol>
  )
}