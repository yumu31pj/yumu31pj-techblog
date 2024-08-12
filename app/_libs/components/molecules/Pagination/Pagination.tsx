'use client';

import { useEffect, useState } from "react";
import styles from './Pagination.module.scss';
import { PaginationType } from "./PaginationType";

const Pagination = (props: PaginationType) => {
  const { totalCount, url, postsPerPage, pageNumber } = props;
  const pageNum = Math.ceil(totalCount / postsPerPage);
  const pageList = Array.from({ length: pageNum }, (_, index) => index + 1);
  const listLength = pageList.length || 0;
  const displayedListLength = 5;
  const fixedDisplayListNum = displayedListLength - 2
  const pageNextMark = '>';
  const pagePrevMark = '<';
  
  const initShadowIndex = () => {
    let initShadowIndex = Number(pageNumber) - 1 || 0;
    if (Number(pageNumber) - 1 <= fixedDisplayListNum) {
      initShadowIndex = fixedDisplayListNum - 1;
    } else if (Number(pageNumber) + fixedDisplayListNum >= pageList.length) {
      initShadowIndex = pageList.length - fixedDisplayListNum;
    } else {
      initShadowIndex = Number(pageNumber) - 1 || 0;
    }
    return initShadowIndex;
  }
  
  const [shadowListIndex, setShadowListIndex] = useState(initShadowIndex());

  // console.log("pageNumber: " + pageNumber);
  const [displayedList, setDisplayedList] = useState<Array<number | string>>(pageList);

  useEffect(() => {
    updateDisplayedList();
  }, [shadowListIndex]);

  const updateDisplayedList = () => {
    if (pageList.length <= 2) {
      setDisplayedList([...pageList]);
      return;
    }
    
    if(shadowListIndex < displayedList.length - 1 && shadowListIndex + 3 <= displayedListLength) {
      // console.log('condition1');
      setDisplayedList([...pageList.slice(0, displayedListLength - 2), pageNextMark, pageList[pageList.length - 1]]);
    } else if (shadowListIndex + 2 >= pageList.length - 1) {
      // console.log('condition2');
      setDisplayedList([...pageList.slice(0,1), pagePrevMark, ...pageList.slice(-3)]);
    } else {
      // console.log('condition3');
      setDisplayedList([...pageList.slice(0,1), pagePrevMark, ...pageList.slice(shadowListIndex, shadowListIndex + 3),pageNextMark, pageList[pageList.length - 1]]);
    }
  }

  const movePage = (increment: number) => () => {
    setShadowListIndex(shadowListIndex + increment);
      updateDisplayedList();
    };

  return (
    <>
      {pageList.length <= 1 ? (
        null
      ): (
        <>
          <ul className={styles['pagination']}>
          {displayedList.map((data, index) => (
            data == pageNumber ? (
              <li key={index} className={styles['page-active']}>
                <span>{data}</span>
              </li>
              ): 
            data == pageNextMark ?(
              <li key={index}>
                <span className={styles['page-next']} onClick={movePage(1)}>
                  {data}
                </span>
              </li>
            ): 
            data == pagePrevMark ? (
              <li key={index}>
                <span className={styles['page-prev']} onClick={movePage(-1)}>{data}</span>
              </li>
            ) : (
              <li key={index}>
                <a href={`${url}?page=${data}`}><span onClick={movePage(1)}>{data}</span></a>
              </li>
            ))
          )}
        </ul>
        <div className={styles.pagination__count}>{pageNumber}/{pageNum}ページ</div>
      </>
      )}
    </>
  );

}

export default Pagination;