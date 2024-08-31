'use client';

import Pagination from "@/components/molecules/Pagination/Pagination";
import useFetchContens from "@/hooks/microCMS/useFetchContens.hooks";
import getOffset from "@/utils/getOffset";
import { ArchiveBoxType } from "app/_src/components/organisms/archives/ArchiveBox/ArchiveBox.types";
import ArticleSimpleList from "app/_src/components/organisms/articleItems/ArticleSimpleList/ArticleSimpleList";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import styles from "./NewsArchive.module.scss";

const NewsArchive = (props: ArchiveBoxType) => {
  const {microCMSAuth, microCMSQuery} = props;

  const searchParams = useSearchParams();
  const currentPageNum = searchParams.get("page") || "1";

  const offset = getOffset(Number(currentPageNum), microCMSQuery.postsPerPage);

  const {isLoading, response, hasError, errorMessage} = useFetchContens(microCMSAuth, microCMSQuery, offset);

  if (isLoading) {
    return (
      <></>
    );
  };

  if (hasError) {
    return (
      <p style={{textAlign: "center"}}>{errorMessage}</p>
    );
  }

  return (
    <Suspense>
      <div className={styles["news-archive"]}>
        <div className={styles["news-archive__body"]}>
          <ArticleSimpleList
            articles={response.contents}
          />
        </div>
        <div className={styles['news-archive__pagination']}>
          <Pagination
            totalCount={response.totalCount}
            url={""}
            postsPerPage={microCMSQuery.postsPerPage}
            pageNumber={currentPageNum}
          />
        </div>
      </div>
    </Suspense>
  )
}

export default NewsArchive;