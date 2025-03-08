import type { PaginationDetailType } from "~/src/components/features/PaginationDetail/PaginationDetailType";
import styles from "./PaginationDetail.module.scss";

const PaginationDetail = (props: PaginationDetailType) => {
  const {path, prev, next} = props;

  return (
    <>
        <ul className={styles.prevNext}>
          {prev && (
            <li className={styles.prevNext__prev}>
              <a className={styles.prevNext__title} href={`${path}/${prev.id}`}>{prev.title}</a>
            </li>
          )}
          {next && (
            <li className={styles.prevNext__next}>
              <a className={styles.prevNext__title} href={`${path}/${next.id}`}>{next.title}</a>
            </li>
          )}
        </ul>
    </>
  );
};

export default PaginationDetail;
