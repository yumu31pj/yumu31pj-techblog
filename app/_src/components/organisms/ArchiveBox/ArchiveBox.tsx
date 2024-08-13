'use client';

import Pagination from '@/_libs/components/molecules/Pagination/Pagination';
import useFetchContens from '@/_libs/hooks/microCMS/useFetchContens.hooks';
import { getFormatedDateString } from '@/_libs/utils/getFormatedDateString';
import getOffset from '@/_libs/utils/getOffset';
import { useSearchParams } from 'next/navigation';
import ArticleCard from '../../molecules/ArticleCard/ArticleCard';
import styles from './ArchiveBox.module.scss';
import { ArchiveBoxType } from './ArchiveBox.types';

const ArchiveBox = (props: ArchiveBoxType) => {

  const {microCMSAuth, microCMSQuery} = props;
  const slug = microCMSQuery.slug;
  const postsPerPage = microCMSQuery.postsPerPage;

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
    <div className={styles['archive-box']}>
      <ul className={styles['archive-box__items']}>
        {response.contents && response.contents.map((item: any, key: number) => (
          <li key={key} className={styles['archive-box__item']}>
            <ArticleCard
              title={item.title}
              linkTo={"post/?id=" + item.id}
              date={getFormatedDateString(item.publishedAt)}
              categories={item.categories}
            />
          </li>
        )) }
      </ul>
      <div className={styles['archive-box__pagination-wrappper']}>
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

export default ArchiveBox;