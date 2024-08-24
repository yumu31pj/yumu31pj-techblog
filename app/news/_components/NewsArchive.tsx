'use client';

import Pagination from "@/_libs/components/molecules/Pagination/Pagination";
import useFetchContens from "@/_libs/hooks/microCMS/useFetchCategoryList.hooks";
import getOffset from "@/_libs/utils/getOffset";
import { ArchiveBoxType } from "@/_src/components/organisms/archives/ArchiveBox/ArchiveBox.types";
import ArticleSimpleList from "@/_src/components/organisms/articleItems/ArticleSimpleList/ArticleSimpleList";
import { useSearchParams } from "next/navigation";
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
  )
}

export default NewsArchive;