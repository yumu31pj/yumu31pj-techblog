'use client';

import Loader from "@/_libs/components/atoms/images/Loader/Loader";
import useFetchContentDetail from "@/_libs/hooks/microCMS/useFetchContentDetail.hooks";
import { getFormatedDateString } from "@/_libs/utils/getFormatedDateString";
import PageFlip from "@/_src/components/molecules/PageFlip/PageFlip";
import { microCMSAuth } from "@/_src/configs/microCMSApi";
import { SiteInfo } from "@/_src/configs/siteInfo";
import { Category } from "@/_src/types/microCMS/Category.types";
import parse from "html-react-parser";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import styles from './page.module.scss';

const BlogContent = () => {
  const searchParams = useSearchParams();
  const contentId = searchParams.get("id") || "";
  const endpointId = "blog";

  const {isLoading, response, hasError, errorMessage} = useFetchContentDetail(microCMSAuth, contentId, endpointId);

  useEffect(() => {
    if (response) {
      document.title = response.title + " | " + SiteInfo.siteTitle;
      document.querySelector('meta[name="description"]')?.setAttribute("content", response.title + " | " + SiteInfo.siteTitle);
    }
  }, [response])

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
      <div className={styles['aritcle-wrapper']}>
        {response ? (
          <section className={styles['article']}>
            <h2>{response.title}</h2>
            {response.categories ? (
              <ul>
                {response.categories.map((item:Category, key:number) => (
                  <li key={key}>{item.name}</li>
                ))}
              </ul>
            ) : null}
            <span className={styles['published']}>{getFormatedDateString(response.publishedAt)}</span>
            <div className={styles['content-body']}>{parse(response.content)}</div>
            <a href="/" className={styles['back-to-top']}>トップに戻る</a>
          </section>
        ) : null}
      </div>
      <PageFlip
        microCMSAuth={microCMSAuth}
        endpointId={endpointId}
        contentId={contentId}
      />
    </Suspense>
  );
}

export default BlogContent;
