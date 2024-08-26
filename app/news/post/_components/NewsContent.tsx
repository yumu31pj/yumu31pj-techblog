'use client';

import Loader from "@/_libs/components/atoms/images/Loader/Loader";
import SimpleTitleH2 from "@/_libs/components/atoms/titles/SimpleTitle/SimpleTitleH2/SimpleTitleH2";
import useFetchContentDetail from "@/_libs/hooks/microCMS/useFetchContentDetail.hooks";
import { getFormatedDateString } from "@/_libs/utils/getFormatedDateString";
import PageFlip from "@/_src/components/molecules/PageFlip/PageFlip";
import { MicroCMSAuth } from "@/_src/configs/microCMSApi";
import { NewsQuery } from "@/_src/configs/MicroCMSQueries";
import { SiteInfo } from "@/_src/configs/siteInfo";
import parse from "html-react-parser";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import styles from "./NewsContent.module.scss";

const NewsContent = () => {
  const searchParams = useSearchParams();
  const contentId = searchParams.get("id") || "";
  const endpointId = NewsQuery.endpointId;

  if (!contentId) {
    redirect('/news/');
  }

  const {isLoading, response, hasError, errorMessage} = useFetchContentDetail(MicroCMSAuth, contentId, endpointId);

  useEffect(() => {
    if (response) {
      document.title = response.title + " | " + SiteInfo.siteTitle;
      document.querySelector('meta[name="description"]')?.setAttribute("content", response.title + " | " + SiteInfo.siteTitle);
    }
  }, [response, searchParams, contentId])

  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (hasError) {
    return (
      <p>{errorMessage}</p>
    )
  }

  return (
    <Suspense>
      <div className={styles['article']}>
        {response ? (
          <section className={`p-microcms-single ${styles['article-section']}`}>
            <div className={styles['article-section__title']}>
              <SimpleTitleH2 title={response.title} />
            </div>
            <span className={styles['article-section__published']}>{getFormatedDateString(response.publishedAt)}</span>

            <div className={`p-microcms-single__body ${styles['article-section__body']}`}>
              {parse(response.body)}
            </div>

          </section>
        ) : null}
      </div>

      <PageFlip
          microCMSAuth={MicroCMSAuth}
          endpointId={endpointId}
          contentId={contentId}
        />
    </Suspense>
  )
}

export default NewsContent;