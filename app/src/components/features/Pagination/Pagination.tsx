import { useParams } from "react-router";
import type { PaginationType } from "~/src/components/features/Pagination/PaginationType";
import styles from './Pagination.module.scss';

const Pagination = (props: PaginationType) => {
  const { totalCount, slug, postsPerPage } = props;
  const { page } = useParams();
  const pageNumber = page ? parseInt(page, 10) : 1;

  const pageNum = Math.ceil(totalCount / postsPerPage);
  const pageList = Array.from({ length: pageNum }, (_, index) => index + 1);
  const listLength = pageList.length || 0;

  const displayedListLength = 5;
  const morePageMark = "…";

  const firstPage = 1;
  const lastPage = pageList[pageList.length - 1];

  const newDisplayedList = [firstPage];
  const halfLength = Math.floor((displayedListLength - 2) / 2);
  let startPage = Math.max(firstPage + 1, pageNumber - halfLength);
  let endPage = Math.min(lastPage - 1, pageNumber + halfLength);

  if (endPage - startPage + 1 < displayedListLength - 2) {
    if (pageNumber <= halfLength + 1) {
      endPage = Math.min(lastPage - 1, startPage + displayedListLength - 3);
    } else if (pageNumber + halfLength >= lastPage) {
      startPage = Math.max(firstPage + 1, endPage - (displayedListLength - 3));
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    newDisplayedList.push(i);
  }

  if (lastPage !== firstPage) {
    newDisplayedList.push(lastPage);
  }

  const resultList: (number | string)[] = [];
  newDisplayedList.forEach((page, index) => {
    if (index > 0 && page - newDisplayedList[index - 1] > 1) {
      resultList.push(morePageMark);
    }
    resultList.push(page);
  });

  return (
    <>
      {pageList.length <= 1 ? null : (
        <>
          <ul className={styles["contentsList"]}>
            {resultList.map((data, index) => (
              data === pageNumber ? (
                <li key={index} className={styles['page-active']}>
                  <span>{data}</span>
                </li>
              ) : data === morePageMark ? (
                <li key={index} className={styles['page-dots']}>
                  <span>{data}</span>
                </li>
              ) : (
                <li key={index}>
                  <a href={`/${slug}/page/${data}`}>
                    <span>{data}</span>
                  </a>
                </li>
              )
            ))}
          </ul>
          <div className={styles.pagination__count}>
            {pageNumber}/{pageNum}ページ
          </div>
        </>
      )}
    </>
  );
};

export default Pagination;