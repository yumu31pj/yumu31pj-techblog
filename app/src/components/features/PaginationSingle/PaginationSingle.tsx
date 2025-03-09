import styles from "./PaginationSingle.module.scss";

export type PaginationSingleType = {
  path: string,
  prev?: {
    id: string,
    title: string,
  },
  next?: {
    id: string,
    title: string,
  }
};


const PaginationSingle = (props: PaginationSingleType) => {
  const {path, prev, next} = props;

  return (
    <>
        <ul className={styles['pagination-single']}>
          {prev && (
            <li className={styles['pagination-single__prev']}>
              <a className={`${styles['pagination-single__title']} ${styles['pagination-single__title--prev']}`} href={`${path}/${prev.id}`}>{prev.title}</a>
            </li>
          )}
          {next && (
            <li className={styles['pagination-single__next']}>
              <a className={`${styles['pagination-single__title']} ${styles['pagination-single__title--next']}`} href={`${path}/${next.id}`}>{next.title}</a>
            </li>
          )}
        </ul>
    </>
  );
};

export default PaginationSingle;
